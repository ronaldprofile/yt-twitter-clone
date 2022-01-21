import { Tweet } from "../Tweet";
import { Container, Tabs, Tab, Tweets } from "./styles";

export function Feed() {
  return (
    <Container>
      <Tabs>
        <Tab isActive>
          <span>Tweets</span>
        </Tab>
        <Tab>
          <span>Tweets &amp; replies</span>
        </Tab>
        <Tab>
          <span>Media</span>
        </Tab>
        <Tab>
          <span>Likes</span>
        </Tab>
      </Tabs>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}
