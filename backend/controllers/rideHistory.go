package controllers

import (
	"backend/models"
	"encoding/json"
	"net/http"

	jwt "github.com/golang-jwt/jwt"
)

func RideHistory(w http.ResponseWriter, r *http.Request) {

	header, _ := r.Cookie("jwt")

	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)

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

	var ridedetails []models.RideDetails
	if len(rides) > 0 {
		db.Table("ride_details").Where("ride_id IN (?)", rides).Find(&ridedetails)
		json.NewEncoder(w).Encode(ridedetails)
	} else {
		var resp = map[string]interface{}{"message": "No rides found :)"}
		json.NewEncoder(w).Encode(resp)
	}
}
