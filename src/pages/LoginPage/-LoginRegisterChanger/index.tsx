import { cn } from "@bem-react/classname";
import { useNavigate } from "react-router-dom";

import Link from "../../../components/ui-kit/Link";

import "./style.scss";
import { RoutesEnum } from "../../../App";



const cnLoginRegisterChanger = cn("login-register-changer");

export default function LoginRegisterChanger() {
  const navigate = useNavigate();
  return (
    <div className={cnLoginRegisterChanger()}>
      <span>Еще нет аккаунта?</span>
      <Link>Зарегистрироваться</Link>
    </div>
  );
}
