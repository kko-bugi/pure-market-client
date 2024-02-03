import styled from "styled-components";
import Template from "../../components/Template";
import ShareBanner from "./ShareBanner";

const Share = () => {
  return (
    <Template banner={<ShareBanner />}>
      <ItemWrapper></ItemWrapper>
    </Template>
  );
};

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 23px;
`;

export default Share;
