import * as React from 'react';
import { useState, useEffect } from 'react';
import furnitureJson from '../data/furniture.json'
import { render } from '@testing-library/react';
import styled from 'styled-components';
import FurnitureCard from './furnitureCard';
import Filter from './filter';
import { setConstantValue } from 'typescript';
import FurnitureDetails from './furnitureDetails';

export interface FilterObject {
    searchTerm: string,
    category: "" | "Madrasser" | "Elevationssenge",
    sort: "asc" | "desc"
}

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 80vw;
`;

const FurnitureList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;


const FurnitureWrapper = () => {
    const [data, setData] = useState<any[]>([]);
    const [filteredData, setFilteredData] = useState<any[]>([]) // use a more specific type here that represents your data

    const [filters, setFilters] = useState<FilterObject>({
        searchTerm: "",
        category: "",
        sort: "asc"
    })
    const [openModal, setOpenModal] = useState(false);
    const [detailsID, setDetailsID] = useState("");


    const sortAndFilterData = (filterObj: FilterObject) => {
        return data.filter(item => {
            return (
                // filter by search term - check if item.name includes the current search term
                item.name && item.name.toLowerCase().indexOf(filterObj.searchTerm.toLowerCase()) > -1) &&
                // filter by category - check if item.category is part of the options inside the filters.category array
                (filterObj.category.length > 0 ? filterObj.category.includes(item.category) : true)
            // expand with more checks to fit your data
        })
            .sort((a: any, b: any) => {
                // first, get the name parameter
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (filterObj.sort === "desc") {
                    return nameB.localeCompare(nameA); // returns 1 if nameB > nameA and returns -1 if nameB < nameA
                } else if (filterObj.sort === "asc") {
                    return nameA.localeCompare(nameB); // returns 1 if nameA > nameB and returns -1 if nameA < nameB
                }
                return 0;
            })
    }

    useEffect(() => {
        const data = furnitureJson;
        setData(data);
    }, [])

    useEffect(() => {
        const data = sortAndFilterData(filters); // call the `sortAndFilterData`function and set its returned value to `filteredData`
        setFilteredData(data);
    }, [filters, data])


    const handleInput = (value: string) => {
        setFilters({ ...filters, searchTerm: value,})
        setOpenModal(false);
    }

    const getFurnitureDetails = (id: string) => {
        if (id && data) {
            return data.find(i => i.id === Number(id))
        }
        return 
    }

    const handleButtonClick = (id: string) => {
        setOpenModal(true);
        setDetailsID(id);
    }

    const handleCloseModal = () => {
        setDetailsID("");
        setOpenModal(false);
    }

    return (
        <>
            {openModal ? 
            <FurnitureDetails 
                key={Number(detailsID)} 
                furniture={getFurnitureDetails(detailsID)} 
                closeModal={() => handleCloseModal()}
            /> 
            :null}
            <Wrapper>
                {data ?
                <>
                <div>
                        <Filter updateSearch={handleInput}/>
                    </div>
                    <FurnitureList>
                        {filteredData.map(furniture => {
                            return <FurnitureCard 
                                key={furniture.id} 
                                furniture={furniture} 
                                buttonClick={() => handleButtonClick(furniture.id)} 
                            />
                        })}
                    </FurnitureList> 
                </>
                    
                
                : null }
            </Wrapper>
        </>

    )
}

export default FurnitureWrapper;