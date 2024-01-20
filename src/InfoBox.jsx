import * as React from "react";
import Card from "@mui/material/Card";
import "./InfoBox";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FlareIcon from "@mui/icons-material/Flare";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1211458629/photo/blooming-tree-branches-in-springtime.jpg?s=2048x2048&w=is&k=20&c=LE1UF_FnPLRwN-pj8TrUlEyD7oc7IACwJDM57Ub_Tac=";
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW58ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <br></br>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <FlareIcon />
              ) : (
                <SevereColdIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity= {info.humidity}&deg;C</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
