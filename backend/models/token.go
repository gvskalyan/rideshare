package models

import jwt "github.com/dgrijalva/jwt-go"

//Token struct declaration
type Token struct {
	UserID   uint
	Name     string
	Email    string
	Gender   string
	Location string
	*jwt.StandardClaims
}
