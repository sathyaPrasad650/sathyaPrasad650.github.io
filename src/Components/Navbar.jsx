import React from "react";
import CustomButton from "./CustomButton";
import navbarStyle from "../Styles/Navbar.module.css";
import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
// import RouterDomLink from "./RouterDomLink";
import resumePDF from "./resumePDF.pdf";
// import download from "./resumePDF.pdf";

const Navbar = () => {
  return (
    <div className={navbarStyle.navbar}>
      <div>
        <div className={navbarStyle.navbarTitleDiv}>
          <p>Sathya's Portfolio</p>
        </div>
        <div className={navbarStyle.navbarButtonDiv}>
          <Link
            href="#x"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {/* <RouterDomLink to="/" name="Home"></RouterDomLink> */}
            <CustomButton title={"Home"} />
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
            {/* <RouterDomLink to="/" name="About"></RouterDomLink> */}
            <CustomButton title={"About"} />
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            {/* <RouterDomLink to="/" name="Skills"></RouterDomLink> */}
            <CustomButton title={"Skills"} />
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-35}
            duration={500}
          >
            {/* <RouterDomLink to="/" name="Projects"></RouterDomLink> */}
            <CustomButton title={"Projects"} />
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            {/* <RouterDomLink to="/" name="Contact"></RouterDomLink> */}
            <CustomButton title={"Contact"} />
          </Link>
          {/* <RouterDomLink to="/resume" name="Resume"></RouterDomLink> */}
          <a href={resumePDF} download="Sathya-Prasad-Resume">
            <CustomButton title={"Resume"} />
          </a>
        </div>
        <div className={navbarStyle.navbarDropDown}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList className={navbarStyle.navbarDropDownMenuList}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {/* <RouterDomLink to="/" name="Home"></RouterDomLink> */}
                <CustomButton title={"Home"} />
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                {/* <RouterDomLink to="/" name="About"></RouterDomLink> */}
                <CustomButton title={"About"} />
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {/* <RouterDomLink to="/" name="Skills"></RouterDomLink> */}
                <CustomButton title={"Skills"} />
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-35}
                duration={500}
              >
                {/* <RouterDomLink to="/" name="Projects"></RouterDomLink> */}
                <CustomButton title={"Projects"} />
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                {/* <RouterDomLink to="/" name="Contact"></RouterDomLink> */}
                <CustomButton title={"Contact"} />
              </Link>
              {/* <RouterDomLink to="/resume" name="Resume"></RouterDomLink> */}
              <a href={resumePDF} download="Sathya-Prasad-Resume">
                <CustomButton title={"Resume"} />
              </a>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
