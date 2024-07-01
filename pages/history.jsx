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

<Accordion itemClasses={{title: "text-2xl"}} variant="splitted">

    {OrderHistory.map((order, idx) => (
      <AccordionItem key={idx} title={order.date}>blableble</AccordionItem>
      
    ))}
    </Accordion>

    </div>
  )
}