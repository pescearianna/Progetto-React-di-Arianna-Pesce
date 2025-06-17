import { useState } from "react";
import { MedContext } from "./context/medcontext";
import { StyledMeditation } from "./meditation.styled";
import { MeditationMenu } from "./meditationmenu";
import { MeditationSelected } from "./meditationselected";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { Login } from "../login/login";
import chakra1 from "../../assets/img/chakras/chakra1.webp";
import chakra2 from "../../assets/img/chakras/chakra2.webp";
import chakra3 from "../../assets/img/chakras/chakra3.webp";
import chakra4 from "../../assets/img/chakras/chakra4.webp";
import chakra5 from "../../assets/img/chakras/chakra5.webp";
import chakra6 from "../../assets/img/chakras/chakra6.webp";
import chakra7 from "../../assets/img/chakras/chakra7.webp";
import buddha from "../../assets/img/logo-celestial.svg";
import { UserBox } from "../login/userbox";

export const Meditation = () => {
  const listmeditation = [
    {
      key: 0,
      name: "Feel Free",
      description: "Set the time to dedicate to yourself!",
      time: { h: 0, m: 0, s: 0 },
      emoji: buddha,
      instructions:
        "Concentrate to feel your body. Breath slowly, connect deeply",
    },
    {
      key: 1,
      name: "Essential Breath",
      description:
        "A short and refreshing meditation focused solely on the breath. Perfect for those who are short on time and need a quick reset during the day.",
      time: { h: 0, m: 0, s: 3 },
      emoji: chakra1,
      instructions:
        "Sit comfortably, close your eyes, and focus on the sensation of air moving in and out of your nose.",
    },
    {
      key: 2,
      name: "Inner Roots",
      description:
        "A grounding practice to reconnect with the body and the earth. Ideal when feeling scattered or overwhelmed, using simple visualizations and body awareness.",
      time: { h: 0, m: 0, s: 5 },
      emoji: chakra2,
      instructions:
        "Sit or lie down and gently bring your attention to each part of your body from toes to head.",
    },
    {
      key: 3,
      name: "Wave of Calm",
      description:
        "A guided meditation to release physical and emotional tension by following the rhythm of the breath like an ebbing and flowing wave. Great for winding down.",
      time: { h: 0, m: 5, s: 0 },
      emoji: chakra3,
      instructions:
        "Walk slowly, focusing on the contact of your feet with the ground and the rhythm of your steps.",
    },
    {
      key: 4,
      name: "Present Heart",
      description:
        "A mindfulness practice centered on the present moment with attention to the heart and emotions. Cultivates softness, listening, and self-compassion.",
      time: { h: 0, m: 10, s: 0 },
      emoji: chakra4,
      instructions:
        "Close your eyes and bring to mind three things you're grateful for, feeling each one fully.",
    },
    {
      key: 5,
      name: "Inner Journey",
      description:
        "A longer meditation with deep visualizations and moments of silence, designed to explore your inner world and connect with deeper insight.",
      time: { h: 0, m: 20, s: 0 },
      emoji: chakra5,
      instructions:
        "Silently repeat phrases like “I am happy,” then extend the same wishes to others.",
    },
    {
      key: 6,
      name: "Silent Horizon",
      description:
        "A quiet, mostly unguided meditation with gentle prompts at the beginning and end. Ideal for deepening your practice in stillness and listening to the space within.",
      time: { h: 0, m: 30, s: 0 },
      emoji: chakra6,
      instructions:
        "Sit quietly and pay attention to all the sounds around you, without judging or labeling them.",
    },
    {
      key: 7,
      name: "Light Within",
      description:
        "A visualization-based meditation that focuses on awakening inner light and clarity. Great for starting the day with positive energy and focus.",
      time: { h: 0, m: 45, s: 0 },
      emoji: chakra7,
      instructions:
        "Imagine a peaceful place in detail—its colors, sounds, smells—and rest your mind there.",
    },
  ];

  const [medSelected, setMedSelected] = useState();

  const selectMeditationToDo = (med: any) => {
    setMedSelected(med);
  };

  const [user] = useAuthState(auth);

  return (
    <StyledMeditation>
      <UserBox></UserBox>

      {!user && (
        <div id="back-sky">
          <Login></Login>
        </div>
      )}

      {/* ------------------------------------------------------------------------------------ */}

      {user && (
        <MedContext.Provider
          value={{ listmeditation, medSelected, selectMeditationToDo }}
        >
          <div id="back-sky">
            <MeditationSelected />
          </div>
          <MeditationMenu />
        </MedContext.Provider>
      )}
    </StyledMeditation>
  );
};
