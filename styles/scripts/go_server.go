package main

import (
	"encoding/json"
	"net/http"
)

type Status struct {
	Service string `json:"service"`
	Port    int    `json:"port"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	status := Status{"Go HTTP Server", 3001}
	json.NewEncoder(w).Encode(status)
}

func main() {
	http.HandleFunc("/api/status", handler)
	http.ListenAndServe(":3001", nil)
}
