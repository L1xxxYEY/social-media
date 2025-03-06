import { Link } from "react-router-dom";
import { SRegistrationInfo } from "./Registration.style";

interface IRegistrationInfoProps {
    path: string;
    textLogin: string;
    authorizeText: string;
    profile: string;
}

export const RegistrationInfo = ({path,textLogin,authorizeText,profile}: IRegistrationInfoProps) => {
  return (
    <SRegistrationInfo>
      <span>
        {profile} <Link to={path}>{authorizeText}</Link>
      </span>
      <p>{textLogin}</p>
      <div className="icons-wrapper">
        <a className="reg__link google-link" href="#">
          <img src="./img/icons/google.svg" alt="Google" />
        </a>
        <a className="reg__link google-plus-link" href="#">
          <img src="./img/icons/google-plus.svg" alt="Google Plus" />
        </a>
        <a className="reg__link yandex-link" href="#">
          <img src="./img/icons/yandex.svg" alt="Yandex" />
        </a>
        <a className="reg__link mail-ru-link" href="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </a>
      </div>
    </SRegistrationInfo>
  );
};
