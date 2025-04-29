import imgMeditation from "../../assets/img/chakraman.jpg"
import { ChakraList } from "../../components/chakraList"
import {StyledBenefits} from "../home/benefits.styled"

export const Benefits = () => {

const benefitsMeditation = [
    "Riduce lo stress",
  "Migliora la concentrazione",
  "Aumenta la consapevolezza",
  "Promuove l'equilibrio emotivo",
  "Rafforza il sistema immunitario",
  "Favorisce il sonno profondo",
  "Aiuta a gestire l'ansia",
]

    return (
        <StyledBenefits>
        <img className="post" src={imgMeditation} alt="medditando" />
        <div className="container">
            <h3>The 7 Benefits of Meditation</h3>
            <ChakraList items={benefitsMeditation}/>
        </div>
        </StyledBenefits>
    )
}