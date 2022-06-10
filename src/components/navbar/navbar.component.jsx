import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { NavbarContainer, NavLink } from "./navabar.styles"


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to="">About</NavLink>
      <NavLink to="">Credits</NavLink>
      <NavLink to="">Pricing</NavLink>
      <NavLink to="">Contact Us</NavLink>

      <Button buttonType={BUTTON_TYPE_CLASSES.red}>Log in</Button>
    </NavbarContainer>
  );
}

export default Navbar