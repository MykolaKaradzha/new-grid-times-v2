import styled from "styled-components";
import { Menu, Search, User } from "react-feather";
import { QUERIES } from "../../constants";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>

        <Logo />

        <SubscribeButtonWrapper>
          <Button>Subscribe</Button>
          <Link>Already a subscriber?</Link>
        </SubscribeButtonWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    align-items: baseline;
    justify-content: space-between;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  ${MainHeader} & {
    display: none;

    @media ${QUERIES.desktopAndUp} {
      display: flex;
    }
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SubscribeButtonWrapper = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const Link = styled.a`
  font-size: ${14 / 16}rem;
  text-decoration: underline;
  font-style: italic;
`;

export default Header;
