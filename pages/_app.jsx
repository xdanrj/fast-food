import '../globals.css'
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import BottomNavbar from '../components/Navbars/BottomNavbar';
import TopNavbar from '../components/Navbars/TopNavbar';
import SubTopNavbar from '../components/Navbars/SubTopNavbar';
import Footer from '../components/Footer';
export default function App({ Component, pageProps }) {
  return (
    <>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <TopNavbar/>
        <SubTopNavbar/>
      <Component {...pageProps}/>
      </NextThemesProvider>
      <BottomNavbar />
      <Footer/>
    </NextUIProvider>
    </>
  )
}