import Image from "next/image";
const Categories = ["Início", "Promoções", "Combos", "Sobremesas", "Bebidas"]

export default function SubTopNavbar() {
  return (
    <>
    <div className="flex bg-neutral-800 border-t-1 border-b-1 border-neutral-500 p-2 items-center">
   <ul className="flex list-none overflow-x-scroll whitespace-nowrap space-x-4">
    {Categories.map((item, idx) => (
      <li key={idx}>
        {item}
      </li>
    ))}
   </ul>
    </div>
    </>
  )
}