import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';


export default function Header() {

    const [data, setData] = useState({ results: [] });
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(
                    'https://api.openaq.org/v1/latest?city=Amsterdam',
                );
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    console.log(data)

    return (
        <Fragment>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                    <ul>
                        {data.results.map(item => 
                          <div > {item.measurements.map(item => 
                            <p> Air Quality: {item.value}</p> 
                          )}</div> 
                        )}
                    </ul>)}
        </Fragment>
    )
}

