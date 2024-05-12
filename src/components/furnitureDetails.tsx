import React, { useState } from 'react';
import styled from 'styled-components';

const Details = styled.div`
    position: absolute; /* Stay in place */
    z-index: 1; /* Sit on top */
    margin: 0 auto;
    left: 25%;
    top: 25%;
    width: 50%;
    margin: 1rem;
    background-color: #ffffff;
    border: 1px solid black;
    border-radius: 8px;
`;

const DetailsHeader = styled.h3`

`;

const CloseButton = styled.button`
    margin: 1rem 0 ;
`;

interface IProps {
    furniture: {
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
    key:number;
    closeModal: () => void;
}
 
const FurnitureDetails: React.FC<IProps> = (props) => {


    const propsValid = (props: IProps) => Object.values(props).every(prop => prop !== undefined)

    return (
        propsValid(props) ? 
        <Details>
            <DetailsHeader>{props.furniture.name && props.furniture?.name}
            </DetailsHeader>
            <img  src={props.furniture.largeImage} alt="furniture-image"></img>
            <span >
                <p>{props.furniture.description}</p>
                {
                    props.furniture.offer===true ?
                        <h3>OFFER {props.furniture.price} {props.furniture.currency}!!!</h3> :
                        <p>{props.furniture.price} {props.furniture.currency}</p>
                }

            </span>
            <CloseButton onClick={() => props.closeModal()}>Close</CloseButton>
        </Details> :
        null
    );
}
 
export default FurnitureDetails;