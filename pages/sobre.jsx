import Footer from "../components/footer";
import Menu from "../components/menu";

const Sobre = () => {
  return (
    <div className="container mx-auto py-6 flex flex-col min-h-screen">
      <Menu />
      <div className="max-w-4xl mx-auto mt-28 flex flex-1 px-5">
        <div>
          <h1 className="text-4xl font-bold">Sobre</h1>
          <p className="mt-8">
            1 - O ajuda agora é uma equipe de estudantes do curso Análise e
            Desenvolvimento de Sistemas da faculdade Uninassau (Teresina/PI-
            Jóquei). O projeto teve início na data (27/08/2022), com o objetivo
            de auxiliar as pessoas realizarem doações de forma mais fácil e
            prático para comunidade AMBI (Associação de Mulheres do Bairro
            Ilhotas).
            <br />
            <br />
            2 - O projeto foi elaborado com a intenção de ajudar você a realizar
            o desejo de ajudar as comunidades com arrecadações de doações, deste
            modo beneficiar-las desenvolver-las.
            <br />
            <br />
            3 - Créditos:
            <br />
            - Desenvolvedor: Isaque de Sousa Leal
            <br />- Líder do projeto: Humberto Visqueira
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sobre;
