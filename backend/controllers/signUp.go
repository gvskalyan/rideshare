package controllers

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"net/http"

	"golang.org/x/crypto/bcrypt"
)

//var db2 = utils.ConnectDB()

func CreateUser(w http.ResponseWriter, r *http.Request) {

	user := &models.User{}

	json.NewDecoder(r.Body).Decode(user)
	pass, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		fmt.Println(err)
		err := ErrorResponse{
			Err: "Password Encryption  failed",
		}
		json.NewEncoder(w).Encode(err)
	}

	user.Password = string(pass)
	createdUser := db.Create(user)
	var errMessage = createdUser.Error

	//
	//if the user is creation is not successful
	// then we throw an error message
	// it might be due to creating an account
	// with the existing mail
	//
	//
	if createdUser.Error != nil {
		fmt.Println(errMessage)
		var resp1= map[string]interface{}{"message": "Error creating your account. There exists some account associated with your email. Please try with different email."}
		json.NewEncoder(w).Encode(resp1)

	}
	// if the user creation is successful then we show a message 
	// user is successfully created




	if createdUser.Error==nil{
	var resp = map[string]interface{}{"message": "Hi  "+ user.Name +"  your rideshare account has been successfully created"}
	json.NewEncoder(w).Encode(resp)
	}
	
}
