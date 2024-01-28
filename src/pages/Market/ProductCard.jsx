import styled from "styled-components";

function ProductCard({ product }) {
  return (
    <CardWrapper href="">
      <ItemImg src={product.img} alt="" />
      <ItemName>{product.name}</ItemName>
      <ItemPrice>
        {product.price.toLocaleString()}
        <PriceUnit>원</PriceUnit>
      </ItemPrice>
    </CardWrapper>
  );
}

export default ProductCard;

const CardWrapper = styled.a`
  max-width: 183px;
`;

const ItemImg = styled.img`
  width: 180px;
  height: 182px;
  border-radius: 15px;
`;

const ItemName = styled.div`
  color: #000;
  font-size: 12px;
  min-height: 39px;
`;
const ItemPrice = styled.div`
  color: #000;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // margin-top: 9px;
`;

const PriceUnit = styled.div`
  color: #000;
  font-size: 10px;
  font-weight: 400;
`;