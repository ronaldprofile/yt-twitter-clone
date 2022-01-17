import { Container } from "./styles";

type NewsProps = {
  title: string;
  description: string;
};

export function News({ title, description }: NewsProps) {
  return (
    <Container>
      <span>{title}</span>
      <strong>{description}</strong>
    </Container>
  );
}
