import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import { SRegistrationPage } from "./RegistrationPage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegistrationForm {
  userName: string;
  userPhone: string;
  userPassword: string;
}

const loginScheme = yup.object({
  userName: yup
    .string()
    .min(2, "Минимум 2 буквы!")
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, "Имя может содержать только буквы")
    .required("Обязательное поле"),
  userPhone: yup
    .string()
    .matches(
      /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Введите корректный номер телефона"
    )
    .required("Обязательное поле"),
  userPassword: yup
    .string()
    .min(4, "Минимум 4 цифры!")
    .required("Обязательное поле"),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginScheme),
    mode: "onBlur",
    defaultValues: {
      userName: "",
      userPhone: "",
    },
  });

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    const payload = {
      userName: data.userName,
      userPhone: data.userPhone,
      userPassword: data.userPassword,
    };
    console.log(payload);
  };

  return (
    <SRegistrationPage>
      <Heading headingText="Регистрация" headingType="h1" />
      <form action="#" onSubmit={handleSubmit(onRegistrationSubmit)}>

        <Controller
          name="userName"
          control={control}
          render={({ field }) => (
            <AppInput
              isError={errors.userName ? true : false}
              errorMessage={errors.userName?.message}
              placeholder="Имя и фамилия"
              type="text"
              {...field}
            />
          )}
        />

        <Controller
          name="userPhone"
          control={control}
          render={({ field }) => (
            <AppInput
              isError={errors.userPhone ? true : false}
              errorMessage={errors.userPhone?.message}
              placeholder="Номер телефона"
              type="tel"
              {...field}
            />
          )}
        />

        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              isError={errors.userPassword ? true : false}
              errorMessage={errors.userPassword?.message}
              placeholder="Пароль"
              type="password"
              {...field}
            />
          )}
        />

        <AppButton buttonText="Зарегистрироваться" isDisabled={false} />
      </form>
      <RegistrationInfo
        path="#"
        textLogin="Регистрация с помощью"
        authorizeText="Войти"
        profile="Уже есть аккаунт? "
      />
    </SRegistrationPage>
  );
};
