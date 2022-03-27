import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

interface Props {
  darkMode: boolean;
  handleThemeChange: (arg0: boolean) => void;
}

const Header = ({ darkMode, handleThemeChange }: Props) => {
  return (
    <Navbar className="navbar" fixed="top" bg="primary" variant="dark">
      <Navbar.Brand className="navbarBrand" href="#home">
        Ecommerce Store
      </Navbar.Brand>

      <BootstrapSwitchButton
        checked={darkMode}
        onlabel="Light"
        offlabel="Dark"
        onstyle="secondary"
        size="sm"
        onChange={(checked: boolean) => {
          handleThemeChange(checked);
        }}
      />

      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
