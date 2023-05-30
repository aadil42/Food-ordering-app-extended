import { useCallback } from "react";

const useHttp = (handleData) => {

    const getData = useCallback(async () => {
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
    }, []);
    
    return {getData};
}

export default useHttp;