import { useEffect, useState } from 'react';

export default function getData(url, obj){

    const [data, setData] = useState(obj);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((complete) => {
            setData(complete);
        })
    }, []);

    return data;
}