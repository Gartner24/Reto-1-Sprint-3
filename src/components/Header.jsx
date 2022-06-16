import { Button } from "@mui/material";
import React from "react";
import { Image } from "react-bootstrap";
import { StyledH1, StyledH2, StyledHeaderP } from "../styles/layout/GlobalStyles";

const Header = () => {
  return (
    <section
      className="d-flex justify-content-center  align-items-center"
      style={{ minHeight: "100vh", maxWidth: "100vw", width: "100%" }}
    >
      <div className="d-flex justify-content-around">
        <div>
          <Image src="https://res.cloudinary.com/gartners/image/upload/v1655326153/Reto-1-Sprint-3/gold-ring-with-shiny-diamond-stone-it_gtbcpm.png" />
          <StyledH1>Jewelery tells a great story</StyledH1>
        </div>
        <div>
          <StyledH2>Our Story</StyledH2>
          <StyledHeaderP>
            modern jewelry is made of gold, silver, or platinum, often with
            precious or semiprecious stones, it evolved from shells, animal
            teeth, and other items used as body decoration in prehistoric times.
          </StyledHeaderP>
          <Image src="https://res.cloudinary.com/gartners/image/upload/v1655326156/Reto-1-Sprint-3/Rectangle_5_o1djvu.png" />
        </div>
      </div>
    </section>
  );
};

export default Header;
