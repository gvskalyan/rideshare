package main

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"backend/controllers"
	"backend/models"
	"backend/utils"

	"github.com/jinzhu/gorm"
	"github.com/stretchr/testify/assert"
)

var users []models.User
var rideDetails []models.RideDetails

type Exception struct {
	Message string `json:"message"`
}

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
		// {
		// 	Password: "dummyuser@#123",
		// 	Email:    "dummyuser123@gmail.com",
		// },
		{
			Password: "actualuser@qwerty1",
			Email:    "dummyuser4561@gmail.com",
		},
	}
	db.Create(&users)

}

func test_user_registration(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{"email":"dummyuser@gmail.com", "password":"dummyuser"}`)
	req, _ := http.NewRequest(http.MethodPost, "/signup", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")

	controllers.CreateUser(w, req)
	res := w.Result()
	defer res.Body.Close()
	_, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	assert.Equal(t, 200, w.Code)
}

var token = ""

func test_user_login(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{"email":"dummyuser@gmail.com", "password":"dummyuser"}`)
	req, _ := http.NewRequest(http.MethodPost, "/login", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")

	controllers.Login(w, req)
	res := w.Result()
	defer res.Body.Close()
	_, err := ioutil.ReadAll(res.Body)

	authorizationHeader := res.Header.Get("Set-Cookie")

	jwtString := strings.Split(authorizationHeader, " ")[0]
	jwtString = jwtString[4 : len(jwtString)-1]
	token = jwtString

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
	if m["message"] != "Email address not found" {
		t.Errorf(" \t Method : test_user_login_fail Expected the 'message' key of the response to be set to 'Email address not found' Please check if the user already exists. Got '%s'", m["error"])
	}
}

func test_post_a_ride(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{	"Name":"kalyan", "StartLocation" :   "Dunkin",
	"FromCity":      "Gainesville",
	"ToCity" : "Orlando",
	"DestLocation"   : "UCF Super Stop",
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

	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour),
		HttpOnly: true,
	}
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")
	req.AddCookie(cookie)

	controllers.PostARide(w, req)
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
	"ToCity":      "Orlando",
	"StartTime"      : "2022-02-01 08:10:00",
	"EndTime"        : "2022-02-05 08:10:22"}`)

	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour),
		HttpOnly: true,
	}
	req, _ := http.NewRequest(http.MethodPost, "/searchrides", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")
	req.AddCookie(cookie)

	controllers.SearchARide(w, req)
	res := w.Result()
	defer res.Body.Close()
	_, err := ioutil.ReadAll(res.Body)

	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	assert.Equal(t, 200, w.Code)
}

func test_booking_mail_confirmation(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{	        
		"FromCity":      "Gainesville",
		"ToCity":      "Orlando",
		"StartTime"      : "2022-02-01 08:10:00"}`)

	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour),
		HttpOnly: true,
	}
	req, _ := http.NewRequest(http.MethodPost, "/searcharide", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")
	req.AddCookie(cookie)

	controllers.SearchARide(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, _ := ioutil.ReadAll(res.Body)

	var m []models.RideDetails
	json.Unmarshal(data, &m)

	returnValue := controllers.ConfirmationEmailHandler("ridesharemail@yahoo.com", m[len(m)-1].RideId)
	if strings.Contains(returnValue, "error") {
		t.Logf("Check the password in .env file or set it in the environment")
	}
}

func test_booking_ride(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{	        
	"FromCity":      "Gainesville",
	"ToCity":      "Orlando",
	"StartTime"      : "2022-02-01 08:10:00"}`)

	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour),
		HttpOnly: true,
	}
	req, _ := http.NewRequest(http.MethodPost, "/searcharide", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")
	req.AddCookie(cookie)

	controllers.SearchARide(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, _ := ioutil.ReadAll(res.Body)

	var m []models.RideDetails
	json.Unmarshal(data, &m)

	w = httptest.NewRecorder()

	type MyPostBody struct {
		RideID string `json:"RideID"`
	}

	// fmt.Print(m[len(m)-1].RideId)
	pb := &MyPostBody{RideID: m[len(m)-1].RideId}
	jsonStr, _ = json.Marshal(pb)

	// jsonStr = []byte(`{
	// "RideID": `)

	cookie = &http.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour),
		HttpOnly: true,
	}
	req, _ = http.NewRequest(http.MethodPost, "/bookride", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")
	req.AddCookie(cookie)

	controllers.BookRide(w, req)
	res = w.Result()
	defer res.Body.Close()
	data, _ = ioutil.ReadAll(res.Body)

	// if err != nil {
	// 	t.Errorf("expected error to be nil got %v", err)
	// }
	// assert.Equal(t, 200, w.Code)
}

func test_booking_history(t *testing.T) {

	w := httptest.NewRecorder()

	var jsonStr = []byte(`{}`)

	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour),
		HttpOnly: true,
	}
	req, _ := http.NewRequest(http.MethodGet, "/history", bytes.NewBuffer(jsonStr))
	req.Header.Set("X-Custom-Header", "myvalue")
	req.Header.Set("Content-Type", "application/json")
	req.AddCookie(cookie)

	controllers.SearchARide(w, req)
	res := w.Result()
	defer res.Body.Close()
	_, err := ioutil.ReadAll(res.Body)

	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	assert.Equal(t, 200, w.Code)
}

func TestAllcases(t *testing.T) {

	testdb_setup("test.db")
	test_user_registration(t)
	test_user_login(t)
	test_user_login_fail(t)
	test_post_a_ride(t)
	test_search_rides(t)
	test_booking_mail_confirmation(t)
	test_booking_ride(t)
	test_booking_history(t)
}
