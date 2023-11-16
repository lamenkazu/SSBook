import { Container } from "./styles";

interface CapsuleProps{
    title: string;
    isSelected?: boolean;
}

export function Capsule({title, isSelected} : CapsuleProps) {
  return (
    <Container isSelected={isSelected}>
        <p>{title}</p>
    </Container>
  )
}
