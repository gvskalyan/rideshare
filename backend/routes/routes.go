package routes

import (
	"backend/controllers"
	h "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"os"
)

func Controller() {

	r := mux.NewRouter().StrictSlash(true)
	// r.Use(CommonMiddleware)

	cors := h.CORS(
		h.AllowedOrigins([]string{"http://localhost:3000", "https://rideshare-se.netlify.app"}),
		h.AllowedHeaders([]string{"accept", "origin", "Content-Type", "Authorization"}),
		h.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"}),
		h.AllowCredentials(),
	)

	r.HandleFunc("/", controllers.TestAPI).Methods("GET")
	// r.HandleFunc("/api", controllers.TestAPI).Methods("GET")
	r.HandleFunc("/signup", controllers.CreateUser).Methods("POST")
	r.HandleFunc("/login", controllers.Login).Methods("POST")
	r.HandleFunc("/deleteUser", controllers.DeleteUser).Methods("DELETE")
	r.HandleFunc("/logout", controllers.Logout).Methods("POST")
	r.HandleFunc("/postaride", controllers.PostARide).Methods("POST")
	r.HandleFunc("/searcharide", controllers.SearchARide).Methods("POST")

	r.HandleFunc("/bookride", controllers.BookRide).Methods("POST")
	r.HandleFunc("/history", controllers.RideHistory).Methods("GET")

	// Auth route
	s := r.PathPrefix("/auth").Subrouter()
	s.HandleFunc("/user", controllers.GetUser).Methods("GET")
	s.HandleFunc("/user", controllers.UpdateUser).Methods("PUT")

	cors(r)
	port := os.Getenv("PORT")
	log.Printf("Server up on port '%s'", port)
	log.Fatal(http.ListenAndServe(":"+port, cors(r)))
}
