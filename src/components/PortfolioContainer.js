import React, { useState } from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function PortfolioContainer() {
  //State:currentPage
  //Holding information of the page user currently on
  //Initial state is homepage
  const [currentPage, setCurrentPage] = useState("About Me");

  //Conditional rendering method for each pages
  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  //currentPage state setter
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header handlePageChange={handlePageChange} />

      <Row className="justify-content-center  user-select-none bg-dark">
        {renderPage()}
      </Row>
      <Footer />
    </>
  );
}

export default PortfolioContainer;
