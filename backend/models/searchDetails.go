package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

//User struct declaration
type RideDetails struct {
	gorm.Model
	FromCity       string    `json:"fromCity"`
	ToCity         string    `json:"toCity"`
	StartTime      time.Time `json:"startTime"`
}
