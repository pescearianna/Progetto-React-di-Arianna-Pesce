

import { StyledChakraList } from "./chakraList.styled";

// type ChakraListProps = {
//     items: string[]; // Lista dei testi da mostrare
//     chakraImages: string[]; // Array delle immagini dei chakra
//   };
     // Percorsi o import delle immagini
import chakra1 from "../assets/img/chakras/chakra1.png";
import chakra2 from "../assets/img/chakras/chakra2.png";
import chakra3 from "../assets/img/chakras/chakra3.png";
import chakra4 from "../assets/img/chakras/chakra4.png";
import chakra5 from "../assets/img/chakras/chakra5.png";
import chakra6 from "../assets/img/chakras/chakra6.png";
import chakra7 from "../assets/img/chakras/chakra7.png"; 


  export const ChakraList = ({ items }) => {


const chakraImages = [chakra1, chakra2, chakra3, chakra4, chakra5, chakra6, chakra7];

    return (
      <StyledChakraList>
        {items.map((item, index) => {
          const chakraIndex = index % chakraImages.length;
          const chakraImage = chakraImages[chakraIndex];
  
          return (
            <li key={index}>
              <img
                src={chakraImage}
                alt={`Chakra ${chakraIndex + 1}`}
              />
              <span> {item}</span>
            </li>
          );
        })}
      </StyledChakraList>
    );
  }

