package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type RideDetails struct {
	gorm.Model
	Name           string `json:"Name"`
	FromCity       string `json:"fromCity"`
	StartLocation  string `json:"startLocation"`
	ToCity         string `json:"toCity"`
	DestLocation   string `json:"destLocation"`
	Price          uint   `json:"priceperseat"`
	RideDuration   uint   `json:"Duration"`
	SeatsAvailable uint   `json:"seatsAvailable"`
	PetsAllowed    string `json:"petsAllowed"`
	CarModel       string `json:"carModel"`
	CarType        string `json:"carType"`
	AddlNotes      string `json:"addlNotes"`
	PhoneNumber    string `json:"PhoneNumber"`
	UserId         int
	ToStartTime    time.Time
	ToEndTime      time.Time
	Status         int
}
