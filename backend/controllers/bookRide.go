package controllers

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"

	jwt "github.com/golang-jwt/jwt"
)

func BookRide(w http.ResponseWriter, r *http.Request) {

	header, _ := r.Cookie("jwt")

	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)

	bookDetails := &models.BookingDetails{}
	bookDetails.UserId, _ = strconv.Atoi(claims.Issuer)

	var data map[string]interface{}
	body, _ := io.ReadAll(r.Body)
	err := json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		panic(err)
	}
	fmt.Println("data received by book ride is", data)
	json.Unmarshal([]byte(string(body)), &bookDetails)
	createdDetails := db.Create(bookDetails)
	var errMessage = createdDetails.Error
	if createdDetails.Error != nil {
		fmt.Println(errMessage)
	}

	var usr models.RideDetails
	db.Model(usr).Where("ride_id = ?", data["RideID"]).Update("status", "1")

	var resp = map[string]interface{}{"message": "Ride has been successfully booked"}
	json.NewEncoder(w).Encode(resp)
}
