import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <>
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="purple-dark">

      <h1>Navbar</h1>
      <Component {...pageProps}/>
      </NextThemesProvider>
    </NextUIProvider>
    </>
  )
}