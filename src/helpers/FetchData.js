
import axios from 'axios';
import React, {useState, useEffect} from 'react'


export default function useDataApi (initialUrl, initialData){
    const [data, setData] = useState({ controllers: [] });
    const [url, setUrl] = useState(initialUrl);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(
                    url
                );
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};
