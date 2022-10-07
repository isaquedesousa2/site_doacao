const Menu = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-6">
      <a href="/" className="font-semibold text-2xl">O Ajuda Segura</a>
      <nav className="font-semibold flex gap-12">
        <a href="#">Início</a>
        <a href="#">Como doar?</a>
        <a href="#">Doações</a>
        <a href="#">Faça sua doação</a>
        <a href="#">Sobre</a>
      </nav>
      <div className="flex gap-12">
        <a href="/entrar">Entrar</a>
        <a href="/registrar">Criar conta</a>
      </div>
    </header>
  );
};

export default Menu;
