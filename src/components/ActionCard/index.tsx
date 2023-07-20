import "./style.scss";
import {cn} from "@bem-react/classname";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


type Props = {
  image: string,
  title: string,
  desc: string,
  func: Function,
}

export default function ActionCard(props: Props) {

  const cnCard = cn("Card");

  return (
    <Card sx={{ maxWidth: 250 }} className={cnCard()} onClick={()=>props.func()}>
      <CardActionArea className={cnCard()} >
        <CardMedia
          component="img"
          height="140"
          image="https://kartinkin.net/uploads/posts/2022-12/1670264258_58-kartinkin-net-p-kot-kartinki-vkontakte-61.jpg"
          alt="green iguana"
        />
        <CardContent className={cnCard("content")}>
          <Typography gutterBottom variant="h5" component="div" className={cnCard("title")}>
          {props.title}
          </Typography>
          <Typography variant="body2" className={cnCard("desc")}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
