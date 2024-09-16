import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseNum = () => {
    const [number, setNumber] = useState(0);
    useEffect(()=>{
        axios.get('/getNumber')
        .then(res=> {
            setNumber(res.data)
        })
    }, [])
    return number;
};

export default UseNum;