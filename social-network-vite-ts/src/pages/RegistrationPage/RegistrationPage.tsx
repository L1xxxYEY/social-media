import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import {SRegistrationPage} from "./RegistrationPage.style"



export const RegistrationPage = () => {
  return (
    <SRegistrationPage>
      <Heading headingText="Регистрация" headingType="h1"/>
      <form action="#">
        <AppInput inputValue="" placeholder="Имя и фамилия" type="text"/>
        <AppInput inputValue="" placeholder="Номер телефона" type="password"/>
        <AppInput inputValue="" placeholder="Пароль" type="password"/>
        <AppButton buttonText="Зарегистрироваться" isDisabled />
      </form>
      <RegistrationInfo path="#" textLogin="Регистрация с помощью" authorizeText="Войти" profile="Уже есть аккаунт? "/>
    </SRegistrationPage>
  );
};