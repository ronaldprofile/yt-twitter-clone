import { useCallback, useState } from "react";
import { Container, Avatar, Info, FollowButton } from "./styles";

type FollowSuggestionProps = {
  name: string;
  nickname: string;
};

export function FollowSuggestion({ name, nickname }: FollowSuggestionProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  const followUser = useCallback(() => {
    setIsFollowing(true);
  }, []);

  const UnFollowUser = useCallback(() => {
    setIsFollowing(false);
  }, []);

  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <a href="#">{name}</a>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton
        isFollowing={isFollowing}
        outlined={isFollowing}
        onClick={() => (isFollowing ? UnFollowUser() : followUser())}
      >
        <span>{isFollowing ? "Following" : "Follow"}</span>
        <span className="unfollow-span">Unfollow</span>
      </FollowButton>
    </Container>
  );
}
