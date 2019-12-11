import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    let { id } = useParams();

    return (
        <h2>{id}</h2>
    )
}

export default Detail;