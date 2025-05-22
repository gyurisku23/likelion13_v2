import { Button, ButtonContent} from "./FeedBackButtons.styles";
function FeedbackButton(){

    return(
        <ButtonContent>
            <Button>텍스트 후기</Button>
            <Button>이미지 후기 작성</Button>
            <Button>소감문 제출 </Button>
        </ButtonContent>
    )
}
export default FeedbackButton;
