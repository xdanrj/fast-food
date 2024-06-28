import { ArrowLeft, TrashIcon } from "../components/icons"

const Orders = {
  products: [
    { "name": "Hambúrguer de frango e cheddar", "quantity": 1, "price": 19.99 },
    { "name": "Sundae de chocolate com calda de morango", "quantity": 2, "price": 6.99 }
  ]
}
export default function History() {
  return (
    <div className="">

      <div className="m-2 flex relative justify-center">
        <ArrowLeft className="size-8 absolute left-0" />
        <p className="text-2xl">Carrinho</p>
        <TrashIcon className="size-8 absolute right-0" />
      </div>

      <div className="mt-6 w-full h-16 border-white-500 border-t-1 border-b-1">

      </div>
    </div>
  )
}