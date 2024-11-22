import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWQiOiJVdVNUUmRyVWpWOEVHdzRkajhNbmJwdzdZcGZmU1lqYSIsImNzcmZfdG9rZW4iOiJlYmZlZTVkNjIxYzI1NTIyMmU1ZTI2ZTAzMTQwZTBmNWNkM2U0YzA5IiwiZXhwIjoxNzM3NDc2MzM5LCJpYXQiOjE3MzIyOTIzMzksImlzcyI6Imp3dCIsImF1ZCI6Imp3dCIsImF1dGhfdHlwZSI6ImNvb2tpZSIsInNlY3VyZSI6ZmFsc2UsImp3dF9pZGVudGl0eSI6InhLR0RJZjM2ZWFpVkwxb05TUkFBSDVXVHVJMVhKajFkIiwibG9naW5fdWEiOiJiJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMjkuMC4wLjAgU2FmYXJpLzUzNy4zNiciLCJsb2dpbl9pcCI6ImInNDYuMTQ5LjE4Ny4xMycifQ.92gzCjK5Cp3mykpL4k1ZIRLlzvXg6rKLzS7VlYUQsBk";

axios.defaults.baseURL = "https://api.warframe.market/v1";
axios.defaults.headers.common["Authorization"] = token;
axios.defaults.headers.common["accept"] = "application/json";

function App() {
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const data = await axios.get(`/items/vauban_prime_set/orders`);
  //   return data;
  // };

  const API_URL = "https://api.warframe.market/v1/items";

  async function fetchData() {
    try {
      const response = await fetch(`${API_URL}/`, {
        headers: { accept: "application/json" },
      });
      const data = await response.json();
      return data.payload.orders;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // console.log(getData());
  return (
    <>
      <button
        onClick={() => {
          console.log(fetchData());
        }}
      ></button>
    </>
  );
}

export default App;
