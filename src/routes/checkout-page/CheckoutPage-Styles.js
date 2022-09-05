import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
`;

export const Total = styled.span`
  margin-top: 30px;
  font-size: 25px;

`;

export const ButtonContainer = styled.div`
  margin: 20px;
  line-height: 60px;
`

export const ShopNowContainer = styled.div`
  span {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 35px;
  }

  margin-top: 30px;
`;
