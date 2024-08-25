import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export default function InfoBox({ Info }) {
  let Hot_url = "https://images.unsplash.com/photo-1483513208063-7ae9315481fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Cold_url = "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
  let Rain_url = "https://www.hdwallpapers.in/download/falling_rain_drops_on_white_umbrella_hd_rain-HD.jpg";



  return (<div className="weather">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Info.humidity > 80 ? Rain_url : Info.temp > 15 ? Hot_url : Cold_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.City}{Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p > Temperature = {Info.temp}&deg;C</p>
          <p > Min Temp = {Info.tempMin}&deg;C</p>
          <p >Max Temp = {Info.tempMax}&deg;C&deg;C</p>
          <p >Humidity = {Info.humidity}</p>
          <p >The weather can described as <b>{Info.weather}</b> and feels like {Info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>

    </Card>


  </div>
  )
}
