import styled from 'styled-components';

// User Quantity
export const QuantityContainer = styled.div`
    width: 50%;
    margin: 0 0 32px;
`;

export const QuantityInterface = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d3d2d2;
    border-radius: 2px;
    padding: 3px 8px;
    label {
        color: #333;
        font-size: 14px;
        font-weight: normal;  
    }
`;




export const QuantityInteger = styled.span`
    color: #333;
    font-size: 35.68 px;
    font-weight: bold;
`;

export const QuantityButtons = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        position: relative;
        background-color: #ccc;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 0;
        svg {
            width: 100%;
            position: absolute;
            z-index: 1000;
            height: 100%;
            top: 0;
            left: 0;
            fill: white; 
        }
    }
`;

// User Purchase Path
export const PurchasePathContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;

export const PurchasePathButton = styled.button`
    width: 50%;
    color: #fff;
    display: block;
    flex-grow: 1;
    border: 1px solid #000;
    border-radius: 2px;
    padding: 10px;
    font-size: 18px;
    font-weight: lighter;
    text-transform: uppercase;
    border: ${props => props.secondary ? '1px solid #cc0000' : '1px solid #000'};
    background: ${props => props.secondary ? 'linear-gradient(180deg, rgba(226,110,110,1) 5%, rgba(204,0,0,1) 100%)' : 'linear-gradient(180deg, rgba(100,100,100,1) 5%, rgba(0,0,0,1) 100%)'};
    margin-left: ${props => props.secondary ? '10px' : '0'};
`;

// User Options
export const OptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`;

export const OptionButton = styled.button`
    flex-grow: 1;
    border: none;
    border-radius: 3px;
    background-color: #f3f3f3;
    color: #333333;
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    font-weight: normal;
    padding: 5px;
    text-align: center;
    margin-left: ${props => props.spacing ? '8px' : '0'};
`;