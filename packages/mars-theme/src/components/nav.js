import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";


/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const NavA = ({ options, currentPageLink, submenu }) => (
  <StyledNav submenu={submenu}>
    {options && options.map(({name, href, submenu}) => {
      // Check if the link matched the current page url
      const isCurrentPage = currentPageLink === href;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link 
            link={href} 
            aria-current={isCurrentPage ? "page" : undefined}
          >
            {name}
          </Link>
          { submenu && (
            <NavA 
              options={submenu} 
              currentPageLink={currentPageLink} 
              submenu/> 
          )}
        </NavItem>
      );
    })}
  </StyledNav>
);

const Nav = ({state}) => (
  <NavA options={state.theme.menu} currentPageLink={state.router.link} />
)

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  font-family: elgocregular;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

const StyledNav = styled.ul`
  display: flex;
  flex-direction: ${({submenu}) => submenu && 'column'};
  visibility: ${({submenu}) => submenu && 'hidden'};
  position: ${({submenu}) => submenu && 'absolute'};
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.0277em;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  margin: ${({submenu}) => submenu ? '10px' : 0};
  width: ${({submenu}) => submenu && '100px'};

  ${NavItem}:hover & {
    visibility: ${({submenu}) => submenu && 'visible'};
  }

  @media (min-width: 1220px) {
    margin-top: ${({submenu}) => submenu ? '10px' : '-0.8rem'}; ;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: -2.5rem;
  }
`;