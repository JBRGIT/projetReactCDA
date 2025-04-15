import axios from "axios";

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Authorization":
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWMzYWM1YTYyMTQxZGE5YTg4Y2UxOWU3NWIzMmE2ZCIsIm5iZiI6MTc0MDY0ODY0Ni4xNiwic3ViIjoiNjdjMDMwYzYwNzJhNzA3YWU5MzVhNDdlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.arCl2YzlQiMQapciL2N8SORBKp1-I0ZVKMeOV--nByM",
    "Content-Type": "application/json",
  },
});

export default apiMovie;
