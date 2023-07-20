import React, { useContext, useEffect, useState } from "react";

import { cn } from "@bem-react/classname";

import NoPhoto from "../ProfilePreview/assets/no-photo.png";

import "./style.scss";



import { useNavigate } from "react-router-dom";

import { ReactSVG } from "react-svg";

import arrowIcon from "./assets/arrow-down.svg";
import { IEvent, ModalWindowContext } from "../../pages/HomePage";
import { RoutesEnum } from "../../App";



type Props = {
    modalEvent:IEvent;
}

export default function EventModalContent({modalEvent}: Props) {

    const navigate = useNavigate(); 

    const { setModal } = useContext(ModalWindowContext);

    const totalVideoInfo = [
        88, 60, 34, 20, 73, 99
    ]
    
    let criteria =  [
        {
            title: "Школьники",
        },
        {
            title: "Junior специалисты",
        },
        {
            title: "ML",
        },
        {
            title: "Менеджмент",
        },
        {
            title: "Дизайн",
        },
        {
            title: "IT",
        },
    ];



    const clickDetailedBtn = () =>{
        // localStorage.setItem("main-page", "true");
        navigate(RoutesEnum.EVENT + "/" + modalEvent.id);
    };

    const cnModalContent = cn("VideoModalContent");

    return (
        <div className={cnModalContent()}>

            <div className={cnModalContent("video-row")}>
                <div className={cnModalContent("video-row-videoplayer")}>
                    <img className={cnModalContent("video-row-videoplayer")} src={modalEvent.image} alt={modalEvent.title}/>
                </div>
                <div className={cnModalContent("video-row-description")}>
                    <div
                        className={cnModalContent(
                            "video-row-description-title-row"
                        )}
                    >
                        <p
                            className={cnModalContent(
                                "video-row-description-title-row-text"
                            )}
                        >
                            {modalEvent.title}
                        </p>

                        <p>
                            <img
                                src="/images/button-close.svg"
                                className={cnModalContent(
                                    "video-row-description-title-row-closebutton"
                                )}
                                onClick={()=>setModal(false)}
                                alt="close"
                            />
                        </p>
                    </div>
                    <div
                        className={cnModalContent(
                            "video-row-description-times"
                        )}
                    >
                        {"вчера"}
                    </div>
                    <div
                        className={cnModalContent(
                            "video-row-description-author-block"
                        )}
                    >
                        <div
                            className={cnModalContent(
                                "video-row-description-author-block-logo"
                            )}
                        >
                            <img
                                className={cnModalContent(
                                    "video-row-description-author-block-logo-img"
                                )}
                                src={NoPhoto}
                                alt=""
                            />
                        </div>
                        <p
                            className={cnModalContent(
                                "video-row-description-author-block-name"
                            )}
                        >
                            {"Росмолодежь"}
                        </p>
                    </div>

                    <div
                        className={cnModalContent(
                            "video-row-description-annotation-title"
                        )}
                    >
                        Аннотация
                    </div>
                    <div
                        className={cnModalContent(
                            "video-row-description-annotation-text"
                        )}
                    >
                        {modalEvent.desc}
                    </div>

                    <button
                        className={cnModalContent(
                            "video-row-description-btn-info"
                        )}
                        onClick={clickDetailedBtn}
                    >
                        Подробнее
                        <ReactSVG src={arrowIcon} wrapper="span" className={cnModalContent(
                            "video-row-description-btn-info-icon"
                        )}/>
                    </button>
                </div>
            </div>

            <div className={cnModalContent("analyze-row")}>
                {totalVideoInfo && (
                    <>
                        {criteria.map((item,idx) => (
                             <div
                                 key={idx}
                                 className={cnModalContent("analyze-row-item")}
                             >
                                 <div
                                     className="pie animate"
                                     style={
                                        {
                                            "--p": totalVideoInfo[idx],
                                        } as React.CSSProperties
                                    }
                                >
                                    {totalVideoInfo[idx]}%
                                </div>
                                <p>{item.title}</p>
                            </div>
                        ))}   
                        </>
                )}
            </div>
        </div>
    );
}
