import styled from "styled-components";

export const Container = styled.aside`
  height: 100vh;
  width: 150px;
  background-color: #751943;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > div {
    padding: 25px;
  }

  img {
    width: 150px;
    height: 100px;
    background: #751943;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0;
  margin: 0;

  li {
    list-style: none;

    a {
      color: #fff;
      margin-top: 30px;
    }
  }

  li:first-child {
    background: #4c112c;
  }
`;

export const Exit = styled.div`
  background: #4c112c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  color: #fff;
`;
