interface IAppButtonProps {
    buttonText: string;
    buttonClick?: () => void;
    isDisabled: boolean;
}

export const AppButton = ({buttonText,buttonClick,isDisabled}: IAppButtonProps) => {
  return <button disabled={isDisabled} onClick={buttonClick}>{buttonText}</button>;
};
