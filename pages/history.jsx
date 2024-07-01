import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react"
import { ArrowLeft } from "../components/icons"
import { useState } from "react"
export default function History() {
  const [open, setOpen] = useState()
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
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

<div className="">

    {OrderHistory.map((order, idx) => (
      <Accordion open={open === 1} key={idx}>
        <AccordionHeader onClick={()=> handleOpen(1)}>
          {order.date}
        </AccordionHeader>
        <AccordionBody>
          corpo bla bla
        </AccordionBody>
      </Accordion>
      
    ))}

    </div>
    </div>
  )
}