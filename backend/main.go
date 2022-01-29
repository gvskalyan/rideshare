package main

import (
	"auth/routes"
	"log"
	"net/http"
)

func main() {

	port := "8080"

	// Handle routes
	http.Handle("/", routes.Handlers())

	// serve
	log.Printf("Server up on port '%s'", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
