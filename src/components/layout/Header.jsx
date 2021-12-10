import { styled } from "solid-styled-components";
import { css } from "solid-styled-components";
import { lighten, darken } from "polished";
import MainLogo from "../../images/Carbide-Logo-IconBlack.svg";

import Seo from "./Seo";

const headerPhoto = css`
  width: 100%;
  height: 20vh;
  postion: absolute;
  top: 0;
  left: 0;
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: block;
  position: relative;
  min-height: 20rem;
  height: 50vh;
  background: linear-gradient(to right, #ddd, #fff 92%, #ddd);
  padding: 0;
  padding-top: 2rem;
  z-index: 3;
`;

const Triangle = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-color: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    to bottom right,
    ${(props) => lighten(0.15, props.theme.colors.primary)},
    ${(props) => darken(0.15, props.theme.colors.primary)}
  );
  border-radius: 8px;
  transform: rotate(45deg);
  // transform-origin:50% 50%;
`;
const BottomLeftTriangle = styled(Triangle)`
  top: 35vh;
  left: -10rem;
  z-index: 15;
  width: 14rem;
  height: 14rem;
  box-shadow: 5px 5px 20px -3px #000000b8;
`;
const TopRightTriangle = styled(Triangle)`
  top: -10rem;
  // left: calc( 80% - 20rem );
  left: calc(100% - 10rem);
`;

const TopLeftWhiteTriangle = styled(Triangle)`
  width: 34rem;
  height: 34rem;
  top: -18rem;
  left: -18rem;
  background-color: white;
  background: white;
  z-index: 10;
  box-shadow: 5px 5px 20px -3px #000000b8;
`;
const HeaderMenu = styled.nav`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  outline: purple;
  margin-right: 0;
  margin-left: auto;
  z-index: 100;
  & ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 2rem;
    margin-bottom: 0;
    max-width: 40%;
    min-width: 10rem;
    margin-left: auto;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: white;
    & a {
      display: inline-block;
      text-decoration: none;
      letter-spacing: 0.5px;
      color: #555;
      transition: border-bottom 0.3s;
      border-bottom: 1px solid transparent;
      margin-left: 2rem;
      flex: 1 1 auto;
      text-align: center;
      padding: 14px 20px;
      border-bottom: 2px solid #bbb;
      transition: background-color 0.3s, color 0.2s, border-bottom 0.2s;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #ffffff58;
      &:hover,
      &:focus,
      &:focus-visible {
        background-color: white;
        color: #333;
        border-bottom: 2px solid #fff;
        & li {
          color: #333;
        }
      }
      & li {
        list-style-type: none;
        margin-bottom: 0;
        color: white;
        transition: color 0.2s;
      }
    }
  }
`;
const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  max-width: 11rem;
  max-height: 15rem;
  text-align: center;
  margin-top: 0.75rem;
  margin-left: 0.75rem;
  outline: purple;
`;
const Header = (props) => {
  return (
    <HeaderContainer>
      <Seo />
      <Logo>
        <MainLogo
          css={css`
            max-width: 12rem;
            margin: 0 auto;
          `}
        />
        <h1
          style={{
            color: "#333",
            fontSize: "1.6rem",
            fontFamily: "BigShoulders",
            lineHeight: "1rem",
            textAlign: "center",
          }}
        >
          Carbide Saw & Tool
        </h1>
      </Logo>
      <TopLeftWhiteTriangle />
      <TopRightTriangle />
      <BottomLeftTriangle />
      <HeaderMenu>
        <ul>
          <Link to="#about">
            <li>About</li>
          </Link>
          <Link to="#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </HeaderMenu>
      <StaticImage
        src="../../images/workshop1.jpg"
        alt="Photograph of a saw shop"
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          maxHeight: "100%",
          minHeight: "100%",
          maxWidth: "90rem",
        }}
        objectFit="cover"
        imgStyle={{ borderTopRightRadius: "10px" }}
      />
    </HeaderContainer>
  );
};

export default Header;
