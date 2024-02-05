import styled from "styled-components";
import Template from "../../components/Template";
import ShareBanner from "./ShareBanner";
import data from "../../data/shareList.json";
import ProductCard from "./ProductCard";
import Icon from "../../assets/ShareAddIcon.svg";
import AddIcon from "../../components/AddIcon";

const Share = () => {
  return (
    <Template banner={<ShareBanner />}>
      <ItemWrapper>
        {data.items.map((el) => (
          <ProductCard key={el.product} product={el} />
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
