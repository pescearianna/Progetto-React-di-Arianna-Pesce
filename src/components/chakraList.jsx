import { StyledChakraList } from "./chakraList.styled";

import chakra1 from "../assets/img/chakras/chakra1.webp";
import chakra2 from "../assets/img/chakras/chakra2.webp";
import chakra3 from "../assets/img/chakras/chakra3.webp";
import chakra4 from "../assets/img/chakras/chakra4.webp";
import chakra5 from "../assets/img/chakras/chakra5.webp";
import chakra6 from "../assets/img/chakras/chakra6.webp";
import chakra7 from "../assets/img/chakras/chakra7.webp";

export const ChakraList = ({ items }) => {
  const chakraImages = [
    chakra1,
    chakra2,
    chakra3,
    chakra4,
    chakra5,
    chakra6,
    chakra7,
  ];

  return (
    <StyledChakraList>
      {items.map((item, index) => {
        const chakraIndex = index % chakraImages.length;
        const chakraImage = chakraImages[chakraIndex];

        return (
          <li key={index}>
            <img src={chakraImage} alt={`Chakra ${chakraIndex + 1}`} />
            <span> {item}</span>
          </li>
        );
      })}
    </StyledChakraList>
  );
};
