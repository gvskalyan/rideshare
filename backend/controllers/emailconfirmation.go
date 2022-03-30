package controllers

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gopkg.in/gomail.v2"
)

func ConfirmationEmailHandler(mailid string) {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}
	msg := gomail.NewMessage()
	fromMail := os.Getenv("FromEMailAddress")
	msg.SetHeader("From", fromMail)
	msg.SetHeader("To", mailid)
	msg.SetHeader("Subject", "RideShare Booked Ride details")
	msg.SetBody("text/html", "Greetings from Rideshare team <br /> Your ride ID is: "+" and the ride details are <br /> Hope you have a great and pleasant ride. <br />")

	n := gomail.NewDialer("smtp.mail.yahoo.com", 587, fromMail, os.Getenv("SMTPPassword"))
	if err := n.DialAndSend(msg); err != nil {
		fmt.Println("error:", err)
	}
}
