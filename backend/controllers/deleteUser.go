package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	//Logout(w, r) functionality

	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HttpOnly: true,
	}

	http.SetCookie(w, cookie)
	var resp = map[string]interface{}{"message": "logged out success"}
	json.NewEncoder(w).Encode(resp)

	user, err := GetUserRow(w, r)
	if err == nil {
		json.NewDecoder(r.Body).Decode(&user)
		fmt.Println(r.Body, user)
		db.Delete(&user)
		json.NewEncoder(w).Encode("User deleted")
	}
}
