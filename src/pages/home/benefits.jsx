import { ChakraList } from "../../components/chakraList";
import { StyledBenefits } from "../home/benefits.styled";

export const Benefits = () => {
  const benefitsMeditation = [
    "Stress reduction",
    "Improves concentration",
    "Increases awareness",
    "Promotes emotional balance",
    "Strengthens the immune system",
    "Encourages deep sleep",
    "Helps manage anxiety",
  ];

  return (
    <StyledBenefits>
      <div className="container">
        <h3>Dedicate time to yourself!</h3>
        <p>
          Stop running and{" "}
          <span className="bold">
            dedicate relaxing time to your wellbeing!
          </span>
          <br />
          These minutes are for you.
          <br />
          <br />
          More than 6 special meditacion. <br />
          <br />
          Only one counter. <br />
          <br />
          Collect your badge and share with the community.
        </p>
      </div>

      <div className="container">
        <h3>The 7 Benefits of Meditation</h3>
        <ChakraList items={benefitsMeditation} />
      </div>
    </StyledBenefits>
  );
};
