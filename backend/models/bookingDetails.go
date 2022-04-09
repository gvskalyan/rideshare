package models

import (
	"github.com/jinzhu/gorm"
)

//User struct declaration
type BookingDetails struct {
	gorm.Model
	BookingID string `json:"bookingID"`
	RideID    string `json:"rideID"`
	UserMail  string `json:"useremail"`
	Phone     uint   `json:"phone"`
	Id1       uint   `json:"id1"`
	UserId    int
}
