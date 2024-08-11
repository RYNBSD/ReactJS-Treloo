import { Navbar } from "../components";
import "./css/Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="container f-center">
        <div className="header__logo">
          <h1>Trelo</h1>
        </div>
        <Navbar />
      </div>
      <div className="header__desc">
        <h1>Discover Your Life, Travel Where You Want</h1>
        <p>
          Would you explore natur paradise in the world, let’s find the best
          destination in world with us.
        </p>
      </div>
    </header>
  );
}
