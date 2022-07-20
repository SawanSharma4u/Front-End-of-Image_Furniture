import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter :</FilterText>
          <Select>
            <Option disabled selected>
              Folding
            </Option>
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Material
            </Option>
            <Option>Solid Wood</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Product Type :
            </Option>
            <Option>Beds</Option>
            <Option>Sofa</Option>
            <Option>Dining Tables</Option>
            <Option>Chairs</Option>
            <Option>Tables</Option>
            <Option>Others</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price: Low to High</Option>
            <Option>Price: High to Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
