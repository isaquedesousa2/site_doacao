import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full container mx-auto mt-24 px-5 ">
      <div className="flex items-center flex-col gap-5">
        <h1 className="font-semibold text-2xl">O Ajuda Segura</h1>
        <p className="text-center">
          Doe e fomente uma vida com autonomia e bem-estar!
        </p>
        <nav className="flex flex-wrap items-center  justify-center gap-5">
          <Link href="#" className="hover:text-secondary">
            <span className="hover:text-secondary cursor-pointer transition-colors">
              Doações
            </span>
          </Link>
          <Link href="#">
            <span className="hover:text-secondary cursor-pointer transition-colors">
              Faça sua doação
            </span>
          </Link>
          <Link href="/sobre" className="hover:text-secondary">
            <span className="hover:text-secondary cursor-pointer transition-colors">
              Sobre
            </span>
          </Link>
        </nav>
      </div>
      <div className="w-full py-5 text-center mt-16">
        <span>O Ajuda Segura - Todos os direitos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
