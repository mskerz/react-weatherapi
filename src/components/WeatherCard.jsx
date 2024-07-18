import { Card, CardContent, Typography, Box, Grid } from '@mui/material';


function WeatherCard(props) {
    const { weatherData } = props;


    const getWeatherIcon = (iconParameter) => {
        const icon = `https://openweathermap.org/img/wn/${iconParameter}@2x.png`
        return <img src={icon} alt="" />
    }
    return (
        <Card sx={{ maxWidth: 400, margin: '20px',borderRadius:10 }}>
            <CardContent>
            <Box mt={2}>
                <Typography variant="h5" align="center" gutterBottom>
                    {weatherData.name} <br/><span style={{fontSize:30}}>...</span>
                </Typography>
                 
                </Box>
            </CardContent>
            <CardContent>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={8}>
                        <Typography variant="h4" align="center" className="temp">
                            {weatherData.main.temp} °C
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <Typography variant="body1" className="condition">{weatherData.weather[0].description}</Typography>
                            <Typography variant="body1" className="high">Max: {weatherData.main.temp_max} °C</Typography>
                            <Typography variant="body1" className="low">Min: {weatherData.main.temp_min} °C</Typography>
                            
                        </Box>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" mt={3}>
                    <div className="icon-container">
                        {getWeatherIcon(weatherData.weather[0].icon)}
                    </div>
                </Box>
                <Grid container spacing={2} justifyContent="center" mt={3}>
                    <Grid item xs={6}>
                        <Typography variant="h6" align="center">
                            {weatherData.main.feels_like} °C
                        </Typography>
                        <Typography variant="body2" align="center">
                            Feels Like
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" align="center">
                            {weatherData.main.humidity} %
                        </Typography>
                        <Typography variant="body2" align="center">
                            Humidity
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default WeatherCard