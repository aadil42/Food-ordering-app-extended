import { useCallback, useState } from "react";

const useHttp = (handleData) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);

    const getData = useCallback(async (data) => {
        // it is just emaulate a delay so We can check loading state
        // setTimeout(async () => {
          
        // }, 5000);
        try {
          // const url = 'https://http-request-2-with-react-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json';
          let requestArguments = {};
          if(data.userData) {
            requestArguments = {
              method: data.type,
              body:JSON.stringify({
                user: data.userData,
                orderedItems: data.items
              })
            }
          } else {
              requestArguments = {
                method: data.type
            }
          }
          let response = await fetch(data.url, requestArguments);
          response = await response.json();
          // converting obj to array
          response = Object.keys(response).map(key => response[key]);
          console.log(response);
          handleData && handleData(response);
          setIsSuccessful(true);
        } catch(error){
          alert(error.message,'this is from catch block');
          setError(true);
          setIsSuccessful(false);
        }
        setIsLoading(false);
    }, [handleData]);
    
    return {getData, isLoading, error, isSuccessful};
}

export default useHttp;