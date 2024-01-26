import styled from "styled-components";

function AddIcon({ href, src }) {
  return (
    <Icon href={href ? href : ""}>
      <img src={src} alt="" />
    </Icon>
  );
}
const Icon = styled.a`
  position: fixed;
  bottom: 70px;
  right: 211px;
`;

export default AddIcon;
