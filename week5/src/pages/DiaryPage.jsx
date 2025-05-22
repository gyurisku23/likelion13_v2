import Header from "../components/header/Header";
import groupImg from "../assets/images/groupPhoto.png"
import countImg from "../assets/images/counting.png";
import mainServiceImg from "../assets/images/mainservice.png";
import vectorImg from "../assets/images/VectorGreen.png";
import styled from "styled-components";

export default function DiaryPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <div>
          <Section>
            <Vector src={vectorImg}/>
            <TopText>Diary</TopText>
          </Section>
          
          <StrongText>2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 여러분이 느꼈던 모든 것을 적어주세요!
            <LineBr/>이미지를 올리셔도 됩니다. 배치도 자유롭게 설정할 수 있어요! 방명록이라고 편하게 생각 부탁함~
          </StrongText>
          <GuestButton>방명록 쓰러가기</GuestButton>
        </div>

        <YellowBox>다들<LineBr/> 사랑해요호<LineBr/> !!!!!!!</YellowBox>

        <GreenBox>최강동아리멋사<LineBr/>그 중 서경대가 최강</GreenBox>

        <GroupImg src={groupImg} />

        <BlueBox>내가더더더</BlueBox>

        <PinkBox>글씨를 이렇게도 작게 쓸 수 있어요<LineBr/>
        그치만 이렇게 쓰면 안보이겠죠?<LineBr/>
        시원하게 씁시다<LineBr/>
        글씨를 이렇게도 작게 쓸 수 있어요<LineBr/>
        그치만 이렇게 쓰면 안보이겠죠?<LineBr/>
        시원하게 씁시다<LineBr/>
        글씨를 이렇게도 작게 쓸 수 있어요<LineBr/>
        그치만 이렇게 쓰면 안보이겠죠?<LineBr/>
        시원하게 씁시다</PinkBox>

        <MainImg src={mainServiceImg}/>

        <PurpleBox>여기 후기 쓰는 곳임<LineBr/>그래서 제 소감은요...<LineBr/>이하생략</PurpleBox>
        
        <CountImg src={countImg}/>
      </MainContainer>
    </>
  );
}

const Vector=styled.img`
width: 51px;
height: 47.592px;
flex-shrink: 0;
`
const LineBr=styled.br`
line-height:500%;
`

const PurpleBox=styled.div`
width: 665px;
height: 444px;
flex-shrink: 0;
border-radius: 15px;
background: #593A6D;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);

color: #FEFEFE;
font-family: Pretendard;
font-size: 64px;
font-style: normal;
font-weight: 900;
line-height: 90px; /* 140.625% */


  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
top:250px;
left:1000px;
`
const CountImg=styled.img`
width: 1034px;
height: 1033px;
flex-shrink: 0;
border-radius: 15px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);

  position: relative;
top:350px;
left:500px;
`
const MainImg=styled.img`
width: 473px;
height: 537px;
flex-shrink: 0;
border-radius: 15px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);

position: absolute;
top:2900px;
left:300px

`
const PinkBox=styled.div`
width: 522px;
height: 537px;
flex-shrink: 0;
border-radius: 15px;
background: #FF7984;
box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);

  display: flex;
  justify-content: center;
  align-items: center;

color: #FEFEFE;
font-family: Pretendard;
font-size: 32px;
font-style: normal;
font-weight: 900;
line-height: 50px; /* 156.25% */
 
position: relative;
top:150px;
left:545px;
`
const BlueBox = styled.div`
  width: 560px;
  height: 372.796px;
  transform: rotate(-6.485deg);
  flex-shrink: 0;
  border-radius: 15px;
  background: #5A5DFF;
  box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
  color: #FEFEFE;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Pretendard;
  font-size: 96px;
  font-style: normal;
  font-weight: 900;
  line-height: 160px; /* 166.667% */

  position: absolute; /* ← 여기 고침 */
  top: 2000px;
  left: 195px;
`;

const GroupImg = styled.img`
  width: 1016.477px;
  border-radius: 15px;
  display: block;
  filter: drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2));

    margin-top: 90px;
  margin-left: 600px;
`;

const GuestButton=styled.button`
width: 367px;
height: 116px;
flex-shrink: 0;
border-radius: 15px;
background: #00CE52;
color: #FEFEFE;

text-align: center;
font-family: Pretendard;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;

margin-bottom: 80px; 
`
const YellowBox=styled.div`
width: 782px;
height: 806px;
flex-shrink: 0;
border-radius: 15px;
background: #FFD15B;

box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
color: #151515;

display: flex;
  justify-content: center;
  align-items: center;

font-family: Pretendard;
font-size: 128px;
font-style: normal;
font-weight: 900;
line-height: 160px; /* 125% */

positon :relative;
`
const GreenBox=styled.div`
width: 884px;
height: 451px;
flex-shrink: 0;
border-radius: 15px;
background: #BEE317;

display: flex;
  justify-content: center;
  align-items: center;

box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
color: #151515;
font-family: Pretendard;
font-size: 88px;
font-style: normal;
font-weight: 900;
line-height: 120px; /* 136.364% */


position: absolute;
top: 867px;
    left: 800px;
`
const MainContainer = styled.div`
  padding: 0px 100px 100px;
  background: #fff;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* 벡터와 텍스트 사이 간격 */
`;

const TopText = styled.p`
  color: #1C1C1C;

font-family: Pretendard;
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: 65px; 
`;

const StrongText = styled.p`
color: #7C7C7C;

font-family: Pretendard;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: 40px;

margin-top: 0px;
`;
