package controllers

import (
	"backend/models"
	"backend/utils"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strconv"
	"time"

	jwt "github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

type Exception models.Exception
<<<<<<< HEAD
=======

>>>>>>> 7f348274d82185a98df5086bc710b87328a47fbc
type ErrorResponse struct {
	Err string
}

type error interface {
	Error() string
}

var db = utils.ConnectDB()

func TestAPI(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("API live and kicking"))
}

//This method is refactored to login.go in controllers
func Signin(w http.ResponseWriter, r *http.Request) {
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

func FindOne(email, password string, w http.ResponseWriter) map[string]interface{} {
	user := &models.User{}

	if err := db.Where("Email = ?", email).First(user).Error; err != nil {
		var resp = map[string]interface{}{"status": false, "message": "Email address not found"}
		return resp
	}
	// expiresAt := time.Now().Add(time.Hour * 24).Unix()
	expires := time.Now().Add(time.Hour * 24)

	errf := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if errf != nil && errf == bcrypt.ErrMismatchedHashAndPassword { //Password does not match!
		var resp = map[string]interface{}{"status": false, "message": "Invalid login credentials. Please try again"}
		return resp
	}

	token := jwt.NewWithClaims(jwt.GetSigningMethod("HS256"), jwt.StandardClaims{
		Issuer:    strconv.Itoa(int(user.ID)),
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, error := token.SignedString([]byte("secret"))
	if error != nil {
		fmt.Println(error)
	}

	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    tokenString,
		Expires:  expires,
		HttpOnly: true,
	}

	var resp = map[string]interface{}{"status": false, "message": "logged in"}
	resp["token"] = tokenString //Store the token in the response
	resp["user"] = user
	http.SetCookie(w, cookie)
	return resp
}

//CreateUser function -- create a new user d-method
func CreatedUser(w http.ResponseWriter, r *http.Request) {

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

	if createdUser.Error != nil {
		fmt.Println(errMessage)
	}
	json.NewEncoder(w).Encode(createdUser)
}

func UpdateUser(w http.ResponseWriter, r *http.Request) {
	user, err := GetUserRow(w, r)
	if err == nil {
		json.NewDecoder(r.Body).Decode(&user)
		fmt.Println(r.Body, user)
		db.Save(&user)
		json.NewEncoder(w).Encode(&user)
	}
}

<<<<<<< HEAD
func GetUserRow(w http.ResponseWriter, r *http.Request) (models.User, error) {
	header, err := r.Cookie("jwt")
	var user models.User
	if err != nil {
		json.NewEncoder(w).Encode(Exception{Message: err.Error()})
		return user, err
	}
	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)

	db.Where("id = ?", claims.Issuer).First(&user)
	return user, nil
}

func Deluser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var id = params["id"]
=======
func DeleteUser(w http.ResponseWriter, r *http.Request) {
	Logout(w, r)
	user, err := GetUserRow(w, r)
	if err == nil {
		json.NewDecoder(r.Body).Decode(&user)
		fmt.Println(r.Body, user)
		db.Delete(&user)
		json.NewEncoder(w).Encode("User deleted")
	}
}

func GetUserRow(w http.ResponseWriter, r *http.Request) (models.User, error) {
	header, err := r.Cookie("jwt")
>>>>>>> 7f348274d82185a98df5086bc710b87328a47fbc
	var user models.User
	if err != nil {
		json.NewEncoder(w).Encode(Exception{Message: err.Error()})
		return user, err
	}
	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)

	db.Where("id = ?", claims.Issuer).First(&user)
	return user, nil
}

func GetUser(w http.ResponseWriter, r *http.Request) {
	user, err := GetUserRow(w, r)
	if err == nil {
		json.NewEncoder(w).Encode(&user)
	}
}

func Logout(w http.ResponseWriter, r *http.Request) {
	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HttpOnly: true,
	}

	http.SetCookie(w, cookie)
	var resp = map[string]interface{}{"message": "logged out success"}
	json.NewEncoder(w).Encode(resp)
}

func PostRide(w http.ResponseWriter, r *http.Request) {

	header, _ := r.Cookie("jwt")

	tk := &models.Token{}
	token, _ := jwt.ParseWithClaims(header.Value, tk, nil)
	claims := token.Claims.(*models.Token)
	// fmt.Println(claims.Issuer)

	rideDetails := &models.RideDetails{}
	rideDetails.UserId, _ = strconv.Atoi(claims.Issuer)

	var data map[string]interface{}
	body, _ := io.ReadAll(r.Body)
	err := json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		panic(err)
	}

	startTime, _ := time.Parse("2006-01-02 15:04:05", data["StartTime"].(string))
	endTime, _ := time.Parse("2006-01-02 15:04:05", data["EndTime"].(string))

	// if err != nil {
	// 	fmt.Println(err)
	// }
	rideDetails.ToStartTime = startTime
	rideDetails.ToEndTime = endTime
	json.Unmarshal([]byte(string(body)), &rideDetails)
	createdDetails := db.Create(rideDetails)
	var errMessage = createdDetails.Error
	if createdDetails.Error != nil {
		fmt.Println(errMessage)
	}
	var resp = map[string]interface{}{"message": "Ride has been successfully posted"}
	json.NewEncoder(w).Encode(resp)
}

func SearchRides(w http.ResponseWriter, r *http.Request) {

	var rides []models.RideDetails

	var data map[string]interface{}
	body, _ := io.ReadAll(r.Body)
	err := json.Unmarshal([]byte(string(body)), &data)
	if err != nil {
		panic(err)
	}
	searchDetails := db.Where("from_city = ? AND to_city = ?", data["FromCity"], data["ToCity"]).Order("to_start_time desc").Find(&rides)

	var errMessage = searchDetails.Error
	if searchDetails.Error != nil {
		fmt.Println(errMessage)
	}
	json.NewEncoder(w).Encode(searchDetails)
}

func SendConfirmationMail(w http.ResponseWriter, r *http.Request) {

	user, err := GetUserRow(w, r)

	ConfirmationEmailHandler(user.Email)

	if err == nil {
		var resp = map[string]interface{}{"message": "Ride message has been successfully sent"}
		json.NewEncoder(w).Encode(resp)
		// json.NewEncoder(w).Encode(&user)
	}

}
