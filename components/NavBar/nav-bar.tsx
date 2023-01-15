import React, { useEffect, useState } from "react";
import {
  Nav,
  NavIcon,
  NavLink,
  NavLinks,
  NavWrapper,
  SearchArea,
  SearchAreaLarge,
  SearchInput,
  SearchInputWrapper,
} from "./nav-bar.styles";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import Home from "/assets/icon-nav-home.svg";
import Movie from "/assets/icon-nav-movies.svg";
import Shows from "/assets/icon-nav-tv-series.svg";
import Bookmark from "/assets/icon-nav-bookmark.svg";
import Search from "/assets/icon-search.svg";
import { useMediaQuery } from "../../hooks/use-media-query";

export const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const [searchVisibleLarge, setSearchVisibleLarge] = useState(false);

  const { data: session } = useSession();

  const isSmall = useMediaQuery("(max-width: 1440px )");

  const isLarge = useMediaQuery("(min-width: 1440px)");

  const renderProfileImage = () => {
    if (session?.user) {
      return session.user.image;
    }
    return "assets/iamge-avatar.png";
  };

  const renderNavLinks = () => {
    return data.map((link) => {
      return (
        <NavLink href={link.link} key={uuidv4()}>
          <Image alt={link.name} src={link.icon} height={16} width={16} />
        </NavLink>
      );
    });
  };

  const renderAnimation = () => {
    return searchVisible ? { top: 80, opacity: 1 } : { top: 0, opacity: 0 };
  };

  const renderLarge = () => {
    return searchVisibleLarge
      ? { left: 96, opacity: 1 }
      : { left: 0, opacity: 0 };
  };

  useEffect(() => {
    setSearchVisibleLarge(false)
  },[isSmall])

  useEffect(() => {
    setSearchVisible(false)
  },[isLarge])

  return (
    <Nav>
      <NavWrapper>
        <NavIcon>
          <Image
            alt="nav-icon"
            src={"/assets/logo.svg"}
            width={25}
            height={20}
          />
        </NavIcon>
        <NavLinks>
          {renderNavLinks()}
          <NavIcon>
            <Image
              alt="search-icon"
              src={"/assets/icon-search.svg"}
              width={16}
              height={16}
              onClick={() => {
                isLarge
                  ? setSearchVisibleLarge(!searchVisibleLarge)
                  : setSearchVisible(!searchVisible);
              }}
            />
          </NavIcon>
        </NavLinks>
        <NavIcon>
          <Image
            alt="nav-icon"
            src={"/assets/image-avatar.png"}
            width={24}
            height={24}
          />
        </NavIcon>
      </NavWrapper>
      {isSmall && (
        <SearchArea
          animate={renderAnimation()}
          transition={{ ease: "easeOut", duration: 0.2 }}
          exit={{ display: "none" }}
        >
          <SearchInputWrapper>
            <Image
              alt="search-icon"
              src={"/assets/icon-search.svg"}
              width={24}
              height={24}
            />
            <SearchInput placeholder="Search for movies or TV series" />
          </SearchInputWrapper>
        </SearchArea>
      )}
      {isLarge && (
        <SearchAreaLarge
          animate={renderLarge()}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <SearchInputWrapper>
            <Image
              alt="search-icon"
              src={"/assets/icon-search.svg"}
              width={24}
              height={24}
            />
            <SearchInput placeholder="Search for movies or TV series" />
          </SearchInputWrapper>
        </SearchAreaLarge>
      )}
    </Nav>
  );
};

export default NavBar;