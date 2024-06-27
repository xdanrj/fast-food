import { HomeIcon, CartIcon, GlassIcon } from "./icons";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 w-full bg-neutral-800">
      <ul className="flex list-none justify-around my-2">
        <li >
          <a href="#" className="flex flex-col items-center">
            <HomeIcon />
            <p>Início</p>
          </a>
        </li>
        <li >
          <a href="#" className="flex flex-col items-center">
            <GlassIcon />
            <p>Buscar</p>
          </a>
        </li>
        <li >
          <a href="#" className="flex flex-col items-center">
            <CartIcon />
            <p>Carrinho</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
