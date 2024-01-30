import styled from "styled-components";

function ContentImg({ src, alt }) {
  return <StyledImg src={src} alt={alt} />;
}

export default ContentImg;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 416px;
  object-fit: cover;
`;
