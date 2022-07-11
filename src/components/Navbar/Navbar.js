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
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="nav-bar-logo">
            {/* <FaBloggerB style={{color: 'red', fontSize: '25px'}}/> */}
            <h1 className="comp-name">BetFlix</h1>
          </div>
          <div className="nav-menu">
            <div className="nav-item">Home</div>
            <div className="nav-item">Favourite</div>
          </div>
        </div>
      </div>
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
