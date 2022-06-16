import { Box, Button, Input } from "@mui/material";
import React from "react";
import { Image } from "react-bootstrap";
import {
  StyledBoxes,
  StyledH2,
  StyledSellP,
  StyledTitleH2,
} from "../styles/layout/GlobalStyles";

const MainContent = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center my-5">
        <Image
          src="https://res.cloudinary.com/gartners/image/upload/v1655353781/Reto-1-Sprint-3/image_25_wlqim4.png"
          alt="logo"
        />
        <div className="d-flex flex-column">
          <StyledTitleH2>Gold Woven Chain Bracelet in Black</StyledTitleH2>
          <StyledSellP>
            This bracelet features a 5MM Stainless Steel chain with Nylon cord
            braiding. Each bracelet includes a polishing pad and a cotton
            jewelry pouch. Proudly made by hand in Atlanta, GA.
          </StyledSellP>
          <p>Size</p>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <div>
            <Button variant="contained">ADD TO CART</Button>
            <span>549.29</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-5">
        <div className="d-flex flex-column">
          <StyledTitleH2>Gold Black Coral Ring</StyledTitleH2>
          <StyledSellP>
            A 14K yellow gold ring Two Hawaiian Black Coral inlaid strips,
            14.5x2mm Ring sizes 4-8 Contact us for additional ring sizes To our
            valued International Customers, an extra CITES charge will be added
            to your order.
          </StyledSellP>
          <p>Size</p>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <div>
            <Button variant="contained">ADD TO CART</Button>
            <span>549.29</span>
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/gartners/image/upload/v1655353781/Reto-1-Sprint-3/image_26_x3rga5.png"
          alt="logo"
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center my-5">
        <Image src="https://res.cloudinary.com/gartners/image/upload/v1655353781/Reto-1-Sprint-3/image-5_hexe7j.png" />
        <div className="d-flex flex-column justify-content-center">
          <StyledTitleH2>J-Shop's best Collections</StyledTitleH2>
          <p>Comfort</p>
          <StyledSellP>
            We will reach out to you for the current cost of this permit. Please
            contact us for more information. Maui Divers Jewelry offers extended
            sizing which may be subject to an additional cost. Any subsequent
            resizes after purchase will incur an additional charge. Please note
            some styles cannot be resized due to their design.
          </StyledSellP>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-5">
        <div className="d-flex flex-column justify-content-center">
          <p>100% Gold</p>
          <StyledSellP>
            Gold chains were a sign of service to the supreme beings of a
            particular religion in the past. Nowadays, they are symbols of
            wealth and class. Rap artists were most likely the ones who brought
            the custom of wearing gold chains to modern men's everyday life.
            There are a few reasons why do men wear gold chains.
          </StyledSellP>
        </div>
        <Image src="https://res.cloudinary.com/gartners/image/upload/v1655353781/Reto-1-Sprint-3/image-4_hrshxa.png" />
      </div>
      <div className="d-flex flex-wrap justify-content-center my-5">
        <Image src="https://res.cloudinary.com/gartners/image/upload/v1655353782/Reto-1-Sprint-3/image-3_jgubzw.png" />
        <div className="d-flex flex-column justify-content-center">
          <p>Trendy</p>
          <StyledSellP>
            A collection of hammered gold discs swing from the top and bottom of
            a shimmery gold hoop, creating a noisy fringe. Earring attaches to a
            standard fishhook fitting. Sold as one pair of earrings.Other hoop
            designs do not complete the circle, but penetrate through the ear in
            a post, using the same attachment techniques that apply to stud
            earrings.
          </StyledSellP>
          <Button variant="contained">GO TO SHOP</Button>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-center">Trusted by leading companies</h3>
        <div className="d-flex justify-content-center">
          <Image
            className="mx-3"
            src="https://res.cloudinary.com/gartners/image/upload/v1655356450/Reto-1-Sprint-3/logo-4_r00oqh.svg"
          />
          <Image
            className="mx-3"
            src="https://res.cloudinary.com/gartners/image/upload/v1655356450/Reto-1-Sprint-3/logo-1_q52oke.svg"
          />
          <Image
            className="mx-3"
            src="https://res.cloudinary.com/gartners/image/upload/v1655356450/Reto-1-Sprint-3/logo-2_eiixs0.svg"
          />
          <Image
            className="mx-3"
            src="https://res.cloudinary.com/gartners/image/upload/v1655356450/Reto-1-Sprint-3/logo-3_bwffvc.svg"
          />
          <Image
            className="mx-3"
            src="https://res.cloudinary.com/gartners/image/upload/v1655356450/Reto-1-Sprint-3/logo-4_r00oqh.svg"
          />
        </div>
      </div>
      <div className="d-flex">
        <Image src="https://res.cloudinary.com/gartners/image/upload/v1655353781/Reto-1-Sprint-3/image_13_m3845i.png" />
        <div className="d-flex flex-column justify-content-center">
          <StyledH2>Testimonials</StyledH2>
          <h3>Maria Sarapavoo</h3>
          <small>Senior Designer</small>
          <p>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using letters Ipsum is that
            it has a more-or-less normal distribution of letter.
          </p>
        </div>
      </div>
      <div>
        <StyledTitleH2>Join J-Shop's Family</StyledTitleH2>
        <Input type="text" placeholder="Enter your email" />
        <Button variant="contained">JOIN FAMILY</Button>
      </div>
      <div>
        <StyledTitleH2>Our Blogs</StyledTitleH2>
        <div className="d-flex justify-content-center">
          <div className="m-5">
            <Image src="https://res.cloudinary.com/gartners/image/upload/v1655353782/Reto-1-Sprint-3/Rectangle_349_wjfutk.png" />
            <StyledH2>For Beauty</StyledH2>
            <StyledBoxes>
              Offending belonging promotion provision an be oh consulted
              ourselves it.
            </StyledBoxes>
          </div>
          <div className="m-5">
            <Image src="https://res.cloudinary.com/gartners/image/upload/v1655353782/Reto-1-Sprint-3/Rectangle_348_fkqbvt.png" />
            <StyledH2>Product Quality</StyledH2>
            <StyledBoxes>
              Blessing welcomed ladyship she met humoured sir breeding her. Six
              curiosity day necessary.
            </StyledBoxes>
          </div>
          <div className="m-5">
            <Image src="https://res.cloudinary.com/gartners/image/upload/v1655353781/Reto-1-Sprint-3/Rectangle_347_mtfgyl.png" />
            <StyledH2>For Comfort</StyledH2>
            <StyledBoxes>
              Warmly little before cousin sussex entire men set. Blessing it
              ladyship on sensible judgment.
            </StyledBoxes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
