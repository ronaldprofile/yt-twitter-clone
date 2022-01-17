import { Container, Avatar, Info, FollowButton } from "./styles";

type FollowSuggestionProps = {
  name: string;
  nickname: string;
};

export function FollowSuggestion({ name, nickname }: FollowSuggestionProps) {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <a href="#">{name}</a>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}
