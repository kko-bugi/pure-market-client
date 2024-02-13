import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <CardWrapper
      onClick={() => {
        navigate(`/market/${product.produceIdx}`, {
          state: product.produceIdx,
        });
      }}
    >
      <ItemImg src={product.produceImage} alt="" />
      <ItemName>{product.title}</ItemName>
      <ItemPrice>
        {product.price.toLocaleString()}
        <PriceUnit>원</PriceUnit>
      </ItemPrice>
    </CardWrapper>
  );
}

export default ProductCard;

const CardWrapper = styled.div`
  max-width: 183px;
  cursor: pointer;
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
  font-weight: 500;
`;
const ItemPrice = styled.div`
  color: #000;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PriceUnit = styled.div`
  color: #000;
  font-size: 10px;
  font-weight: 400;
`;
