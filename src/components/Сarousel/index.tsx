import { cn } from "@bem-react/classname";
import CarouselItem from "./CarouselItem";
import { ReactSVG } from "react-svg";

import arrow_left from "./arrows/arrow-left.svg";
import arrow_right from "./arrows/arrow-right.svg";

import "./style.scss";

import { useEffect, useState } from "react";

type ArrowProps = {
  className?: string;
  onClick?: any;
};

function SampleNextArrow(props: ArrowProps) {
  const { className, onClick } = props;
  return (
    <div className={className}>
      <ReactSVG src={arrow_right} onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, onClick } = props;
  return (
    <div className={className}>
      <ReactSVG src={arrow_left} onClick={onClick} />
    </div>
  );
}

const cnСarouse = cn("Carousel"); //className={cnСarouse()}

export default function Carousel() {
  /* --------------------------- GETTING VIDEOS ---------------------------*/

  const currentVideos = [
    {
      id: "1",
      url: "https://w-dog.ru/wallpapers/3/11/511599526961738/puxlaya-zubastaya-morda-na-polu.jpg",
      title: "Что такое центр компетенций?",
    },
    {
      id: "2",
      url: "https://mobimg.b-cdn.net/v3/fetch/b6/b6fc93622af22b5a0caf90fba4029d1c.jpeg",
      title: "Как подать заявку на мероприятие?",
    },
    {
      id: "3",
      url: "https://mobimg.b-cdn.net/v3/fetch/b6/b6fc93622af22b5a0caf90fba4029d1c.jpeg",
      title: "Как подать заявку на мероприятие?",
    },
    {
      id: "4",
      url: "https://mobimg.b-cdn.net/v3/fetch/b6/b6fc93622af22b5a0caf90fba4029d1c.jpeg",
      title: "Как подать заявку на мероприятие?",
    },
    {
      id: "5",
      url: "https://mobimg.b-cdn.net/v3/fetch/b6/b6fc93622af22b5a0caf90fba4029d1c.jpeg",
      title: "Как подать заявку на мероприятие?",
    },
    {
      id: "6",
      url: "https://mobimg.b-cdn.net/v3/fetch/b6/b6fc93622af22b5a0caf90fba4029d1c.jpeg",
      title: "Как подать заявку на мероприятие?",
    },
  ];

  /* --------------------------- MODAL WINDOW ---------------------------*/
  const [isModal, setModal] = useState(false);
  const [modalVideo, setModalVideo] = useState<any>();

  /* --------------------------- OPEN MODAL ---------------------------*/

  const clickOnVideo = async (el: any) => {
    setModalVideo(el);
    setModal(true);
  };

  /* --------------------------- CODE ---------------------------*/

  return (
    <div>
      <div className={cnСarouse("main-container")}>
        <SamplePrevArrow className={cnСarouse("arrow")} />
        {currentVideos.map((el) => (
          <CarouselItem {...el} key={el.id} onClick={() => clickOnVideo(el)} />
        ))}
        <SampleNextArrow className={cnСarouse("arrow")} />
      </div>

      {/* <ModalWindow isVisible={isModal} onClose={() => setModal(false)}>
                <ModalWindowContext.Provider value={{ isModal, setModal }}>
                    {modalVideo && (
                        <CarouselModalContent modalVideo={modalVideo} />
                    )}
                </ModalWindowContext.Provider>
            </ModalWindow> */}
    </div>
  );
}
