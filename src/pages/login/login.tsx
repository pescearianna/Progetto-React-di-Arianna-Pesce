import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { StyledLogin } from "./login.styled";
import Swal from "sweetalert2";
import { ButtonHero } from "../../components/button/buttonHero";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Log In success",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(function () {
      navigate("/meditation");
    }, 2000);
  };

  return (
    <StyledLogin>
      <h1 className="bigtitle">Login</h1>
      <div className="section">
        <i className="bi bi-lock-fill"></i>
        <p id="writer">Please, Sign In With Google to unblock this area</p>
        <ButtonHero
          text={"Sign In With Google"}
          onClick={signInWithGoogle}
        ></ButtonHero>
      </div>
    </StyledLogin>
  );
};
