import Footer from "../../components/footer";
import Menu from "../../components/menu";
import { useRouter } from "next/router";

const DoacaoDetalhes = () => {
    const router = useRouter();

    const { query: { nome, img} } = router

    return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <div className="flex flex-1 container mx-auto mt-28 ">
        <span className="font-semibold text-2xl w-full px-5">
          Detalhes da doação
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-14 justify-between container mx-auto mt-12">
        <div className="flex flex-col items-center">
          <h5 className="font-bold">IMAGEM</h5>
          <div className="flex justify-center mt-5">
            <img
              src={
                img
              }
              className="rounded-lg h-56 w-full max-w-[200px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-bold">NOME DO PRODUTO</h5>

          <span className="mt-11">{nome}</span>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-bold">DIA DA DOAÇÃO</h5>
            <span className="mt-11" >05/11/2022</span>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-bold">TIPO DE DOAÇÃO</h5>
            <span className="mt-11">Presencial</span>
        </div>
      </div>
      <div className="flex justify-center md:justify-end container mx-auto mt-7">
        <button className="bg-button text-black font-medium text-base sm:text-lg border-none rounded-[4px] cursor-pointer px-20 py-3">
          Confirmar doação
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default DoacaoDetalhes;
