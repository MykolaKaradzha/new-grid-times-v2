import React from "react";
import styled from "styled-components";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { COLORS, QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>

      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportStoryWrapper>
              <MiniStory key={data.id} {...data} />
            </SportStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 0;
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(165px, 100%), 1fr));
`;

const SportsSection = styled.section`
    overflow: auto;

  @media ${QUERIES.laptopAndUp} {
    border-left: 1px solid ${COLORS.gray[300]};
    padding-left: 16px;
    margin-left: 16px;
  }
`;

const SportsStories = styled.div`
  display: grid;

  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(165px, 100%), 1fr));

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
  }
`;

const SportStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

export default SpecialtyStoryGrid;
