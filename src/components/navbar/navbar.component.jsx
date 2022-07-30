
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { NavbarContainer, NavLink } from "./navabar.styles"


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="">About</NavLink>
      <NavLink to="">Credits</NavLink>
      <NavLink to="">Pricing</NavLink>
      <NavLink to="">Contact Us</NavLink>

        <Button isLoading={false} buttonType={BUTTON_TYPE_CLASSES.red}>
      <Link style={{textDecoration:"none"}} to='signin'>
          Sign In
      </Link>
      </Button>

    </NavbarContainer>
  );
}

export default Navbar