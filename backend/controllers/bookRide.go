package controllers

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"

	jwt "github.com/golang-jwt/jwt"
	//"golang.org/x/crypto/bcrypt"
)

//var db2 = utils.ConnectDB()

func BookRide(w http.ResponseWriter, r *http.Request) {

	header, _ := r.Cookie("jwt")

	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)
	fmt.Println(claims.Issuer)

	bookDetails := &models.BookingDetails{}
	bookDetails.UserId, _ = strconv.Atoi(claims.Issuer)

	var data map[string]interface{}
	body, _ := io.ReadAll(r.Body)
	err := json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		panic(err)
	}

	json.Unmarshal([]byte(string(body)), &bookDetails)
	createdDetails := db.Create(bookDetails)
	var errMessage = createdDetails.Error
	if createdDetails.Error != nil {
		fmt.Println(errMessage)
	}

	//var bookedrides []models.BookingDetails
	//updateStatus := db.Update("Status = 1 where name = "kalyan" ", data["RideID"]).Find(&bookedrides)

	//	var erMessage = updateStatus.Error
	//	if updateStatus.Error != nil {
	//		fmt.Println(erMessage)
	//	}
	//var usr models.RideDetails
	//int st1 := 1
	//db.Where("set status = ? where id = ?", st1 , data["ToCity"]).First(&usr)

	var resp = map[string]interface{}{"message": "Ride has been successfully booked"}
	json.NewEncoder(w).Encode(resp)
}
