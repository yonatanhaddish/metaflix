import React, { useEffect } from "react";
// import './navbar.css';
// import { FaBloggerB } from "react-icons/fa";
// FaBloggerB

import { Nav } from "./Navbar.elements";

const Navbar = () => {

    useEffect(() => {
        document.title = "MetaFlix"
    });

  return (
    <>
      <Nav>
        {/* <NavbarContainer>
            <NavLogo>MetaFlix</NavLogo>
            <NavMenu>
                <NavItem>
                    <NavLinks to="/">Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/favourite">Favourite</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer> */}
      </Nav>
    </>
  );
}

export default Navbar;

{
  /* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Favourite</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */
}
