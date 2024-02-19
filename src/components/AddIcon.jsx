import styled from "styled-components";
import { Link } from "react-router-dom";

function AddIcon({ href, src }) {
  return (
    <Icon to={href ? href : ""}>
      <img src={src} alt="" />
    </Icon>
  );
}
const Icon = styled(Link)`
  position: fixed;
  bottom: 70px;
  right: 211px;
`;

export default AddIcon;
