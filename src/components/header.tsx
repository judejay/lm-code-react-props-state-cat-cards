interface HeaderProps {
  catCount: number;
  pets: string;
}

const Header: React.FC<HeaderProps> = ({ catCount, pets }) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title">
      There are currently {catCount} {pets} in this Pets App
    </h2>
  </header>
);

export default Header;
