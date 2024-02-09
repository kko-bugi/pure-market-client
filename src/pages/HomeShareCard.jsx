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
  min-height: 39px;
`;

const ItemDescription = styled.div`
  color: #8e8e8e;
  font-size: 10px;
  font-weight: 400;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis; /*말줄임표가안나온다?*/
  min-width: 0;
`;
