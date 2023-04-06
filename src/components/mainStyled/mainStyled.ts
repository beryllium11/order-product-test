import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { ReactComponent as remove } from "./../../assets/remove.svg";

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
  & p {
    margin: 0;
  }
`;

export const HeaderWrapper = styled.div`
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

export const ProductWrapper = styled(Container)`
  background: #fff;
  position: relative;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  & p {
    font-size: 13px;
    margin: 5px 0;
  }

  & span {
    font-size: 13px;
    color: #888;
  }
`;

export const ThumbnailImg = styled.img`
  display: inline-block;
  width: 50px;
  height: auto;
`;

export const ThumbnailWrapper = styled(Col)`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const RemoveIcon = styled(remove)`
  width: 20px;
  height: auto;
  padding: 0;
  cursor: pointer;
  transition: fill, 0.3s;
  fill: #888;
  &:hover {
    transition: fill, 0.3s;
    fill: #fa7494;
  }
`;

export const RemoveIconWrapper = styled(Col)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;
