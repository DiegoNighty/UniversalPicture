import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css";
import fonts from "./fonts";

export const meta = () => ({
    charset: "utf-8",
    title: "HypoxTeam | Website 1.0.0",
    viewport: "width=device-width,initial-scale=1",
});

export function links() {
    return [
        {rel: "stylesheet", href: styles},
        {rel: "stylesheet", href: fonts.MANROPE}
    ];
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body className="bg-white min-h-screen grid place-content-center">
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
