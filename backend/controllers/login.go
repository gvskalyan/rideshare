package controllers

import (
	"backend/models"
	"encoding/json"
	"net/http"
)

func Login(w http.ResponseWriter, r *http.Request) {
	user := &models.User{}
	err := json.NewDecoder(r.Body).Decode(user)
	if err != nil {
		var resp = map[string]interface{}{"status": "false", "message": "Invalid request"}
		json.NewEncoder(w).Encode(resp)
		// w.WriteHeader(http.StatusForbidden)
		return
	}
	resp := FindOne(user.Email, user.Password, w)
	json.NewEncoder(w).Encode(resp)
}
