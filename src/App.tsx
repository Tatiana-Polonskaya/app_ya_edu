import ApplicationPage from "./pages/ApplicationPage";
import HomePage from "./pages/HomePage";

import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import EventPage from "./pages/EventPage";
import SettingPage from "./pages/SettingPage";
import EventInfo from "./components/EventInfo";

export const enum RoutesEnum {
  ROOT = "",
  LOGIN = "/login",
  HOME = "/home",
  APPLICATIONS = "/applications",
  SETTINGS = "/setting",
  DIARY = "/diary",
  EVENT = "/event",
  ACCOUNT = "/account",
  LEARNING = "/learning",
}

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path={RoutesEnum.ROOT} element={<HomePage />} />
        <Route path={RoutesEnum.HOME} element={<HomePage />} />
        <Route path={RoutesEnum.LEARNING} element={<HomePage />} />
        <Route path={RoutesEnum.LOGIN} element={<LoginPage />} />
        <Route path={RoutesEnum.APPLICATIONS} element={<ApplicationPage />} />
        <Route path={RoutesEnum.EVENT} element={<EventPage />}>
          <Route index={false} path=":id" element={<EventInfo />} />
        </Route>
        <Route path={RoutesEnum.ACCOUNT} element={<AccountPage />} />
        <Route path={RoutesEnum.SETTINGS} element={<SettingPage />} />
      </Routes>
    </div>
  );
}

export default App;
