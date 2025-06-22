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
            <>
              <SecondaryStory key={story.id} {...story} />
              {index !== SECONDARY_STORIES.length - 1 && <Divider />}
            </>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <>
              <OpinionStory key={story.id} {...story} />
              {index !== OPINION_STORIES.length - 1 && <Divider />}
            </>
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
  --diviver-spacing: 16px;

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
  }

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "main-story main-story secondary-stories"
      "main-story main-story secondary-stories"
      "advertisement advertisement advertisement"
      "opinion-stories opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    row-gap: 0;
    grid-template-areas:
      "main-story main-story main-story secondary-stories opinion-stories"
      "main-story main-story main-story secondary-stories opinion-stories"
      "main-story main-story main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: var(--diviver-spacing);
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.tabletAndUp} {
    padding: 0 var(--diviver-spacing);
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
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
    margin-left: var(--diviver-spacing);
    margin-top: var(--diviver-spacing);
    padding-top: var(--diviver-spacing);
    border-top: solid 1px ${COLORS.gray[300]};
  }
`;

const Divider = styled.span`
  display: block;
  border-top: 1px solid ${COLORS.gray[300]};
  margin: var(--diviver-spacing) 0;

  @media ${QUERIES.tabletOnly} {
    ${OpinionSection} & {
      display: none;
    }
  }
`;

export default MainStoryGrid;
