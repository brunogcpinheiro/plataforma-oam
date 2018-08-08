import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: #e5e5e5;
`;

export const LoginForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {
        width: 250px;
        height: 200px;
    }
    
    input {
        padding: 10px 15px;
        margin: 5px;
        border-radius: 5px;
        width: 300px;
        border: 1px solid #e7e7e7;
    }
    
    input:last-child {
        background: #751943;
        color: #fff;
        cursor: pointer;
    }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: #ce2029;
  font-size: 16px;
  margin-top: 15px;
`;