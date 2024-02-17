import axios from "axios";
import styled from "styled-components";
import Template from "../../components/Template";
import ShareBanner from "./ShareBanner";
import data from "../../data/shareList.json";
import ProductCard from "./ProductCard";
import Icon from "../../assets/ShareAddIcon.svg";
import AddIcon from "../../components/AddIcon";
import { useEffect, useState } from "react";

const Share = () => {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const getShareList = async () => {
      try {
        await axios.get("/giveaway").then((res) => {
          setItemList(res.data.result.giveawayList);
        });
      } catch (e) {
        console.error(e);
      }
    };
    getShareList();
  }, []);

  return (
    <Template banner={<ShareBanner />}>
      <ItemWrapper>
        {itemList.map((el) => (
          <ProductCard key={el.giveawayIdx} product={el} />
        ))}
      </ItemWrapper>
      <AddIcon src={Icon} href="/share/write" />
    </Template>
  );
};

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
`;

export default Share;
