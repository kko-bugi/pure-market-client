import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function HomeShareCard({ product }) {
  const navigate = useNavigate();
  return (

    <CardWrapper
    onClick={() => {
      navigate(`/share/${product.name}`, { state: product });
    }}
  >
    <ItemImg src={product.img} alt="" />
    <ItemName>{product.name}</ItemName>
    <ItemDescription>
        {product.description.toLocaleString()}
    </ItemDescription>
  </CardWrapper>
    
  );
}


export default HomeShareCard;

const CardWrapper = styled.a`
  max-width: 180px;
  display: inline-block;
  margin-bottom: 40px;
  margin-left: 5px;
  margin-right: 5px;
  vertical-align: top;
  cursor: pointer;
`;

const ItemImg = styled.img`
  width: 180px;
  height: 155px;
  border-radius: 15px;
`;

const ItemName = styled.div`
  color: #000;
  font-size: 12px;
  font-weight: 500;
  min-height: 30px;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ItemDescription = styled.div`
  color: #8e8e8e;
  font-size: 10px;
  font-weight: 400;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;