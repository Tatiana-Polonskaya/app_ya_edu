import { cn } from "@bem-react/classname";
import "./style.scss";
// import photo from "../../plugs/personalArea/icon/user.png";

// import ReactAvatarEditor from "react-avatar-editor";
import CurrentTariff from "../../plugs/personalArea/currentTariff.json";

import { ReactSVG } from "react-svg";

import User from "./icon/user.png";
import Cake from "./icon/cake.svg";
import Building from "./icon/building.svg";
import Message from "./icon/sms.svg";
import Call from "./icon/call.svg";
import Tag from "./icon/tag.svg";
import Arrow from "./icon/arrow.svg";
import Receive from "./icon/receive.svg";

import { useEffect, useState } from "react";

import { randomInt } from "crypto";

import avatar from "./avatar.jpg"

import Gallery from "./icon/gallery.svg";

type IconsArr = {
  icon: string;
  value: string;
};

export default function PersonalArea() {

  const cnPersonalSettings = cn("personal-settings");
  const cnPersonalUser = cn("personal-area");
  const cnTariffBlock = cn("tariff-block");
  const cnArchiveTariff = cn("archive-tariff");


  const [iconArr, setIconArr] = useState<IconsArr[]>([
    {
      icon: Cake,
      value: "18.08.200",
    },
    { icon: Building, value: "Санкт-Петербург" },
    { icon: Message, value: "bistrobagson@mail.ru" },
    { icon: Call, value: "89102069869" },
  ]);
  const [active, setActive] = useState<string>();


  return (
    <div className={cnPersonalSettings()}>
      <div
        className={cnPersonalUser("shield", cnPersonalUser(`shield-${active}`))}
      ></div>
      <div className={cnPersonalSettings("left")}>
        <div className={cnPersonalUser("")}>
          <div className={cnPersonalUser("photo")}>
            <img
              src={avatar}
              alt={"Татьяна"}
            />
          </div>
          <div className={cnPersonalUser("name")}>
           
              <span>{`Татьяна Полонская`}</span>
        
          </div>

          <ul className={cnPersonalUser("list")}>
            {
              iconArr.map((el, ind) => (
                <li key={ind} className={cnPersonalUser("item")}>
                  <ReactSVG src={el.icon} />
                  <span>{el.value}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={cnPersonalSettings("right")}>
        <div className={cnTariffBlock()}>
          <div className={cnTariffBlock("description")}>
            <ReactSVG src={Tag} />
            <div className={cnTariffBlock("description-list")}>
              <p className={cnTariffBlock("text")}>{"Скоро мероприятие!"}</p>
              <p className={cnTariffBlock("text")}>
                {"Область будущего"}
              </p>
              <p
                className={cnTariffBlock("text")}
              >{`Не забудь посмотреть памятку участника.`}</p>
            </div>
          </div>
          <button className={cnTariffBlock("btn")}>
            <span>{"Перейти"}</span>
            <ReactSVG src={Arrow} />
          </button>
        </div>
        <div className={cnArchiveTariff()}>
          <div className={cnArchiveTariff("header")}>
            <p className={cnArchiveTariff("title")}>{"Навыки"}</p>
            {/* <button className={cnArchiveTariff("btn")}>
              <ReactSVG src={Receive} />
              <span>{"Выгрузить историю мероприятий"}</span>
            </button> */}
          </div>
          <div className={cnArchiveTariff("list-wrapper")}>
            <ul className={cnArchiveTariff("list")}>
              <li className={cnArchiveTariff("item")}>
                <p className={cnArchiveTariff("item-date")}>{"№"}</p>
                <p className={cnArchiveTariff("item-date")}>{"Область"}</p>
                <p className={cnArchiveTariff("item-tariff")}>{"Название"}</p>
                <p className={cnArchiveTariff("item-sum")}>{"Уровень"}</p>
              </li>
              <li className={cnArchiveTariff("item")}>
                <p className={cnArchiveTariff("item-date")}>{"1"}</p>
                <p className={cnArchiveTariff("item-date")}>{"IT"}</p>
                <p className={cnArchiveTariff("item-tariff")}>{"Python"}</p>
                <p className={cnArchiveTariff("item-sum")}>{"8 / 10"}</p>
              </li>
              <li className={cnArchiveTariff("item")}>
                <p className={cnArchiveTariff("item-date")}>{"2"}</p>
                <p className={cnArchiveTariff("item-date")}>{"IT"}</p>
                <p className={cnArchiveTariff("item-tariff")}>{"Django"}</p>
                <p className={cnArchiveTariff("item-sum")}>{"9 / 10"}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={cnArchiveTariff()}>
          <div className={cnArchiveTariff("header")}>
            <p className={cnArchiveTariff("title")}>{"История участия"}</p>
            <button className={cnArchiveTariff("btn")}>
              <ReactSVG src={Receive} />
              <span>{"Выгрузить историю мероприятий"}</span>
            </button>
          </div>
          <div className={cnArchiveTariff("list-wrapper")}>
            <ul className={cnArchiveTariff("list")}>
              <li className={cnArchiveTariff("item")}>
                <p className={cnArchiveTariff("item-date")}>{"Дата"}</p>
                <p className={cnArchiveTariff("item-tariff")}>{"Название"}</p>
                <p className={cnArchiveTariff("item-sum")}>{"Тип мероприятия"}</p>
                <p className={cnArchiveTariff("item-period")}>{"Статус"}</p>
              </li>
              <li className={cnArchiveTariff("item")}>
                <p className={cnArchiveTariff("item-date")}>{"05.02.2023"}</p>
                <p className={cnArchiveTariff("item-tariff")}>{"Хакатон по кибербезопасности"}</p>
                <p className={cnArchiveTariff("item-sum")}>{"Хакатон"}</p>
                <p className={cnArchiveTariff("item-period")}>{"Победитель"}</p>
              </li>
              <li className={cnArchiveTariff("item")}>
                <p className={cnArchiveTariff("item-date")}>{"14.04.2023"}</p>
                <p className={cnArchiveTariff("item-tariff")}>{"Школа молодого ученого"}</p>
                <p className={cnArchiveTariff("item-sum")}>{"Курс"}</p>
                <p className={cnArchiveTariff("item-period")}>{"Участник"}</p>
              </li>
              <li className={cnArchiveTariff("item")}>
                <p className={cnArchiveTariff("item-date")}>{"23.06.2023"}</p>
                <p className={cnArchiveTariff("item-tariff")}>{"Конкурс К.О.Д."}</p>
                <p className={cnArchiveTariff("item-sum")}>{"Конкурс"}</p>
                <p className={cnArchiveTariff("item-period")}>{"Финалист"}</p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
