interface IAppInputProps {
  type: "tel" | "password" | "text";
  placeholder: string;
  inputChange?: () => void;
  inputValue: string;
}

export const AppInput = ({
  inputValue,
  inputChange,
  placeholder,
  type,
}: IAppInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={inputChange}
      value={inputValue}
    />
  );
};
