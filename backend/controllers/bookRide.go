package controllers

import (
	"backend/models"
	"encoding/json"
	"net/http"

	jwt "github.com/golang-jwt/jwt"
	//"golang.org/x/crypto/bcrypt"
)

//var db2 = utils.ConnectDB()

func BookRide(w http.ResponseWriter, r *http.Request) {

	header, _ := r.Cookie("jwt")

	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)

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
