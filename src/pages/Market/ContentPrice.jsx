import styled from "styled-components";

function ContentPrice({ price }) {
  return (
    <PriceWrapper>
      <Price>{price.toLocaleString()}</Price>원
    </PriceWrapper>
  );
}

export default ContentPrice;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 30px;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-right: 5px;
`;
