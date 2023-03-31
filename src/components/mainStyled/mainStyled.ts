import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainSection = styled(Col)`
  padding: 30px 50px;
  background-color: #eff3f5;
  min-height: calc(100vh - 80px);
`;

export const NavBar = styled(Col)`
  padding: 30px 10px 15px;
  box-shadow: 10px 0 15px #e8edee;
  position: relative;
  min-height: calc(100vh - 80px);
  z-index: 5;
  text-align: center;
`;

export const Header = styled.div`
  height: 80px;
  padding: 10px 8.3%;
  box-shadow: 0 10px 15px #e8edee;
  z-index: 10;
`;

const beforeLink = `
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      height: 2px;
      background-color: #5b8e28;
      transition: 0.3s;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #555;
  margin-bottom: 10px;
  font-weight: 500;
  display: inline-block;
  position: relative;

  &:before {
    ${beforeLink};
    width: 0;
  }

  &:hover {
    color: #555;

    &:before {
      ${beforeLink};
      width: 100%;
    }
  }
`;
