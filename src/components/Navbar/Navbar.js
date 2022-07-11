import React, { useEffect } from "react";
import './navbar.css';


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
            <h1 className="comp-name">MetaFlix</h1>
          </div>
          <div className="nav-menu">
            <div className="nav-item">
              <a href="/">Home</a>
            </div>
            <div className="nav-item">
              <a href="/liked">Favourite</a>
            </div>
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
