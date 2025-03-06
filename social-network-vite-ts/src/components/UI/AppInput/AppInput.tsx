import { ErrorMessage, SAppInput } from "./AppInput.style";

interface IAppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  errorMessage?: string;
}

export const AppInput = ({
  isError,
  errorMessage,
  ...props
}: IAppInputProps) => {
  return (
    <div>
      <SAppInput {...props} />;
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
