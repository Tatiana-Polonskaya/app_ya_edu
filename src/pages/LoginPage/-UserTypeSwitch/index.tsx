import { cn } from "@bem-react/classname";

import Tab from "../../../components/ui-kit/Tab";

import "./style.scss";

const cnUserTypeSwitch = cn("user-type-switch");

export default function UserTypeSwitch() {
  return (
    <div className={cnUserTypeSwitch()}>
      <Tab selected={true} onClick={() => {}}>
        Участник
      </Tab>
      <Tab selected={false} onClick={() => {}}>
        Организатор
      </Tab>
    </div>
  );
}
