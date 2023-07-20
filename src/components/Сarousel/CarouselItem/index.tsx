import { ReactSVG } from "react-svg";
import { cn } from "@bem-react/classname";

import "./style.scss";


type Props = {
  id: string;
  url: string;
  title: string;
  onClick: Function;
};

const cnCarouselItem = cn("carouse-item");

export default function CarouselItem(props: Props) {
  return (
    <div className={cnCarouselItem()} onClick={() => props.onClick()}>
      <div
        className={cnCarouselItem("img-block")}
        style={{ backgroundImage: `url(${props.url})` }}
      >
        {/* <img src={props.url} alt={props.title} className={cnCarouselItem("video-block")}/> */}
        <div className={cnCarouselItem("button")}>
          <img src="/images/button-play.png" alt="play" />
        </div>
      </div>
      <p>{props.title}</p>
    </div>
  );
}
