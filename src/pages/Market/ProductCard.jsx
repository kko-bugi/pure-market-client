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
      <ThumbnailWrapper>
        <ItemImg src={product.produceImage} alt="" />
        {product.produceStatus === "판매완료" && (
          <SoldOutLabel>거래완료</SoldOutLabel>
        )}
      </ThumbnailWrapper>

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
const ThumbnailWrapper = styled.div`
  position: relative;
`;

const ItemImg = styled.img`
  width: 180px;
  height: 182px;
  border-radius: 15px;
`;
const SoldOutLabel = styled.div`
  font-size: 24px;
  font-weight: 600;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
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
