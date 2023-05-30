import { useCallback, useState } from "react";

const useHttp = (handleData) => {

    const [isLoading, setIsLoading] = useState(false);

    const getData = useCallback(async () => {
        setIsLoading(true);

        // it is just emaulate a delay so We can check loading state
        // setTimeout(async () => {
          
        // }, 5000);
        try {
          const url = 'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json';
          let response = await fetch(url);
          response = await response.json();
    
          // converting obj to array
          response = Object.keys(response).map(key => response[key]);
          handleData(response);
        } catch(error){
          alert(error.message,'this is from catch block');
        }
        setIsLoading(false);
    }, [handleData]);
    
    return {getData, isLoading};
}

export default useHttp;