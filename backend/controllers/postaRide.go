package controllers

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"time"

	jwt "github.com/golang-jwt/jwt"
)

//var db1 = utils.ConnectDB()

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
	json.Unmarshal([]byte(string(body)), &rideDetails)
	createdDetails := db.Create(rideDetails)
	var errMessage = createdDetails.Error
	if createdDetails.Error != nil {
		fmt.Println(errMessage)
	}
	var resp = map[string]interface{}{"message": "Ride has been successfully posted"}
	json.NewEncoder(w).Encode(resp)
}