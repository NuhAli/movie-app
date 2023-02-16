/* eslint-disable @next/next/no-img-element */
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
import { useSession, signOut } from "next-auth/react";
import { data } from "./data";
import { v4 as uuidv4 } from "uuid";
import { useMediaQuery } from "../../hooks/use-media-query";
import { useRouter } from "next/router";

interface INavProps {
  searchTerm: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const NavBar = ({
  searchTerm,
  handleChange,
  handleSearch,
}: INavProps) => {
  const [searchVisible, setSearchVisible] = useState(false);

  const [image, setImage] = useState("");

  const [searchVisibleLarge, setSearchVisibleLarge] = useState(false);

  const { data: session } = useSession();

  const router = useRouter();

  const isSmall = useMediaQuery("(max-width: 1440px )");

  const isLarge = useMediaQuery("(min-width: 1440px)");

  const renderNavLinks = () => {
    return data.map((link) => {
      return (
        <NavLink href={link.link} key={uuidv4()}>
          <img
            alt={link.name}
            src={router.route === link.link ? link.iconActive : link.icon}
            height={16}
            width={16}
          />
        </NavLink>
      );
    });
  };

  const renderAnimation = () => {
    return searchVisible
      ? { top: 80, opacity: 1, display: "flex" }
      : { top: 0, opacity: 0, display: "none" };
  };

  const renderLarge = () => {
    return searchVisibleLarge
      ? { left: 96, opacity: 1, display: "flex" }
      : { left: 0, opacity: 0, display: "none" };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSearch(e);
    if (isLarge) {
      setSearchVisibleLarge(false);
    } else if (isSmall) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    setSearchVisibleLarge(false);
  }, [isSmall]);

  useEffect(() => {
    setSearchVisible(false);
  }, [isLarge]);

  return (
    <Nav>
      <NavWrapper>
        <NavIcon>
          <img alt="nav-icon" src={"/assets/logo.svg"} width={25} height={20} />
        </NavIcon>
        <NavLinks>
          {renderNavLinks()}
          <NavIcon>
            <img
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
        <NavIcon onClick={() => signOut()}>
          {session?.user?.image && (
            <img
              alt="nav-icon"
              src={session.user.image}
              width={24}
              height={24}
              className="profile"
            />
          )}
        </NavIcon>
      </NavWrapper>
      {isSmall && (
        <SearchArea
          animate={renderAnimation()}
          transition={{ ease: "easeOut", duration: 0.2 }}
          exit={{ display: "none" }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <SearchInputWrapper>
            <img
              alt="search-icon"
              src={"/assets/icon-search.svg"}
              width={24}
              height={24}
            />
            <SearchInput
              placeholder="Search for movies or TV series"
              onChange={handleChange}
              value={searchTerm}
            />
          </SearchInputWrapper>
        </SearchArea>
      )}
      {isLarge && (
        <SearchAreaLarge
          animate={renderLarge()}
          transition={{ ease: "easeOut", duration: 0.2 }}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <SearchInputWrapper>
            <img
              alt="search-icon"
              src={"/assets/icon-search.svg"}
              width={24}
              height={24}
            />
            <SearchInput
              placeholder="Search for movies or TV series"
              onChange={handleChange}
              value={searchTerm}
            />
          </SearchInputWrapper>
        </SearchAreaLarge>
      )}
    </Nav>
  );
};

export default NavBar;
