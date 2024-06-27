import { ArrowLeft } from "../components/icons"
export default function Product() {
  return (
    <div className="p-4">
      <div className="flex relative justify-center ">
        <ArrowLeft className="size-8 absolute left-0" />
        <p className="text-2xl">Nome do produto</p>
      </div>

      <div className="my-3 mx-auto bg-green-900 rounded-xl w-52 h-52"></div>

      <p className="text-center">Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam sit amet tempus lectus.
        Integer leo neque, pretium ac maximus et,
        eleifend in leo.</p>
      <div className="flex justify-center">

        <button className="mr-2 p-1 text-xl rounded border-1 border-white">- 1 +</button>
        <button> Adicionar R$19,99</button>
      </div>
    </div>
  )
}