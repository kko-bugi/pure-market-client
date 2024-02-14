import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function HomeProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <CardWrapper
      onClick={() => {
        navigate(`/market/${product.name}`, { state: product });
      }}
    >
      <ItemImg src={product.img} alt="" />
      <ItemName>{product.name}</ItemName>
      {product.price && ( 
        <ItemPrice>
          {product.price.toLocaleString()}
          <PriceUnit>원</PriceUnit>
        </ItemPrice>
      )}
    </CardWrapper>
  );
}

export default HomeProductCard;

const CardWrapper = styled.div`
  max-width: 183px;
  cursor: pointer;
  margin-bottom: 40px;
  margin-left: 3px;
  margin-right: 3px;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
