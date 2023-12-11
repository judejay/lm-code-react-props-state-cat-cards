interface HeaderProps {
  petCount: number;
  pets: string;
}

const Header: React.FC<HeaderProps> = ({ petCount, pets }) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title">
      There are currently {petCount} {pets} in this Pets App
    </h2>
  </header>
);

export default Header;
