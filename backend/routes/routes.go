package routes

import (
	"backend/controllers"

	"github.com/gorilla/mux"
)

func Handlers() *mux.Router {

	r := mux.NewRouter().StrictSlash(true)
	// r.Use(CommonMiddleware)

	r.HandleFunc("/", controllers.TestAPI).Methods("GET")
	// r.HandleFunc("/api", controllers.TestAPI).Methods("GET")
	r.HandleFunc("/signup", controllers.CreateUser).Methods("POST")
	r.HandleFunc("/login", controllers.Login).Methods("POST")
	r.HandleFunc("/delete", controllers.DeleteUser).Methods("DELETE")
	r.HandleFunc("/logout", controllers.Logout).Methods("POST")
	r.HandleFunc("/postaride", controllers.PostRide).Methods("POST")
	r.HandleFunc("/searchrides", controllers.SearchRides).Methods("POST")

	// Auth route
	s := r.PathPrefix("/auth").Subrouter()
	s.HandleFunc("/user", controllers.GetUser).Methods("GET")
	s.HandleFunc("/user", controllers.UpdateUser).Methods("PUT")
	return r
}
