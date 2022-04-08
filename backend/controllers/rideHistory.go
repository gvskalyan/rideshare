package controllers

import (
	"backend/models"
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
}
