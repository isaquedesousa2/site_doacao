import Menu from "../components/menu";
import { IoMdPerson } from "react-icons/io";
import maps from "../assets/img/maps.png";
import Image from "next/image";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="mx-auto">
      <Menu />
      <section className="container mx-auto w-full max-w-3xl text-center p-8 flex gap-4 flex-col justify-center items-center mt-24">
        <h1 className="text-5xl">Seja um doador, mude vidas</h1>
        <p className="text-[#84878a] text-base font-medium">
          O ajuda segura tem como objetivo de facilitar as pessoas fazerem sua
          doação de modo rápido e eficaz. E também vem com o propósito de ajudar
          as comunidades, adquirindo alimentos, roupas e brinquedos para as
          crianças Venha você também fazer parte desse grupo ajudando as
          comunidades e ajude o Brasil na vulnerabilidade social
        </p>
        <button className="bg-button text-black font-bold text-lg border-none rounded-[4px] cursor-pointer px-20 py-3">
          Fazer minha doação
        </button>
      </section>
      <section className="w-full px-5 container mx-auto mt-52 flex flex-col justify-center items-center">
        <h1 className="text-3xl">Como doar?</h1>
        <div className="flex flex-wrap mt-24 gap-24 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <IoMdPerson size={50} />
            <p>Crie sua conta</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <IoMdPerson size={50} />
            <p>Escolha sua doação</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <IoMdPerson size={50} />
            <p>Escolha o local e dia</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <IoMdPerson size={50} />
            <p>Confrime sua doação</p>
          </div>
        </div>
      </section>
      <section className="px-5 container mx-auto w-full mt-48 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl">Já são varias pessoas ajudadas</h1>
        <div className="boxs-ajuda"></div>
      </section>
      <section className="flex items-center justify-center mx-auto mt-48 mb-52 w-full">
        <a
          href="https://www.google.com/maps/place/R.+S%C3%A3o+Louren%C3%A7o+-+Ilhotas,+Teresina+-+PI,+64015-340/data=!4m2!3m1!1s0x78e3754c1d506ef:0xa55cb7fc050d6ac2?sa=X&ved=2ahUKEwiCy_S_x636AhWQD7kGHQCSB9wQ8gF6BAgbEAE"
          target="_blank"
        >
          <Image src={maps} alt="" />
        </a>
      </section>
      <Footer />
    </div>
  );
}
