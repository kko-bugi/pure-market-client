import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <CardWrapper
      onClick={() => {
        navigate(`/share/${product.giveawayIdx}`, {
          state: product.giveawayIdx,
        });
      }}
    >
      <ThumbnailWrapper>
        <ItemImg src={product.giveawayImage} alt="" />
        {product.giveawayStatus === "나눔완료" && (
          <SoldOutLabel>나눔완료</SoldOutLabel>
        )}
      </ThumbnailWrapper>

      <ItemName>{product.title}</ItemName>
      <ItemDesc>{product.content}</ItemDesc>
    </CardWrapper>
  );
};

export default ProductCard;

const CardWrapper = styled.div`
  max-width: 183px;
  cursor: pointer;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
`;

const ItemImg = styled.img`
  width: 181px;
  height: 156px;
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
  font-weight: 500;
  margin-bottom: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemDesc = styled.div`
  color: #8e8e8e;
  font-size: 10px;
  line-height: 12.1px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
