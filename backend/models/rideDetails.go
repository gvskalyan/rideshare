
import (
	"time"

	"github.com/jinzhu/gorm"
)

//User struct declaration
type RideDetails struct {
	gorm.Model
	Name           string    `json:"Name"`
	StartLocation  string    `json:"startLocation"`
	FromCity       string    `json:"fromCity"`
	ToCity         string    `json:"toCity"`
	DestLocation   string    `json:"destLocation"`
	Price          uint      `json:"priceperseat"`
	StartTime      time.Time `json:"startTime"`
	EndTime        time.Time `json:"endTime"`
	RideDuration   uint      `json:"Duration"`
	SeatsAvailable uint      `json:"seatsAvailable"`
	PetsAllowed    string    `json:"petsAllowed"`
	CarModel       string    `json:"carModel"`
	CarType        string    `json:"carType"`
	AddlNotes      string    `json:"addlNotes"`
	PhoneNumber    string    `json:"PhoneNumber"`
}
