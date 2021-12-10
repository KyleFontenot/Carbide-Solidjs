import { styled } from "solid-styled-components";
import { css } from "solid-styled-components";

// Cut from my Forten framework under className .row
const StyledRow = styled("div")`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${(props) => props.justify};
    `}
  ${(props) =>
    props.align &&
    css`
      align-items: ${(props) => props.align};
    `}

	@media(min-width:768px) {
    flex-direction: row;
  }

  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${(props) => props.direction};
    `}
`;

const Row = (props) => {
  return (
    <StyledRow
      {...props}
      justify={props.justify}
      align={props.align}
      direction={props.direction}
      style={props.style}
    >
      {props.children}
    </StyledRow>
  );
};

export default Row;
