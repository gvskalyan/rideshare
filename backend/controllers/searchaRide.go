package controllers

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

//var db2 = utils.ConnectDB()

func SearchARide(w http.ResponseWriter, r *http.Request) {

	var rides []models.RideDetails

	var data map[string]interface{}
	body, _ := io.ReadAll(r.Body)
	err := json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		panic(err)
	}
	searchDetails := db.Where("from_city = ? AND to_city = ?", data["FromCity"], data["ToCity"]).Not("status = 1").Order("to_start_time desc").Find(&rides)
	//searchDetails := db.Where("from_city = ? AND to_city = ?", data["FromCity"], data["ToCity"]).Order("to_start_time desc").Find(&rides)

	var errMessage = searchDetails.Error
	if searchDetails.Error != nil {
		fmt.Println(errMessage)
	}
	json.NewEncoder(w).Encode(searchDetails)
}
