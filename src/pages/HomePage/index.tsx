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
    image: "string",
    title: "string",
    desc: "string",
  },
  {
    id: 1,
    image: "string",
    title: "string",
    desc: "string",
  },
  {
    id: 2,
    image: "string",
    title: "string",
    desc: "string",
  },
  {
    id: 3,
    image: "string",
    title: "string",
    desc: "string",
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
        <ArchiveSearch updateSearch={()=>{}}/>
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
