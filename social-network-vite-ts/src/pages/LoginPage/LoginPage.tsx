import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading headingText="Авторизация" headingType="h1"/>
      <form action="#">
        <AppInput inputValue="" placeholder="Номер телефона" type="tel"/>
        <AppInput inputValue="" placeholder="Пароль" type="password"/>
        <AppButton buttonText="Войти" isDisabled />
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo path="#" textLogin="Войти с помощью" profile="У вас нет аккаунта? " authorizeText="Зарегистрироваться"/>
    </div>
  );
};
