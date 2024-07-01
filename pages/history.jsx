import { Accordion, AccordionItem } from "@nextui-org/react"
import { ArrowLeft } from "../components/icons"
export default function History() {
  const OrderHistory = [
    { "name": "Hambúrguer de frango e cheddar", "quantity": 1, "price": 777.77, date: "24/06/2024" },
    { "name": "Sundae de chocolate com calda de morango", "quantity": 2, "price": 6.99, date: "11/06/2023" }
  ]

  return (
    <div>
      <div className="m-2 flex relative justify-center">
        <ArrowLeft className="size-8 absolute left-0" />
        <p className="text-2xl mb-6">Histórico de compras</p>
      </div>

<div className="flex justify-center">

<Accordion className="w-80" itemClasses={{title: "text-2xl bg-green-500 "}} variant="light">
    {OrderHistory.map((order, idx) => (
      <AccordionItem classNames={{title: "flex justify-center text-2xl mx-auto"}} key={idx} title={order.date}>blableble</AccordionItem>
      
    ))}
    </Accordion>

    </div>
    </div>
  )
}