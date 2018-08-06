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