import { Container } from "./styles";

interface CapsuleProps{
    title: string;
    isSelected?: boolean;
}

export function Capsule({title, isSelected = false} : CapsuleProps) {
  return (
    <Container $isselected={isSelected.toString()}>
        <p>{title}</p>
    </Container>
  )
}
