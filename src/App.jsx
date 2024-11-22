import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWQiOiJVdVNUUmRyVWpWOEVHdzRkajhNbmJwdzdZcGZmU1lqYSIsImNzcmZfdG9rZW4iOiJlYmZlZTVkNjIxYzI1NTIyMmU1ZTI2ZTAzMTQwZTBmNWNkM2U0YzA5IiwiZXhwIjoxNzM3NDc2MzM5LCJpYXQiOjE3MzIyOTIzMzksImlzcyI6Imp3dCIsImF1ZCI6Imp3dCIsImF1dGhfdHlwZSI6ImNvb2tpZSIsInNlY3VyZSI6ZmFsc2UsImp3dF9pZGVudGl0eSI6InhLR0RJZjM2ZWFpVkwxb05TUkFBSDVXVHVJMVhKajFkIiwibG9naW5fdWEiOiJiJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMjkuMC4wLjAgU2FmYXJpLzUzNy4zNiciLCJsb2dpbl9pcCI6ImInNDYuMTQ5LjE4Ny4xMycifQ.92gzCjK5Cp3mykpL4k1ZIRLlzvXg6rKLzS7VlYUQsBk";

axios.defaults.baseURL = "https://api.warframe.market/v1";
axios.defaults.headers.common["Authorization"] = token;

function App() {
  const getData = async () => {
    const data = await axios.get(`/items`);
    return data;
  };

  console.log(getData());
  return <></>;
}

export default App;
