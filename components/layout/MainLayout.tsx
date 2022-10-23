import  Head  from "next/head"
import { FC } from "react"
import { useAppSelector } from "../../app/hooks";
import { Navbar } from '../ui/Navbar';

interface PropsLayout {
    title: string;
    children: JSX.Element;
}

export const MainLayout: FC<PropsLayout> = ({title = "Ecommerce", children}) => {
    
    const modoState = useAppSelector((state) => state.modo.modo)
    
    return (
        <>
            <Head>
                <title> {title} </title>
            </Head>
            <div className={`ecommerce__content ${modoState ? "dark" : "light"}`}>
                <Navbar />
                <main className="main__content">{children}</main>
                <footer className="footer__content">Copyright © 2022 David, Corp. All rights reserved.</footer>
            </div>
        </>
    )
}
