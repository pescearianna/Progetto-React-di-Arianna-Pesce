
 import axios from "axios";
// import Axios from "axios";
import { useEffect, useState } from "react"


 export const DailyQuotes = () => {
      const [quote, setQuote] = useState("");
      const [author, setAuthor] = useState("")

    //  const fetchQuoteData = () =>{
    //      Axios.get("https://api.api-ninjas.com/v1/quotes", {
    //         headers: {
    //           'X-Api-Key': process.env.REACT_APP_NINJA_API_KEY
    //         }
    //       }).then(res => {
    //         setQuote(res.data[0].quote);
    //         setAuthor(res.data[0].author);
    //       })
    //       .catch(err => {
    //         console.error('Errore nella richiesta:', err);
    //       });
    //     }
     


    //   useEffect(()=>{
    //       fetchQuoteData()
    //   }, [])

    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': process.env.REACT_APP_NINJA_API_KEY
          }
        })
        .then(res => {
          setQuote(res.data[0].quote);
          setAuthor(res.data[0].author);
        })
        .catch(err => {
          console.error('Errore nella richiesta:', err);
        });
      }, []);


     return(
         <>
         <p>"{quote}"</p>
         <p>- {author}</p>
         {/* <button onClick={fetchQuoteData}>Give me another one</button> */}
         </>
     )
 }