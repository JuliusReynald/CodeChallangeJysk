import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 20%;
    margin: 1rem;
    background-color: #f3f3f4;
    border: 2px solid transparent;
    border-radius: 8px;

`;

const CardHeader = styled.h3`

`;

const DetailsButton = styled.button`
    align-items: center;
    appearance: button;
    background-color: #0276FF;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
    box-sizing: border-box;
    line-height: 1.15;
    margin: 0;
    padding: 10px 21px;
    text-align: center;
    text-transform: none;
    transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;

    &:active {
        background-color: #006AE8;
    }

    &:hover {
        background-color: #1C84FF;
    }
`;

interface IFurniture {
    id: number;
    name: string;
    price: string;
    currency: string;
    image: string;
    largeImage: string;
    description: string;
    category: string;
    offer: boolean;
}

interface IProps {
    furniture: IFurniture;
    buttonClick: () => void;
    key: number;
}

const FurnitureCard: React.FC<IProps> = (props) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <Card>
            <CardHeader>{props.furniture.name}</CardHeader>
            <img className="furniture-image" src={props.furniture.image} alt="furniture-image"></img>
            <span className="furniture-info">
                {
                    props.furniture.offer===true ?
                        <h3>OFFER {props.furniture.price} {props.furniture.currency}!!!</h3> :
                        <p>{props.furniture.price} {props.furniture.currency}</p>
                }
                <p>{props.furniture.offer}</p>
                <DetailsButton onClick={(event) => props.buttonClick()}>Details</DetailsButton>
            </span>

        </Card>
    );
}

export default FurnitureCard;