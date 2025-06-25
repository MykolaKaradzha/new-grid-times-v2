import React from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../../constants";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory  {...story} />
            </OpinionStoryWrapper>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --divider-spacing: 16px;

  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    column-gap: 0;

    grid-template-areas:
      "main-story secondary-stories"
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    row-gap: 0;
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    padding-left: var(--divider-spacing);
    margin-left: var(--divider-spacing);
    border-left: 1px solid ${COLORS.gray[300]};
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: -9px;
    padding-left: var(--divider-spacing);
    margin-left: var(--divider-spacing);
    border-left: 1px solid ${COLORS.gray[300]};
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletOnly} {
    ${OpinionSection} & {
      flex-direction: row;
      gap: 32px;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    margin-left: var(--divider-spacing);
    margin-top: var(--divider-spacing);
    padding-top: var(--divider-spacing);
    border-top: solid 1px ${COLORS.gray[300]};
  }
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.gray[300]};
    padding-bottom: var(--divider-spacing);
    margin-bottom: var(--divider-spacing);
  }
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;

    &:not(:last-of-type) {
      border-bottom: revert;
      padding-bottom: revert;
      margin-bottom: revert;
    }
  }
`;

export default MainStoryGrid;
