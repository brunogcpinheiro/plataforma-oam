import styled from "styled-components";

export const Container = styled.aside`
  height: 100vh;
  width: 100px;
  background-color: #751943;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    ul {
      list-style: none;
      
      li {
        padding: 10px 100px;
        margin-top: 15px;
        cursor: pointer;
        a {
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          i {
            font-size: 1.3em;
            color: #fff;
          }
          span {
            color: #fff;
            font-size: 0.8em;
            margin-top: 10px;
          }
        }
        
        &:hover {
          background: #470e28;
        }
      }
      
      li:first-child {
        background: #470e28;
        margin-top: 0;
      }
    }
    
    div {
      text-decoration: none;
      span {
        color: #fff;
        text-decoration: none;
        margin-top: 10px;
        font-size: 0.8em;
      }
    }
    
    a:last-of-type {
      i {
        font-size: 1.5em;
        color: #fff;
      }
    }
  }

  img {
    width: 100px;
    height: 70px;
    background: #751943;
    margin-top: 25px;
  }
`;
