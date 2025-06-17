import { Benefits } from "./benefits"
import { Hero } from "./hero"
import { Steps } from "../../components/steps"


 export const Home = () => {
     return(
        <main>
        <Hero/>
        <Steps/>
        <Benefits/>
        </main>
     )
 }