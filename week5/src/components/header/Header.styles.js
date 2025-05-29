import styled from "styled-components";
export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 500px; /* 선택적으로 고정폭 설정 */
`;

export const ArrowButton = styled.button`
  position: absolute;
  left: 75%; /* input 왼쪽으로 이동 (원하는 위치로 조정) */
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 2;
`;

export const SearchSign = styled.img`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  pointer-events: none;
  z-index: 1;
`;

export const ArrowIcon=styled.p`
color: #1C1C1C;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
display: flex;
`

export const HeaderSearch=styled.div`
 display: flex;
   align-items: center;
  gap: 20px; // 로고와 검색창 간격
`

export const SearchText=styled.input`
width: 420px;
height: 45px;
flex-shrink: 0;
border-radius: 100px;
background: #1C1C1C;
color: #FEFEFE;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.98px;

  padding-left: 45px;   /* 왼쪽 아이콘 피하기 */
  padding-right: 55px;  /* 오른쪽 버튼 피하기 */
`

export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  color: #1c1c1c;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.div`
  color: #a7a7a7;
  font-weight: 500;
  cursor: pointer;

  &.active.about {
    color: black;
    &::after {
      content: "";
      display: block;
      margin-top: 1px;
      height: 4px;
      background-color: #1C1C1C;;
    }
  }

  &.active.project {
    color: black;
    &::after {
      content: "";
      display: block;
      margin-top: 1px;
      height: 4px;
      background-color: #FF6D79;
    }
  }
  
  &.active.diary {
    color: black;
    &::after {
      content: "";
      display: block;
      margin-top: 1px;
      height: 4px;
      background-color: #01D354;
    }
  }
`;
