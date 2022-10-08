import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import Footer from "../components/footer";
import Menu from "../components/menu";

const Register = () => {
  return (
    <>
      <Menu />
      <div className="flex flex-1 flex-col gap-32 items-center max-w-5xl m-auto mt-20 p-5">
        <h1 className="font-bold text-4xl">Crie sua conta</h1>

        <div className="flex justify-between items-center gap-10 w-full flex-col">
          <div className="w-full max-w-md">
            <form className="flex flex-col gap-4 w-full">
              <input
                className="bg-input h-16 px-4 rounded-[4px] focus:border"
                type="text"
                placeholder="Digite seu email"
              />
              <input
                className="bg-input h-16 px-4 rounded-[4px] focus:border"
                type="password"
                placeholder="Digite sua senha"
              />
              <input
                className="bg-input h-16 px-4 rounded-[4px] focus:border"
                type="password"
                placeholder="Confirme sua senha"
              />
              <button
                type="button"
                className="bg-secondary text-black h-16 rounded font-bold"
              >
                Entrar com a conta
              </button>
            </form>
          </div>

          <span className="w-[3px] h-9 rotate-[35deg] z-0 bg-white rounded">
            |
          </span>

          <div className="flex flex-col w-full gap-4 max-w-md">
            <button className="border border-secondary w-full flex justify-start h-16 items-center px-3 rounded gap-4 sm:justify-center hover:bg-secondary transition-colors">
              <FaGoogle className="bg-transparent" size={27} /> <span className="bg-transparent">Cadastrar com google</span>
            </button>
          </div>
        </div>
        <Link href="/entrar" className="underline">
          Já possui uma conta?
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Register;
