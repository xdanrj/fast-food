import Image from "next/image";

export default function TopNavbar() {
  return (
    <div className="flex bg-neutral-800 p-2 items-center">
      <Image width="45" height="100" src="/images/FastFoodLogo.png" />
    <p className="ml-5 bold">Selecione seu endereço</p>
    
    </div>
  )
}