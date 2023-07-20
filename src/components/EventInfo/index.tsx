import React from "react";
import "./style.scss";
import { cn } from "@bem-react/classname";
import { useParams } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CommonAnalitics from "../CommonAnalitics";


export default function EventInfo() {
  const cneventInfo = cn("EventIngo");


  return (
    <>

      <CommonAnalitics/>
      <div>Отзывы участников</div>
      <div>Организатор</div>
      <div>Сроки регистрации</div>
      <div>Дата проведения</div>
      <div>Место проведения</div>
      <div>Описание</div>
      <div>Подать заявку или нет</div>
      <div>Партнеры проекта</div>
      
    </>
  );
}
