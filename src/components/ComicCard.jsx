import { NavLink } from 'react-router-dom';

export default function TopNav() {
  return (
    <header className="topbar">
      <div className="brand-wrap">
        <div className="brand-mark">HQ</div>
        <div>
          <p className="eyebrow">Biblioteca</p>
          <h1>Minha Biblioteca HQ</h1>
        </div>
      </div>

      <nav className="main-nav" aria-label="Navegação principal">
        <NavLink to="/" end>
          Início
        </NavLink>
        <NavLink to="/library">Biblioteca</NavLink>
        <NavLink to="/user">Usuário</NavLink>
      </nav>
    </header>
  );
}
