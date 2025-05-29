import styled from "styled-components";

export const Vector=styled.img`
width: 69px;
height: 69px;
flex-shrink: 0;

margin-top:80px;
`
export const LineBr=styled.br`
line-height:500%;
`

export const Content=styled.div`
width: 1717px;
height: 1150px;
flex-shrink: 0;
border-radius: 52px;
border: 1px solid #FF6370;
background: #1C1C1C;
text-align:center;

margin: 80px auto; /* ✨ 가운데 정렬 + 상하 여백 */
`
export const Title=styled.p`
color: #D2D2D2;
font-family: Pretendard;
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: 65px; /* 125% */

margin-top: 5px;
margin-bottom: 10px;

`
export const Text=styled.p`
color: rgba(254, 254, 254, 0.70);
font-family: Pretendard;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 65px; /* 203.125% */

margin-top:0px;
`
export const Image=styled.img`
width: 366px;
height: 366px;
flex-shrink: 0;
aspect-ratio: 1/1;
`
export const PersonBox = styled.div`
  display: flex;
  justify-content: center;   // 가운데 정렬
  gap: 200px;                 // ImageBox 사이 간격
  width: 100%;
  flex-wrap: nowrap;         // 줄바꿈 방지 (너무 좁으면 줄바꿈됨)
`;
export const ImageBox=styled.div`
width: 490px;
height: 220px;
flex-shrink: 0;
border-radius: 20px;
background: #D2D2D2;

`
export const ImageTitle=styled.p`
color: #1C1C1C;
font-family: Pretendard;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 65px;
margin-top:5px;
margin-bottom: 5px;
`
export const ImageText=styled.p`
color: #1C1C1C;

text-align: center;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 36px;

margin-top:5px;
`
export const Thought=styled.p`
font-family: Pretendard;
font-size: 40px;
font-style: normal;
font-weight: 800;
line-height: 65px;

 white-space: nowrap;  // 줄바꿈 방지
`

export const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin-left:20px
  
`
