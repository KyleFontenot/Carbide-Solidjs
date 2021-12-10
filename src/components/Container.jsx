import { styled } from "solid-styled-components";
import { css } from "solid-styled-components";

// Cut from my Forten framework under className container
const StyledContainer = styled("div")`
  margin: 0 auto;
  width: 100%;
  padding: 1rem 1.5rem;
  ${(props) =>
    props.padding &&
    css`
      padding: ${(props) => props.padding}rem;
    `}
  position: relative;
  display: inline-block;
`;

const Container = (props) => {
  return (
    <StyledContainer padding={props.padding}>{props.children}</StyledContainer>
  );
};

export default Container;
