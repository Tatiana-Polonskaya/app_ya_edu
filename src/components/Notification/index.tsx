import { cn } from "@bem-react/classname";
import HeaderNotification from "./-Header";

import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import NotificationItem, { TYPE_NOTIFICATION } from "./-NotificationItem";

import "./style.scss";


export const NotificationContext = createContext({
    isShow: true,
    setIsShow: (() => {}) as Dispatch<SetStateAction<boolean>>,
});

export default function Notification() {
    const cnNotification = cn("Notification");

    const userNotifications = [""];
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <NotificationContext.Provider value={{ isShow, setIsShow }}>
                <div className={cnNotification({ expanded: isShow })}>
                    <HeaderNotification />

                    {isShow && (
                        <div
                            className={cnNotification("content", {
                                expanded: !isShow,
                            })}
                        >
                            {userNotifications.length > 0 ? (<><div className={cnNotification("content-date")}>
                                Сегодня
                            </div>
                            <NotificationItem
                                title="Появились новые мероприятия!"
                                description="На главное страницы добавились мероприятия, которые могут быть тебе интересны!"
                                type={TYPE_NOTIFICATION.NOTICE}
                                status={true}
                                linkTitle=""
                            />
                            <div className={cnNotification("content-date")}>
                                Вчера
                            </div>
                            <NotificationItem
                                title="Скоро мероприятие!"
                                description="У тебя осталось всего неделя, чтобы выполнить задания для заявки на форум!"
                                type={TYPE_NOTIFICATION.LINK}
                                status={false}
                                linkTitle="Подробнее"
                            /></>) : <div className={cnNotification("content-date")}>Нет новых уведомлений</div>}
                            
                        </div>
                    )}
                </div>
            </NotificationContext.Provider>
        </>
    );
}
