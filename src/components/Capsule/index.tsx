import { Container } from "./styles";

interface CapsuleProps {
  title: string;
  isSelected?: boolean;
  $onClick?: () => void;
}

export function Capsule({
  title,
  isSelected = false,
  $onClick,
  ...rest
}: CapsuleProps) {
  const handleClick = () => {
    if ($onClick) {
      $onClick();
    }
  };
  return (
    <Container $iSselected={isSelected} onClick={handleClick} {...rest}>
      <p>{title}</p>
    </Container>
  );
}
