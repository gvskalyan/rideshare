package routes

import (
	"backend/controllers"

	h "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func Handlers() *mux.Router {

	r := mux.NewRouter().StrictSlash(true)
	// r.Use(CommonMiddleware)

	cors := h.CORS(
		h.AllowedOrigins([]string{"http://localhost:3000"}),

		h.AllowedHeaders([]string{"accept", "origin", "X-Requested-With", "x-access-token", "Content-Type", "Authorization"}),

		h.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"}),
		h.OptionStatusCode(204),
		h.AllowCredentials(),
	)

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
	cors(r)
	return r
}
