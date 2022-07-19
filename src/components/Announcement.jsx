import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #ECB390;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 1.5px;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;