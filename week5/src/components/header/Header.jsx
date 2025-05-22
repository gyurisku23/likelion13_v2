import { HeaderWrapper, Logo, Nav, NavItem, SearchText, HeaderSearch } from "./Header.styles";
import { Link , useLocation } from "react-router-dom";
import { ArrowIcon, SearchWrapper,  SearchSign, ArrowButton  } from "./Header.styles";
import SearchImg from "../../assets/images/search.png";

export default function Header() {
  const location = useLocation();
  return (
    <HeaderWrapper>
      <HeaderSearch>
        <Logo>IDT</Logo>
        
        {location.pathname === "/project" && (
          <SearchWrapper>
            <SearchSign src={SearchImg} />

            <SearchText placeholder="키워드를 입력하세요." />

            <ArrowButton>
              <ArrowIcon>→</ArrowIcon>

            </ArrowButton>

          </SearchWrapper>
        )}
        
      </HeaderSearch>
      
      <Nav>
        <Link to="/">
          <NavItem className={location.pathname === "/" ? "active about" : ""}>About</NavItem>
        </Link>

        <Link to="/project">
          <NavItem className={location.pathname === "/project" ? "active project" : ""}>
            Project
          </NavItem>
        </Link>

        <Link to="/diary">
          <NavItem className={location.pathname === "/diary" ? "active diary" : ""}>
            Diary
          </NavItem>
        </Link>

        <NavItem>QnA</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
