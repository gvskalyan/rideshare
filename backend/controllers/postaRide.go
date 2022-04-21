package controllers

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"time"

	"github.com/bwmarrin/snowflake"
	jwt "github.com/golang-jwt/jwt"
)

func PostARide(w http.ResponseWriter, r *http.Request) {

	header, _ := r.Cookie("jwt")

	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)
	fmt.Println(claims.Issuer)

	rideDetails := &models.RideDetails{}
	rideDetails.UserId, _ = strconv.Atoi(claims.Issuer)

	var data map[string]interface{}
	body, _ := io.ReadAll(r.Body)
	err := json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		panic(err)
	}

	startTime, _ := time.Parse("2006-01-02 15:04:05", data["StartTime"].(string))
	endTime, _ := time.Parse("2006-01-02 15:04:05", data["EndTime"].(string))

	// if err != nil {
	// 	fmt.Println(err)
	// }
	rideDetails.ToStartTime = startTime
	rideDetails.ToEndTime = endTime

	node, err := snowflake.NewNode(1)
	// Generate a snowflake ID.
	id := node.Generate()
	rideDetails.RideId = fmt.Sprint(id)

	json.Unmarshal([]byte(string(body)), &rideDetails)
	createdDetails := db.Create(rideDetails)
	var errMessage = createdDetails.Error
	if createdDetails.Error != nil {
		fmt.Println(errMessage)
	}
	var resp = map[string]interface{}{"message": "Ride has been successfully posted"}
	json.NewEncoder(w).Encode(resp)
}
