import styled from "styled-components";

function ButtonIcon({ href, src }) {
  return (
    <Icon href={href ? href : ""}>
      <img src={src} alt="" />
    </Icon>
  );
}
const Icon = styled.a`
  bottom: 100px;
  right: 211px;
  margin-left: 3px;
  margin-top: 5px;
  cursor: pointer;
`;

export default ButtonIcon;
