
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { Auth, NavbarContainer, NavLink } from "./navabar.styles"


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="">About</NavLink>
      <NavLink to="">Credits</NavLink>
      <NavLink to="">Pricing</NavLink>
      <NavLink to="">Contact Us</NavLink>

      <Link to='signin'>
        <Button buttonType={BUTTON_TYPE_CLASSES.red}>
          ubh
      </Button>
      </Link>

    </NavbarContainer>
  );
}

export default Navbar