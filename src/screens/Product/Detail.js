import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    let { id } = useParams();
    
    console.log({id}, props);

    return (
        <h2>{id}</h2>
    )
}

export default Detail;