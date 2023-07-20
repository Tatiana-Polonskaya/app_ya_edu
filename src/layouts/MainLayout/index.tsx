import { Fragment, ReactNode } from "react";
import { cn } from "@bem-react/classname";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import avatar from "./avatar.jpg";

import "./style.scss";

type Props = {
    children?: ReactNode;
};

const cnContent = cn("mainLayout");

export default function MainLayout(props: Props) {
    
    return (
        <Fragment >
            <div className={cnContent()}>
                <Menu />
                <div className={cnContent("wrapper")}>
                    <Header displayName={`Татьяна Полонская`} imageUrl={avatar}/>
                    <section className={cnContent("main")}>
                        {props.children}
                    </section>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
