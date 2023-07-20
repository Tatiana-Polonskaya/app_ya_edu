import React from "react";
import "./style.scss";
import { cn } from "@bem-react/classname";
import { useParams } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CommonAnalitics from "../CommonAnalitics";

export default function EventInfo() {
  const cneventInfo = cn("EventIngo");
  const cnArchiveTariff = cn("archive-tariff");

  const message = [
    {
      id:0,
      name: "Анастасия, 22 года.",
      title:"Очень понравилось",
      date:"2022 г.",
      desc:"Мне очень понравилась программа мероприятия, постараюсь попасть сюда еще раз!"
    },
    {
      id:1,
      name: "Виталий, 16 лет.",
      title: "Я доволен",
      date:"2022 г.",
      desc:"Было кайфово и довольно интересно",
    },
    {
      id:2,
      name: "Мария, 24 года.",
      title:"Мой первый форум",
      date: "2022 г.",
      desc: "Мой первый форум, я не знала, что ожидать, но в целом было весело и познавательно!"
    },
    {
      id:3,
      name: "Денис, 20 лет.",
      title:"Атмосферно",
      date:"2022 г.",
      desc:"Очень атмосферно, спасибо организаторам, классные лекции и мероприятия",
    },

  ]
  return (
    <div  className={cneventInfo("col")}>
      <CommonAnalitics />
      <div>
        <div className={cnArchiveTariff("whiteBlock")}>
          <p className={cnArchiveTariff("title")}>{"Описание"}</p>
          <div className={cnArchiveTariff("deswcr")}>
            Окружной молодёжный образовательный форум ЦФО «Область будущего»
            платформы Росмолодёжь.События – это площадка для создания новой
            IT-среды с помощью ресурсов общественных и государственных структур,
            бизнес-сообщества и других институтов для поддержки молодёжных
            инициатив в новейших отраслях IT-индустрии.
            <br />
            <br />В этом году «Область будущего» соберёт две смены:{" "}
            <span className={cnArchiveTariff("title-bold")}>
              «IT-ГОРОД»
            </span> и{" "}
            <span className={cnArchiveTariff("title-bold")}>
              «IT-ИСКУССТВО»
            </span>
            ». Форум станет точкой отсчёта и обсуждения передовых разработок и
            проведёт чёткую линию «от технологий до их практической реализации».
            Если вы только начинаете своё знакомство с миром информационных
            технологий, то форум станет лучшей площадкой для знакомства.
            <br />
            <br />
            Если вы хотите стать одним из авторов создания технологической
            среды, а также практических инструментов и приложений по
            совершенствованию направлений цифровой трансформации, искусственного
            интеллекта, безопасности и инноваций в цифровой среде – вас ждёт
            «Область будущего».
          </div>
        </div>
      </div>

      <div className={cnArchiveTariff()}>
        <div className={cnArchiveTariff("header")}>
          <p className={cnArchiveTariff("title")}>{"Общая информация"}</p>
        </div>
        <div className={cnArchiveTariff("list-wrapper")}>
          <ul className={cnArchiveTariff("list")}>
            <li className={cnArchiveTariff("item")}>
              <p className={cnArchiveTariff("item-date")}>{"Организатор"}</p>
              <p className={cnArchiveTariff("item-date")}>
                {"Конец регистрации"}
              </p>
              <p className={cnArchiveTariff("item-tariff")}>
                {"Дата проведения"}
              </p>
              <p className={cnArchiveTariff("item-sum")}>
                {"Место проведения"}
              </p>
            </li>
            <li className={cnArchiveTariff("item")}>
              <p className={cnArchiveTariff("item-date")}>{"Росмолодежь"}</p>
              <p className={cnArchiveTariff("item-date")}>{"1 июля"}</p>
              <p className={cnArchiveTariff("item-tariff")}>{"18-21 июля"}</p>
              <p className={cnArchiveTariff("item-sum")}>{"Липецк"}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cnArchiveTariff("header")}>
        <p className={cnArchiveTariff("title")}>{"Отзывы участников"}</p>
      </div>
      <div className={cnArchiveTariff("onzyv")}>
        {message.map(el=>(
          <Card sx={{ width: 275, borderRadius: "20px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {el.name}
            </Typography>
            <Typography variant="h5" component="div">
            {el.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {el.date}
            </Typography>
            <Typography variant="body2">
            {el.desc}
            </Typography>
          </CardContent>
        </Card>
        ))}
        

      </div>

      <div className={cneventInfo("row")}>
        <div className={cneventInfo("row-btn")}>Подать заявку</div>
      </div>
    </div>
  );
}
