import StickyBox from "react-sticky-box";
import { FollowSuggestion } from "../FollowSuggestion";
import { List } from "../List";
import { News } from "../News";
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
  ShowMoreButton
} from "./styles";

export function Sidebar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="What’s happening"
            elements={[
              <News
                title="COVID-19 - LIVE"
                description="Ceará: as ultimas noticias sobre a pandemia"
              />,
              <News
                title="Reality TV - LIVE"
                description="Os Tweets com as novidades sobre o BBB"
              />,
              <News
                title="COVID-19 - LIVE"
                description="Ceará: as ultimas noticias sobre a pandemia"
              />,
              <News
                title="Reality TV - LIVE"
                description="Os Tweets com as novidades sobre o BBB"
              />,
              <News
                title="Sports - LIVE"
                description="Coutinho no Aston Villa"
              />,
              <ShowMoreButton>Show more</ShowMoreButton>
            ]}
          />
          <List
            title="Who to follow"
            elements={[
              <FollowSuggestion name="Ronald Tomaz" nickname="@ronaldtmz_" />,
              <FollowSuggestion name="Neymar Junior" nickname="@neymarjnr_" />,
              <FollowSuggestion name="Toni Kroos" nickname="@tonikroos_" />,
              <ShowMoreButton>Show more</ShowMoreButton>
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}
