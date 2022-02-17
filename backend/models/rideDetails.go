package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

//User struct declaration
type RideDetails struct {
	gorm.Model
	Name       		 string `json:"Name"`
	StartLocation 	 string `json:"startLocation"`
	fromCity		 string `json:"fromCity"`
	toCity 			 string `json:"toCity"`
	destLocation	 string `json:"destLocation"`
	price 			 uint `json:"priceperseat"`
	startTime		 time.Time `json:"startTime"`
	endTime 		 time.Time `json:"endTime"`
	rideDuration 	 uint `json:"Duration"`
	seatsAvailable	 uint `json:"seatsAvailable"`
	petsAllowed 	 string `json:"petsAllowed"`
	carModel 	     string `json:"car_model"`
	carType			 string `json:"car_type"`
	addlNotes		 string `json:"addlNotes"`
	
	PhoneNumber 	 string `json:"PhoneNumber"`

//	Password    string `json:"Password"`

//	Email       string `gorm:"type:varchar(100);unique_index"`
//	DOB         string `json:"DOB"`
//	Gender      string `json:"Gender"`
//	PhoneNumber string `json:"PhoneNumber"`
//	City        string `json:"City"`
}