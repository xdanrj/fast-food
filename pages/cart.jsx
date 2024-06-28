import { ArrowLeft, TrashIcon, XIcon } from "../components/icons"

const Orders = {
  products: [
    { "name": "Hambúrguer de frango e cheddar", "quantity": 1, "price": 7919.99 },
    { "name": "Sundae de chocolate com calda de morango", "quantity": 2, "price": 6.99 }
  ]
}
export default function Cart() {
  return (
    <div className="">

      <div className="m-2 flex relative justify-center">
        <ArrowLeft className="size-8 absolute left-0" />
        <p className="text-2xl">Carrinho</p>
        <TrashIcon className="size-8 absolute right-0" />
      </div>

      {Orders.products.map((item, idx) => (
        <div key={idx} className=" flex p-2 items-center mt-6 w-full h-16 border-white-500 border-t-1 border-b-1">
          <div className="flex text-lg w-16">
            <p className="">-</p>
            <p className="mx-2">{item.quantity}</p>
            <p className="">+</p>
          </div>

          <p className="text-left text-md w-3/5 bg-blue-900">{item.name}</p>

            <div className="flex ml-auto items-center mx-2 bg-green-500">
              <p className="text-right">R${item.price}</p>
              <XIcon className="size-5" />
            </div>
         
        </div>
      ))

      }
    </div>
  )
}