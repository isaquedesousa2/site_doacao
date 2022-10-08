import leite from "../assets/img/leite.jpg";
import Image from "next/image";
import Footer from "../components/footer";


const Doacoes = () => {

    const Box = () => {
        return (
          <div className="flex flex-col gap-5 mt-4 max-w-[200px]">
            <div className=" w-full">
              <Image src={leite} className="rounded-lg" />
            </div>
            <span className="font-semibold">Leite em Pó</span>
            <button className="bg-[#1E1F26] font-bold text-base sm:text-base border-none rounded-[4px] cursor-pointer py-3">
              Doar
            </button>
          </div>
        );
    }

  return (
    <div className="container mx-auto py-6 flex flex-col min-h-screen">
      <h1 className="font-semibold text-2xl cursor-pointer px-5">
        O Ajuda Segura
      </h1>
      <div className="w-full mx-auto mt-28 flex flex-col flex-1 px-5">
        <div className="w-full">
          <span className="font-semibold text-2xl">Faça o bem para alguém</span>
          <div className="w-full bg-[#1E1F26] mt-5 rounded-lg p-10">
            <span className="bg-transparent font-semibold text-3xl">
              Se você não passa fome, tem que ser parte da solução.
            </span>
            <p className="bg-transparent mt-6 text-base">
              33 MILHÕES DE BRASILEIROS ESTÃO PASSANDO FOME. 15% DA POPULAÇÃO
              QUE NÃO TÊM O QUE COMER.
            </p>
          </div>
        </div>
        <div className="w-full mt-16">
          <span className="font-semibold text-2xl ">Todos os produtos</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid- gap-5 mt-5 mb-16">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doacoes;
