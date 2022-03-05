package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"backend/controllers"
	"backend/models"
	"backend/utils"

	"github.com/jinzhu/gorm"
	"github.com/stretchr/testify/assert"
)

var users []models.User
var rideDetails []models.RideDetails

func testdb_setup(dbName string) *gorm.DB {
	db := utils.ConnectDB()
	return db
}

func initData(db *gorm.DB) {
	users = []models.User{
		{
			Password: "dummyuser",
			Email:    "dummyuser@gmail.com",
		},
		{
			Password: "dummyuser@#123",
			Email:    "dummyuser123@gmail.com",
		},
		{
			Password: "actualuser@qwerty",
			Email:    "dummyuser456@gmail.com",
		},
	}
	db.Create(&users)

}

func test_user_registration(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{"email":"dummy123@gmail.com", "password":"dummy123"}`)
	req, _ := http.NewRequest(http.MethodPost, "/signup", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")

	controllers.CreateUser(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	fmt.Print(string(data))
	assert.Equal(t, 200, w.Code)
}

// func executeRequest(req *http.Request) *httptest.ResponseRecorder {
// 	rr := httptest.NewRecorder()
// 	a.Router.ServeHTTP(rr, req)

// 	return rr
// }

func test_user_login(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{"email":"dummy123@gmail.com", "password":"dummy123"}`)
	req, _ := http.NewRequest(http.MethodPost, "/login", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")

	controllers.Login(w, req)
	res := w.Result()
	defer res.Body.Close()
	_, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	assert.Equal(t, 200, w.Code)
}

func test_user_login_fail(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{"email":"dummy123@gmail.com", "password":"dummy13"}`)
	req, _ := http.NewRequest(http.MethodPost, "/login", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")

	controllers.Login(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	var m map[string]string
	json.Unmarshal(data, &m)
	// if m["status"] != "false" {
	// 	t.Errorf("Expected the 'error' key of the response to be set to 'false'. Got '%s'", m["error"])
	// }
}

func test_post_a_ride(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{	"Name":"kalyan", "StartLocation" :   "Gainesville",
	"FromCity":      "Gainesville",
	"ToCity" : "Ocla",
	"DestLocation"   : "Starbucks",
	"Price"          : "40",
	"StartTime"      : "2022-02-01 08:10:50",
	"EndTime"        : "2022-02-05 08:10:22",
	"RideDuration"   : "1 hour",
	"SeatsAvailable" : 4,
	"PetsAllowed"    : "No",
	"carModel"       : "Toyota",
	"carType"        : "SUV",
	"AddlNotes"      : "Please be present on time",
	"PhoneNumber"    : "352-352-3523"}`)
	req, _ := http.NewRequest(http.MethodPost, "/postaride", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")

	controllers.PostRide(w, req)
	res := w.Result()
	defer res.Body.Close()
	_, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	assert.Equal(t, 200, w.Code)
}

func test_search_rides(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{	        
	"FromCity":      "Gainesville",
	"ToCity":      "Daytona",
	"StartTime"      : "2022-02-01 08:10:50",
	"EndTime"        : "2022-02-05 08:10:22"`)
	req, _ := http.NewRequest(http.MethodPost, "/searchrides", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")

	controllers.SearchRides(w, req)
	res := w.Result()
	defer res.Body.Close()
	_, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	assert.Equal(t, 200, w.Code)
}

func TestAllcases(t *testing.T) {

	db := testdb_setup("test.db")
	fmt.Print(db)

	test_user_registration(t)
	test_user_login(t)
	test_user_login_fail(t)
	test_post_a_ride(t)
	test_search_rides(t)

}
