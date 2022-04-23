package main

import (
	"backend/routes"
	"fmt"
	"github.com/joho/godotenv"
	"log"
)

func App() {
	e := godotenv.Load()

	if e != nil {
		log.Fatal("Error loading .env file")
	}
	fmt.Println(e)
	routes.Controller()
}

func main() {
	App()

}
