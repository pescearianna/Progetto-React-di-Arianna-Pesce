
import Axios from "axios";
import { useEffect, useState } from "react";

export const DailyQuotes = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const fetchQuoteData = () =>{
        Axios.get("https://api.quotable.io/random").then((res) => 
                console.log(res.data)
            );
    }
    
    useEffect(()=>{
        fetchQuoteData()
    }, [])
    

    

    return(
        <>
        <p>{quote} </p>
        <button onClick={fetchQuoteData}>Give me another one</button>
        </>
    )
}