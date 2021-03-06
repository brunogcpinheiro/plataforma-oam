import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;

  h2 {
    padding: 25px 0 0 25px;
    font-size: 1.8em;
  }
  
  div {
    display: flex;
  }
`;

export const Card = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 50px;
  border-radius: 10px;
  margin: 25px 0 0 25px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(196, 196, 196, 1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(196, 196, 196, 1);
  box-shadow: 0px 2px 5px 0px rgba(196, 196, 196, 1);

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid #751943;
    background-size: cover;
  }

  h4 {
    margin-bottom: 10px;
  }

  small {
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
    border: none;
    padding: 10px 20px;
    background: #751943;
    color: #fff;
    border-radius: 20px;
    font-size: 0.9em;
  }
`;
