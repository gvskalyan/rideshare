package controllers

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"reflect"
)

func SearchARide(w http.ResponseWriter, r *http.Request) {

	var rides []models.RideDetails

	var data map[string]interface{}
	body, _ := io.ReadAll(r.Body)
	err := json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		panic(err)
	}
	fmt.Println(data["FromCity"])
	fmt.Println("data received by search a ride is", data["FromCity"], data["ToCity"])

	var searchDetails []models.RideDetails
	db.Where("from_city = ? AND to_city = ?", data["FromCity"], data["ToCity"]).Not("status = 1").Order("to_start_time desc").Find(&rides).Scan(&searchDetails)
	fmt.Println("var1 = ", reflect.TypeOf(searchDetails))
	json.NewEncoder(w).Encode(searchDetails)
}
