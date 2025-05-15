// import { DailyQuotes } from "../components/dailyquotes"

import { Benefits } from "./benefits"
import { Hero } from "./hero"
import {Intro} from "./intro"
import { Steps } from "../../components/steps"


 export const Home = () => {
     return(
         <>
         <Hero/>

         <Intro/>
         <Steps/>
         <Benefits/>
         
         
         </>
     )
 }