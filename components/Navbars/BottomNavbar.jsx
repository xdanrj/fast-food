import { HomeIcon, CartIcon, GlassIcon } from "../icons";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 w-full bg-neutral-800">
      <ul className="flex list-none justify-around">
        <li >
          <a href="#" className="flex flex-col items-center">
            <HomeIcon className="size-4"/>
            <p className="text-sm">Início</p>
          </a>
        </li>
        <li >
          <a href="#" className="flex flex-col items-center">
            <GlassIcon className="size-4" />
            <p className="text-sm">Buscar</p>
          </a>
        </li>
        <li >
          <a href="#" className="flex flex-col items-center">
            <CartIcon className="size-4"/>
            <p className="text-sm">Carrinho</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
