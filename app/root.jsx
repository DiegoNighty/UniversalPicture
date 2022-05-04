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
    title: "UniversalPicture | Change all pfp in a moment!",
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
        <body className="bg-gradient-to-r from-rose-100 to-teal-100 min-h-screen grid place-content-center">
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
