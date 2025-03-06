import { SAppButton } from "./AppButton.style";

interface IAppButtonProps {
  buttonText: string;
  buttonClick?: () => void;
  isDisabled: boolean;
}

export const AppButton = ({
  buttonText,
  buttonClick,
  isDisabled,
}: IAppButtonProps) => {
  return (
    <SAppButton disabled={isDisabled} onClick={buttonClick}>
      {buttonText}
    </SAppButton>
  );
};
