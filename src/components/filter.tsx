import React from 'react';
import styled, { keyframes } from 'styled-components';

const Search = styled.input`
    width: 20%;
    height: 40px;
    margin: 1rem 0;
    line-height: 28px;
    padding: 0 0.3rem;
    padding-left: 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    &:hover {
        border-color: #143c8a;
        background-color: #fff;
        box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
        transition: .3s ease;
    }
`;

interface IFilterProps {
    updateSearch: (arg: string) => void
}

const Filter: React.FC<IFilterProps> = (props) => {


    return (
        <div>
            <span>
                <div>
                    <Search onChange={(event) => props.updateSearch(event.target.value)} placeholder='Search' />
                </div>
            </span>
        </div>
    )
}

export default Filter;