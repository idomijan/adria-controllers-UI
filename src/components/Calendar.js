import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function Calendar() {

    const [Error, setIsError] = useState(false);
  const [Loading, setIsLoading] = useState(false);
  const [data, setData] = useState({response:[]});


  useEffect(() => {
    const fetchData = async () =>{
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(
          `https://calendarific.com/api/v2/holidays?api_key=${process.env.REACT_APP_API_KEY}&country=HR&year=2019`
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
        <div>
            {data.response.map(item => 
                          <div > {item.holidays.map(item => 
                            <p> Holidays: {item.name}</p> 
                          )}</div> 
                          )}
        </div>
    )
}
