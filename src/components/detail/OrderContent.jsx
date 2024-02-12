function OrderContent({ txt }) {
    return <StyledContent>{txt}</StyledContent>;
  }
  
  export default OrderContent;
  
  const StyledContent = styled.div`
    font-size: 18px;
  `;