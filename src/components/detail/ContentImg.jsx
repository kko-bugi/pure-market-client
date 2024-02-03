import styled from "styled-components";

function ContentImg({ src, alt, isSoldOut }) {
  return <StyledImg src={src} alt={alt} isSoldOut={isSoldOut}></StyledImg>;
}

export default ContentImg;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 416px;
  object-fit: cover;
  ${(props) => props.isSoldOut && `filter: grayscale(40%); opacity:0.5`}
`;
