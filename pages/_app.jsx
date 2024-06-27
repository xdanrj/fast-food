import '../globals.css'
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import BottomNavbar from '../components/BottomNavbar';
import TopNavbar from '../components/TopNavbar';
export default function App({ Component, pageProps }) {
  return (
    <>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <TopNavbar/>
      <Component {...pageProps}/>
      </NextThemesProvider>
      <BottomNavbar />
    </NextUIProvider>
    </>
  )
}