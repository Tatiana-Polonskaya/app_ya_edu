import React, { useState } from "react";
import EntryLayout from "../../layouts/EntryLayout";

import pic from "./assets/login.svg";
import { cn } from "@bem-react/classname";
import UserTypeSwitch from "./-UserTypeSwitch";
import InfoFragment from "./-InfoFragment";
import InputHeader from "../../components/ui-kit/InputHeader";
import Input from "../../components/ui-kit/Input";
import Button from "../../components/ui-kit/Button";
import Link from "../../components/ui-kit/Link";
import { Route, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

import "./style.scss"
import { RoutesEnum } from "../../App";

const cnLoginPage = cn("login-page");

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    navigate(RoutesEnum.HOME)
    //   try {
    //     const result = await loginRequest({ email, password });
    //     const { isSuccess, data } = result;
    //     if (isSuccess && data) {
    //         if (data.success) {
    //             navigate(from);
    //         } else {
    //             const error = data.error!;
    //             setEmailWrong(false);
    //             setPasswordWrong(false);
    //             switch (error.code) {
    //                 case 10003:
    //                     setWrongPasswordText(error.msg);
    //                     setPasswordWrong(true);
    //                     break;
    //                 case 10015:
    //                     setWrongEmailText(error.msg);
    //                     setEmailWrong(true);
    //                     break;
    //                 default:
    //                     alert(error.msg);
    //                     break;
    //             }
    //         }
    //     } else {
    //         alert("Ошибка сервера");
    //     }
    // } catch (e) {
    //     alert(e);
    // }
  };

  return (
    <EntryLayout image={<ReactSVG src={pic} />}>
      <UserTypeSwitch />

      {/* <LoginRegisterChanger pageType={PageType.Login} /> */}
      <div className={cnLoginPage()}>
        <InfoFragment
          phrase={"Готовы всех поразить?"}
          subphrase={"Поможем сделать правильный выбор."}
        />

        <div className={cnLoginPage("inputs")}>
          <label>
            <InputHeader text="Почта" />
            <Input
              placeholder="Введите электронную почту"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <InputHeader text="Пароль" />
            <Input
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </label>

          <Button
            className={cnLoginPage("next-button")}
            disabled={!(email && password)}
            onClick={onSubmit}
            // onClick={() => loginRequest({ email, password })}
          >
            Продолжить
          </Button>
        </div>
        <p>
          <span>Забыли пароль?</span>&nbsp;
          <Link className={cnLoginPage("link")}>Восстановить</Link>
        </p>
      </div>
    </EntryLayout>
  );
}
