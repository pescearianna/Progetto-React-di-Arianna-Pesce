import { StyledButtonHero } from "./buttonHero.styled";

export const ButtonHero = ({ text, onClick }: any) => {
  return <StyledButtonHero onClick={onClick}>{text}</StyledButtonHero>;
};
