import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    h2 {
        padding: 25px 0 0 25px;
        font-size: 1.8em;
    }
    
    div {
        display: flex;
    }
`;

export const Form = styled.form`
    width: 65%;
    display: flex;
    flex-direction: column;
    
    input {
        padding: 10px;
        margin: 10px 0 0 25px;
        border-radius: 10px;
        border: none;
    }
    
    input:last-child {
        background: #751943;
        color: #fff;
        cursor: pointer;
    }
`;