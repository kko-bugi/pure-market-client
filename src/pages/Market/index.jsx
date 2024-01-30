import styled from "styled-components";
import Template from "../../components/Template";
import MarketBanner from "./MarketBanner";
import data from "../../data/marketList.json";
import ProductCard from "./ProductCard";
import Icon from "../../assets/AddIcon.svg";
import AddIcon from "../../components/AddIcon";

function Market() {
  return (
    <Template banner={<MarketBanner />}>
      <ItemWrapper>
        {data.items.map((el) => (
          <ProductCard key={el.product} product={el} />
        ))}
      </ItemWrapper>
      <AddIcon src={Icon} href="/market/write" />
    </Template>
  );
}

export default Market;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
`;
