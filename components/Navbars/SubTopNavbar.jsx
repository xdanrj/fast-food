import Image from "next/image";

const Categories = ["Início", "Promoções", "Combos", "Sobremesas", "Bebidas"]

export default function SubTopNavbar() {
  return (
    <div className="flex bg-neutral-800 p-2 items-center">
   <ul className="flex list-none justify-around my-2">
    {Categories.map((item, idx) => (
      <>
      
      </>
    ))}
   </ul>
    
    </div>
  )
}