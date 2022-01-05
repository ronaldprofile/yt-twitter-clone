import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Status,
  CommentIcon,
  Icons,
  RetweetIcon,
  LikeIcon,
  Avatar
} from "./styles";

export function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>

            <span>@rocketseat</span>
            <Dot />
            <time>20 de janeiro</time>
          </Header>

          <Description>Em busca do próximo nível</Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              <span>29</span>
            </Status>

            <Status>
              <RetweetIcon />
              <span>877</span>
            </Status>

            <Status>
              <LikeIcon />
              <span>900</span>
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
