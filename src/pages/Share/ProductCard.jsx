import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const getTruncatedText = (text) =>
    text.length > 32 ? `${text.slice(0, 32)} ...` : text;

  return (
    <CardWrapper
      onClick={() => {
        navigate(`/share/${product.giveawayIdx}`, {
          state: product.giveawayIdx,
        });
      }}
    >
      <ItemImg src={product.giveawayImage} alt="" />
      <ItemName>{getTruncatedText(product.title)}</ItemName>
      <ItemDesc>{getTruncatedText(product.content)}</ItemDesc>
    </CardWrapper>
  );
};

export default ProductCard;

const CardWrapper = styled.div`
  max-width: 183px;
  cursor: pointer;
`;

const ItemImg = styled.img`
  width: 181px;
  height: 156px;
  border-radius: 15px;
`;

const ItemName = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 7px;
`;

const ItemDesc = styled.div`
  color: #8e8e8e;
  font-size: 10px;
  line-height: 12.1px;
  font-weight: 400;
`;
