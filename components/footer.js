const Footer = () => {
    return (
      <footer className="w-full container mx-auto mt-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">O Ajuda Segura</h1>
          <p>Doe e fomente uma vida com autonomia e bem-estar!</p>
          <ul className="flex gap-5">
            <a className="text-[#84878a] font-semibold text-sm" href="#">
              Início
            </a>
            <a className="text-[#84878a] font-semibold text-sm" href="#">
              Como doar?
            </a>
            <a className="text-[#84878a] font-semibold text-sm" href="#">
              Doações
            </a>
            <a className="text-[#84878a] font-semibold text-sm" href="#">
              Faça sua doação
            </a>
            <a className="text-[#84878a] font-semibold text-sm" href="#">
              Sobre
            </a>
          </ul>
        </div>
        <div className="w-full mt-14 mb-4 text-center">
          <span className="text-[#84878a] font-semibold text-sm">
            &copy;2022 - oajudasegura{" "}
          </span>
        </div>
      </footer>
    );
}

export default Footer;