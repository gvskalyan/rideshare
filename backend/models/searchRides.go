package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

//User struct declaration
type searchRides struct {
	gorm.Model
	FromCity    string `json:"fromCity"`
	ToCity      string `json:"toCity"`
	ToStartTime time.Time
	ToEndTime   time.Time
}
