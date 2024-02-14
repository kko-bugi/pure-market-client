import axios from "axios";
import styled from "styled-components";
import Template from "../../components/Template";
import MarketBanner from "./MarketBanner";
import data from "../../data/marketList.json";
import ProductCard from "./ProductCard";
import Icon from "../../assets/AddIcon.svg";
import AddIcon from "../../components/AddIcon";
import { useEffect, useState } from "react";

function Market() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      try {
        await axios.get("/produce").then((res) => {
          setItemList(res.data.result.produceList);
        });
      } catch (e) {
        console.error(e);
      }
    };
    getProductList();
  }, []);
  return (
    <Template banner={<MarketBanner />}>
      <ContentWrapper>
        <ItemWrapper>
          {itemList.map((el, i) => (
            <ProductCard key={el.produceIdx} product={el} />
          ))}
        </ItemWrapper>
        <AddIcon src={Icon} href="/market/write" />
      </ContentWrapper>
    </Template>
  );
}

export default Market;

const ContentWrapper = styled.div`
  height: 100%;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
`;
