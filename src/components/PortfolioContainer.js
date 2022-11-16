import React, { useState } from "react";
import Header from "./Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function PortfolioContainer() {
  //State:currentPage
  //Holding information of the page user currently on
  //Initial state is homepage
  const [currentPage, setCurrentPage] = useState("About");

  //Conditional rendering method for each pages
  const renderPage = () => {
    switch (currentPage) {
      case "About":
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
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}

export default PortfolioContainer;
