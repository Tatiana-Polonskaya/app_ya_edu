import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Outlet, useParams } from "react-router-dom";

import "./style.scss";
import { cn } from "@bem-react/classname";

export default function EventPage() {
  const cnEvent = cn("EventPage");
  
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
