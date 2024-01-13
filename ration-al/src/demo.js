import React, {useState , useEffect} from 'react'

const ApiData= () =>
{
    const [inputText , setInputText] = useState('');
    const[ApiData,setApiData] = useState(null);
 
 useEffect(()=>{
     const fetchData = async () => {
        try{
            const response = await fetch(`example.com/${inputText}`);
            if(!response.ok){
                 console.log('network error');
            }
            const data = await response.json();
            setApiData(data);
        }catch (error){
            console.error('error,error');
            setApiData(null);
        }
        }
    
},[inputText]);

return(
    <>
    <div>
        <label>
            <input type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            />
        </label>
        {ApiData !== null ? (
            <div>
                <h2>api response</h2>
                <p>{JSON.stringify(ApiData)}</p>
                </div>
        )}
    </div>
    </>
)}

export default ApiData