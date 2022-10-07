import Link from "next/link";

const Menu = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-6">
      <Link href="/" className="font-semibold text-2xl">O Ajuda Segura</Link>
      <nav className="font-semibold flex gap-12">
        <Link href="#">Início</Link>
        <Link href="#">Como doar?</Link>
        <Link href="#">Doações</Link>
        <Link href="#">Faça sua doação</Link>
        <Link href="#">Sobre</Link>
      </nav>
      <div className="flex gap-12">
        <Link href="/entrar">Entrar</Link>
        <Link href="/registrar">Criar conta</Link>
      </div>
    </header>
  );
};

export default Menu;
