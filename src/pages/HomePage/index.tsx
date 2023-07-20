import Carousel from "../../components/Сarousel";
import { cn } from "@bem-react/classname";

import MainLayout from "../../layouts/MainLayout";

import ElementEqual from "./icons/element-equal.svg";
import "./style.scss";
import { ReactSVG } from "react-svg";
import ActionCard from "../../components/ActionCard";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import EventModalContent from "../../components/EventModalContent";
import ArchiveSearch from "../../components/ArchiveSearch";

export interface IEvent {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const cnHome = cn("home");

const events = [
  {
    id: 0,
    image:
      "https://sun1-94.userapi.com/impg/Au3HPyOwJ9OJeTwnFhY0nN9qyPoWVGJ-aXgzKg/lrfRa3tJqT4.jpg?size=1080x1080&quality=95&sign=113dfddb323b04fadfb3bd9baa2fe7ad&type=album",
    title: "Область будущего",
    desc: "Молодежный образовательный форум «Область будущего» является площадкой для создания новой IT-среды с помощью ресурсов общественных и государственных структур, бизнес-сообщества и других институтов для поддержки молодежных инициатив, содействия самореализации молодежи в новейших отраслях IT-индустрии, повышения уровня ее компетенции и навыков, преумножения человеческого капитала.",
  },
  {
    id: 1,
    image:
      "https://sun9-9.userapi.com/impg/EF3LaqUrT1vxre3xNX-Ilp0ATJwwlOdyPnVUSQ/tliLA8Vc20o.jpg?size=1280x1280&quality=96&sign=13550d0e7d39cae7b9c78cd2478e9c63&type=album",
    title: "Студент года Липецкой области",
    desc: "Не важно где ты учишься, в ВУЗе или колледже, не важно ты лидер или член команды, магистр или бакалавр. Главное - быть заряженным на победу, любить свое дело и не бояться заявить о себе!",
  },
  {
    id: 2,
    image:
      "https://sun1-97.userapi.com/impg/bp6kyvoAdFVZzl2koSTvidwy1R6B0VAP96PvXg/hxuSrA_qvB0.jpg?size=764x1080&quality=95&sign=e906e4269b0da5adbf88d862fca7af97&type=album",
    title: "Кастинг-платформа «Цех»",
    desc: "Кастинг-платформа «Цех» - уникальная площадка для создания и продвижения молодых артистов, направленная на популяризацию авторского творчества исполнителей.",
  },
  {
    id: 3,
    image: "https://smi44.ru/upload/iblock/67e/клуб.jpg",
    title: "Клуб молодых предпринимателей",
    desc: "Клуб молодых предпринимателей дает возможность интеграции молодых предпринимателей с существующими федеральными и региональными сообществами предпринимателей. Поддержка молодых лидеров мнений – возможность найти профильных бизнес-партнеров и наставников.",
  },
  {
    id: 4,
    image: "https://static.gorodzovet.ru/uploads/2023/7/28/photo600-9738539.webp?v=130723120624",
    title: "Первый кинотеатральный фестиваль на свежем воздухе ",
    desc: "28 июля на пляже базы отдыха Политехник пройдет первый кинотеатральный фестиваль на свежем воздухе Синестезия, в число организаторов которого входит всеми нами любимый театр на базе Липецкого Политеха Вешалка.",
  },
];

export const ModalWindowContext = createContext({
  isModal: false,
  setModal: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export default function HomePage() {
  /* --------------------------- MODAL WINDOW ---------------------------*/
  const [isModal, setModal] = useState(false);
  const [modalEvent, setmodalEvent] = useState<IEvent>();

  return (
    <MainLayout>
      <div className={cnHome()}>
        <div className={cnHome("chat")}></div>
        <div className={cnHome("header")}>
          <ReactSVG src={ElementEqual} />
          <div>Мероприятия, которые могут вам понравиться</div>
        </div>
        <ArchiveSearch updateSearch={() => {}} />
        <div className={cnHome("content")}>
          {events.map((el) => (
            <ActionCard
              key={el.id}
              {...el}
              func={() => {
                setmodalEvent(el);
                setModal(true);
              }}
            />
          ))}
        </div>
        <div className={cnHome("header")}>
          <ReactSVG src={ElementEqual} />
          <div>Видео-помощь</div>
        </div>
        <Carousel />
      </div>
      <ModalWindow isVisible={isModal} onClose={() => setModal(false)}>
        <ModalWindowContext.Provider value={{ isModal, setModal }}>
          {modalEvent && <EventModalContent modalEvent={modalEvent} />}
        </ModalWindowContext.Provider>
      </ModalWindow>
    </MainLayout>
  );
}
