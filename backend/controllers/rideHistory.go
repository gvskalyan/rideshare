package controllers

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"net/http"

	jwt "github.com/golang-jwt/jwt"
)

func RideHistory(w http.ResponseWriter, r *http.Request) {

	header, _ := r.Cookie("jwt")

	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)
	fmt.Println(claims.Issuer)

	rows, _ := db.Raw(`SELECT 
	ride_id 
	FROM 
	booking_details 
	WHERE user_id = ?`, claims.Issuer).Rows()
	// fmt.Println(rows)

	var rides []string

	// defer rows.Close()
	for rows.Next() {
		var ride_id string
		rows.Scan(&ride_id)
		rides = append(rides, ride_id)
	}

	var resp = map[string]interface{}{"Ride Ids": rides}
	fmt.Println(resp)
	// fmt.Println(reflect.TypeOf(rides), rides[0])

	var ridedetails []models.RideDetails
	fmt.Println(ridedetails)

	fmt.Println("yes")
	db.Table("ride_details").Where("ride_id IN (?)", rides).Find(&ridedetails)
	json.NewEncoder(w).Encode(ridedetails)

}
