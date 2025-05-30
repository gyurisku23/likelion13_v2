import { Content , Title, Text, ImageBox, Image, ImageTitle, ImageText} from "./FeedbackCards.styles"
import {Thought, PersonBox, Feedback, LineBr, Vector} from "./FeedbackCards.styles"
import boyImg from "../../assets/images/boy.png";
import girlImg1 from "../../assets/images/girl1.png";
import girlImg2 from "../../assets/images/girl2.png";
import VectorImg from "../../assets/images/VectorWhite.png";

export default function FeedbackCard(){
    return(
        <Content>
            <Vector src={VectorImg}/>
            <Title>성실히 후기를 작성 해주신 분들에게는!</Title>
            <Text>딱히 별건 없지만 미래의 해커톤 발전에 큰 도움이 되는데 많은 후기 작성 부탁합니다.</Text>
            <PersonBox>
                <Feedback>
                    <Image src={boyImg} alt="boy"/>
                    <Thought style={{ color: "#FF6370" }}>정말 최고의 경험!</Thought>
                    <ImageBox>
                        <ImageTitle>진짜 완전 백퍼 진심</ImageTitle>
                        <ImageText>힘들긴 해도 그만큼의 보람이 있었어요.<LineBr/>여러분들도 그랬나요?</ImageText>
                    </ImageBox>
                </Feedback>
                
                <Feedback>
                    <Image src={girlImg1} alt="girl1"/>
                    <Thought style={{ color:" #01D354"}}>저 진짜 한 번 더하고 싶어요</Thought>
                    <ImageBox>
                        <ImageTitle>이건 백퍼 진심은 아님</ImageTitle>
                        <ImageText>한 번 더하기엔 몸이 버티질 못할 것 같아요. 
                        <LineBr/>중앙톤 열심히 해야지!</ImageText>
                    </ImageBox>
                </Feedback>

                <Feedback>
                    <Image src={girlImg2} alt="girl2"/>
                    <Thought style={{ color:" #FFB801" }}>밤샘의 가치가 있다</Thought>
                    <ImageBox>
                        <ImageTitle>요건 80퍼센트 진심</ImageTitle>
                        <ImageText>밤샘은 건강에 좋지 않기 때문입니다.<LineBr/> 밤샘하지 않도록 미리미리 작업합시다!</ImageText>
                    </ImageBox>
                </Feedback>
                
            </PersonBox>

        </Content>
    )
}