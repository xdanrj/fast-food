import Image from "next/image";
import {ArrowDown} from "../icons";

export default function TopNavbar() {
  return (
    <div className="flex bg-neutral-800 p-2 items-center">
      <Image width="45" height="45" src="/images/FastFoodLogo.png" />
    <p className="ml-5 mr-2">Selecione seu endereço</p>
    <ArrowDown className="size-6"/>
    </div>
  )
}