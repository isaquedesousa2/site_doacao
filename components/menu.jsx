import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import classNames from "classnames";

// IoClose;
const Menu = () => {
  const [menu, setMenu] = useState(false);

  const MenuDesktop = () => {
    return (
      <div className="hidden lg:block">
        <header className="container mx-auto flex justify-between items-center py-6">
          <Link href="/">
            <h1 className="font-semibold text-2xl cursor-pointer">
              O Ajuda Segura
            </h1>
          </Link>
          <nav className="font-semibold flex gap-12">
            <Link href="/doacoes" className="hover:text-secondary">
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
          <div className="flex gap-12 items-center">
            <Link href="/entrar">Entrar</Link>
            <Link href="/registrar">
              <span className="bg-secondary text-black px-5 py-2 rounded font-medium cursor-pointer">
                Criar conta
              </span>
            </Link>
          </div>
        </header>
      </div>
    );
  };

  const MenuMobile = () => {
    return (
      <div
        className={classNames("pt-24 lg:hidden", {
          "hidden lg:block": !menu,
        })}
      >
        <header className="w-full container mx-auto flex flex-col py-6 text-center">
          <Link href="/">
            <h1 className="font-semibold text-2xl cursor-pointer">
              O Ajuda Segura
            </h1>
          </Link>
          <nav className="font-semibold flex flex-col gap-12 mt-10">
            {/* <Link href="#">Início</Link>
            <Link href="#">Como doar?</Link> */}
            <Link href="#">Doações</Link>
            <Link href="#">Faça sua doação</Link>
            <Link href="#">Sobre</Link>
          </nav>
          <div className="flex flex-col gap-12 items-center mt-10">
            <Link href="/entrar">Entrar</Link>
            <Link href="/registrar">
              <span className="bg-secondary text-black px-5 py-2 rounded font-medium cursor-pointer">
                Criar conta
              </span>
            </Link>
          </div>
        </header>
      </div>
    );
  };

  const MenuButton = () => {
    return (
      <div
        onClick={() => {
          console.log(menu);
          if (menu) setMenu(false);
          else setMenu(true);
        }}
        className="p-5 absolute right-0 top-0 text-3xl cursor-pointer lg:hidden z-50"
      >
        {menu ? <MdClose /> : <GiHamburgerMenu />}
      </div>
    );
  };

  return (
    <>
      <MenuDesktop />
      <MenuButton />
      <MenuMobile />
    </>
  );
};

export default Menu;
