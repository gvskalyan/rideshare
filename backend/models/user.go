package models

import (
	"github.com/jinzhu/gorm"
)

//User struct declaration
type User struct {
	gorm.Model

	Name        string
	Password    string `json:"Password"`
	Email       string `gorm:"type:varchar(100);unique_index"`
	DOB         string `json:"DOB"`
	Gender      string `json:"Gender"`
	PhoneNumber string `json:"PhoneNumber"`
	City        string `json:"City"`
}
