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
    width: 500px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    padding: 10px;
    margin: 20px 0 0 25px;
    border-radius: 10px;
    border: none;
    border: 1px solid #e5e5e5;
  }

  input:last-child {
    background: #751943;
    color: #fff;
    cursor: pointer;
  }
`;
