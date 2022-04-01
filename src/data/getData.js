import { useEffect, useState } from 'react';

export default function getData(url, obj, ts){

    const [data, setData] = useState(obj);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((complete) => {
            setData(complete);
        })
    }, [ts]);

    //console.log(data);
    
    return data;
}