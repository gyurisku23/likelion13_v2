import Header from "../components/header/Header";
import dogImg from "../assets/images/dog.png"
import frameImg from "../assets/images/framework.png"
import kidImg from "../assets/images/kid.png"
import talkImg from "../assets/images/talk.png"
import kimImg from "../assets/images/kim.png"
import tpoImg from "../assets/images/tpo.png"
import travelImg from "../assets/images/travel.png"
import turtleImg from "../assets/images/turtle.png"
import styled from "styled-components";
import VectorImg from "../assets/images/VectorRed.png";

export default function ProjectPage() {
  return (
    <>
      <Header />
      <MainContainer>

        <Section>
          <Vector src={VectorImg}/>
          <TopText>Project</TopText>
        </Section>

        <StrongText>2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인하세요!
            <LineBr/>모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!
        </StrongText>

        <ImageSection>
            <Image src={dogImg} alt="dog"/>
            <Image src={frameImg} alt="frameImg"/>
            <Image src={kidImg} alt="kidImg"/>
            <Image src={talkImg} alt="talkImg"/>
            <Image src={kimImg} alt="kimImg"/>
            <Image src={tpoImg} alt="tpoImg"/>
            <Image src={travelImg} alt="travelImg"/>
            <Image src={turtleImg} alt="turtleImg"/>
        </ImageSection>

      </MainContainer>
    </>
  );
}
const Vector=styled.img`
width: 51px;
height: 51px;
flex-shrink: 0;
`
const LineBr=styled.br`
line-height:500%;
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

const Image = styled.img`
width: 840px;
height: 473px;
flex-shrink: 0;
aspect-ratio: 840/473;
border-radius: 25px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;

`;
const ImageSection = styled.div`
  margin: 80px 0; /* 좌우 여백은 없애고 상하 여백만 유지 */
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 가운데 정렬 (선택사항) */
  column-gap: 40px; /* 가로 간격 */
  row-gap: 60px;    /* 세로 간격 */
`;