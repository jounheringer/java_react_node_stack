"use client"

import {Header} from "@/components/sidebar/AppSideBar";
import {ThemeProvider} from "@/components/theme-provider";
import {usePathname} from "next/navigation";

export default function RootLayoutClient({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname();
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {pathName == "/" ? null : <Header/>}
        <main>
            {children}
        </main>
    </ThemeProvider>
    )
}