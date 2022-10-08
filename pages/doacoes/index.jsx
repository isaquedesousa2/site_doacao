import Footer from "../../components/footer";
import Link from "next/link";
import Menu from "../../components/menu";
import Router from "next/router";

const Doacoes = () => {

  const sendProps = ({ nome, img }) => {
    Router.push({
      pathname: '/doacoes/detalhes',
      query: {
        nome,
        img
      }
    })
  } 

  const produtos = [
    {
      nome: "Arroz",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2Vhl8Pp8ik_CuDxPh9CQLAcGUQTBYutxQA&usqp=CAU",
    },
    {
      nome: "Açúcar",
      img: "https://cdn-cosmos.bluesoft.com.br/products/7896060102210",
    },
    {
      nome: "Leite em pó",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdcYvteYP5V_WBTBKFxxq5dWKHvy5cDiAZw&usqp=CAU",
    },
    {
      nome: "Feijão",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt680XnAbH44CT3gjBVe6OCXmrfJA4C_lIdA&usqp=CAU",
    },
    {
      nome: "Sabonete",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kwNEjiLMhEgc75W8afhhLfSjpUBvTs0SYg&usqp=CAU",
    },
    {
      nome: "Shampoo",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZGOQQi4lnQrbArwkm_CurK5c-nzOS_h1ng&usqp=CAU",
    },
    {
      nome: "Condicionador",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uqDzPIhEI77KapHqk1Pc4uyFLe1-3voU-w&usqp=CAU",
    },
    {
      nome: "Escova de dente",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuXU4LMsccySFnj4d_GGZ7P-MAFlM0i7D5Q&usqp=CAU",
    },
    {
      nome: "Sabão em pó",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYgkS7A-gj79JG6uMEZJC2z3Lq0eAkBSWQg&usqp=CAU",
    },

    {
      nome: "Desinfetante",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5GQVMsBI-K3soQU_HA8Ke0dRaFbsqxtaqw&usqp=CAU",
    },
    {
      nome: "Papel higiênico",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMurZj7K_MyZKUPpUeq4SUXWE37N_Vd2AR0A&usqp=CAU",
    },
    {
      nome: "Água sanitária",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZDE7BeeIekl7LZYAdzGESDSwVf2LKin-BQ&usqp=CAU",
    },
  ];

  const Box = ({ nome, img }) => {
    return (
      <div className="flex flex-col gap-5 mt-4 max-w-[200px]">
        <div className="w-full">
          <img src={img} className="rounded-lg h-56 w-full" />
        </div>
        <span className="font-semibold">{nome}</span>
          <button
            onClick={() => sendProps({ nome: nome, img: img })}
            className="bg-[#1E1F26] hover:bg-secondary hover:text-[#1E1F26] transition-colors font-bold text-base sm:text-base border-none rounded-[4px] cursor-pointer py-3"
          >
            Doar
          </button>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-6 flex flex-col min-h-screen">
      {/* <Link href="/">
        <h1 className="font-semibold text-2xl cursor-pointer px-5">
          O Ajuda Segura
        </h1>
      </Link> */}
      <Menu />
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
            {produtos.map((item) => (
              <Box key={item.img} img={item.img} nome={item.nome} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doacoes;
