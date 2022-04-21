package controllers

import (
	"backend/models"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gopkg.in/gomail.v2"
)

func ConfirmationEmailHandler(mailid string, rideid string) string {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	var ridedetails models.RideDetails

	db.Table("ride_details").Where("ride_id IN (?)", rideid).Find(&ridedetails)

	msg := gomail.NewMessage()
	fromMail := os.Getenv("FromEMailAddress")
	msg.SetHeader("From", fromMail)
	msg.SetHeader("To", mailid)
	msg.SetHeader("Subject", "RideShare - Booked Ride details")
	msg.SetBody("text/html", fmt.Sprintf("Greetings from Rideshare team <br /> Your ride ID is: "+rideid+" <br /> The ride details are <br /> <br /> Start City : %s <br />   Destination City : %s  <br />  StartTime : %s <br />  Starting Location : %s <br /> <br /> Hoping you have a great and pleasant ride. <br />", ridedetails.FromCity, ridedetails.ToCity, ridedetails.ToStartTime, ridedetails.StartLocation))

	n := gomail.NewDialer("smtp.mail.yahoo.com", 587, fromMail, os.Getenv("SMTPPassword"))
	s, err := n.Dial()
	if err != nil {
		// fmt.Println("error:", err)
		return "error"
	} else {
		err = gomail.Send(s, msg)
		msg.Reset()
		return "mail sent successfully"
	}
}
