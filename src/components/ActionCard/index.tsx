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
          image={props.image}
          alt="green iguana"
        />
        <CardContent className={cnCard("content")}>
          <Typography gutterBottom variant="h5" component="div" className={cnCard("title")}>
          {props.title}
          </Typography>
          <Typography variant="body2" className={cnCard("desc")}>
          {props.desc.substring(0, 120)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
