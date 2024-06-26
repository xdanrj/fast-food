import { Button } from "@nextui-org/react"
import { useTheme } from "next-themes"
export default function Teste(){
const {theme, setTheme} = useTheme()
return (
<>
<Button onClick={() => setTheme('purple-dark')}>PurpleDark Mode</Button>
<Button onClick={() => setTheme('dark')}>Dark Mode</Button>
</>
)
}