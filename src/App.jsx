import { useState } from "react";
import "./App.css";
import { api_key } from "./assets/key/Api-key.json";
import {
  TextField,
  Container,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import WeatherCard from "./components/WeatherCard";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  function endpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  }

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    fetch(endpoint(city))
      .then((res) => res.json())
      .then((weather_data) => {
        setWeatherData(weather_data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  // Function to render weather icon based on weather description

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <Grid alignItems="center">
        <Typography variant="h3" sx={{ marginTop: "auto" }} gutterBottom>
          Weather Report
        </Typography>
        <Box
        spacing={4}
        direction="column"
        alignItems="center"
        textAlign="center"
        alignSelf="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-search"
            value={city}
            onChange={handleChange}
            label="City"
            type="search"
            sx={{
              // Root class for the input field
              color: 'black', "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(255, 255, 255, 0.47)",
                fontFamily: "Arial",
                fontWeight: "bold",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                  borderWidth: "2px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#fff",
                fontWeight: "bold",
              },
            }}
            fullWidth
          />
        </form>

        {loading ? (
          <Box mt={10}>
            <CircularProgress />
          </Box>
        ) : (
          weatherData.main && <WeatherCard weatherData={weatherData} />
        )}
      </Box>
      </Grid>


    </Container>
  );
}

export default App;
