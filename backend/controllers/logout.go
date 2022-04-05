package controllers

import (
	"encoding/json"
	"net/http"
	"time"
)

func Logout(w http.ResponseWriter, r *http.Request) {
	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HttpOnly: true,
	}

	http.SetCookie(w, cookie)
	var resp = map[string]interface{}{"message": "logged out  rrr success"}
	json.NewEncoder(w).Encode(resp)
}