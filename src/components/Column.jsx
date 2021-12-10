import { styled } from "solid-styled-components";
import { css } from "solid-styled-components";
import { useTheme } from "./ContextProvider";
// Cut from my Forten framework under className .col
const StyledColumn = styled("div")`
  display: block;
  flex: 1 1 auto;
  margin-left: 0;
  max-width: 100%;
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : null)}
  ${(props) =>
    props.padding &&
    css`
      padding: ${(props) => props.padding}rem;
      @media only screen and (max-width: ${(props) =>
          props.theme.breakpoints.mobile}) {
        padding-right: ${(props) => props.padding * 0.3}rem;
        padding-left: ${(props) => props.padding * 0.3}rem;
      }
    `}

	${(props) =>
    props.smWidth &&
    css`
      @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
        flex: 0 0 ${(props) => props.smWidth}%;
        max-width: ${(props) => props.smWidth}%;
      }
    `}
	${(props) =>
    props.mdWidth &&
    css`
      @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        flex: 0 0 ${(props) => props.mdWidth}%;
        max-width: ${(props) => props.mdWidth}%;
      }
    `}
	${(props) =>
    props.lgWidth &&
    css`
      @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex: 0 0 ${(props) => props.lgWidth}%;
        max-width: ${(props) => props.lgWidth}%;
      }
    `}
`;
// props smWidth through lgWidth represent %'s !

const Column = (props) => {
  return (
    <StyledColumn
      lgWidth={props.lgWidth}
      mdWidth={props.mdWidth}
      smWidth={props.smWidth}
      padding={props.padding}
      style={props.style}
      css={props.css}
      className={props.className}
    >
      {props.children}
    </StyledColumn>
  );
};
export default Column;
