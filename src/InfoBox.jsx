import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

export default function InfoBox({info}) {
   let COLD_URL = "https://images.unsplash.com/photo-1610215868058-f9879ac512c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let RAIN_URL = "https://udaipurtimes.com/static/c1e/client/74416/uploaded/fb4fc2acad68e7f04ca8bd347af49a6b.jpg";
  return (
    <div className="InfoBox">

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
          title="green iguana"
        />
        <CardContent>
           
          <Typography gutterBottom variant="h5" component="div">
            <b>{info.city}</b><b>{info.name}</b>{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<WbCloudyIcon/>}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <h3>{info.name}</h3>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like{" "} {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
