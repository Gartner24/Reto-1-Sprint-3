import { Navbar } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";

// CSS rules to specifie families

// font-family: 'ABeeZee', sans-serif;
// font-family: 'Noto Serif JP', serif;
const main_background = "#F8F3E9";
const main_font = "'Noto Serif JP', serif";
const secondary_font = "'ABeeZee', sans-serif";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${main_background};
        margin: 0;
        padding: 0;
        font-family: ${main_font};
    }
`;

export const NavBarStyled = styled(Navbar)`
  font-family: ${secondary_font};
  background-color: transparent;
  font-weight: 400;
`;

export const StyledH1 = styled.h1`
  max-width: 645px;
  font-style: normal;
  font-weight: 600;
  font-size: 90px;
  line-height: 130%;
  color: #2c2a2b;
`;

export const StyledH2 = styled.h2`
  font-family: ${main_font};
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 49px;
  color: #2c2a2b;
`;

export const StyledHeaderP = styled.p`
  width: 354px;
  height: 84px;
  left: 800px;
  top: 226px;

  font-family: ${secondary_font};
  font-size: 14px;
  color: #3d3d3f;
`;

export const StyledSellP = styled.p`
  max-width: 441px;
  width: 100%;
  font-size: 14px;
  line-height: 150%;
  color: #3d3d3f;
`;

export const StyledTitleH2 = styled.h2`
  width: 491px;
  font-family: "Noto Serif JP";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 69px;
  letter-spacing: 0.05em;
  color: #2c2a2b;
`;

export const StyledBoxes = styled.div`
  width: 300px;
`
