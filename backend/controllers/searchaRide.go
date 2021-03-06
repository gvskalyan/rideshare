package controllers

import (
	"backend/models"
	"encoding/json"
	"io"
	"net/http"
)

func SearchARide(w http.ResponseWriter, r *http.Request) {

	var rides []models.RideDetails

	var data map[string]interface{}
	body, _ := io.ReadAll(r.Body)
	err := json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		panic(err)
	}

	var searchDetails []models.RideDetails
	db.Where("from_city = ? AND to_city = ?", data["FromCity"], data["ToCity"]).Not("status = 1").Order("to_start_time desc").Find(&rides).Scan(&searchDetails)
	json.NewEncoder(w).Encode(searchDetails)
}
