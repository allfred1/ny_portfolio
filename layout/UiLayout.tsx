"use server";
import { ReactNode } from "react";
import Navbar from "@/components/HandleNavbar/Navbar";

import Error from "@/app/Error";
interface IIProps {
    children: React.ReactNode;
}

export default async function UiLayout({ children }: IIProps) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    ); 
}
