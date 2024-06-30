import { ArrowLeft, TrashIcon, XIcon } from "../components/icons"

const Orders = {
  products: [
    { "name": "Hambúrguer de frango e cheddar", "quantity": 1, "price": 777.77 },
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
        <div key={idx} className=" flex p-2 items-center mt-6 w-full sm:w-3/5 md:w-1/2 lg:w-2/5 mx-auto h-16 border-white-500 border-t-1 border-b-1">
          <div className="flex text-lg w-16">
            <p className="">-</p>
            <p className="mx-2">{item.quantity}</p>
            <p className="">+</p>
          </div>

          <p className="text-left text-sm md:text-base lg:text-lg w-56 bg-blue-900">{item.name}</p>

            <div className="flex ml-auto items-center w-40 bg-green-500">
              <p className="ml-auto w-auto text-lg">R$ {item.price}</p>
              <XIcon className=" size-5" />
            </div>
         
        </div>
      ))

      }
    </div>
  )
}