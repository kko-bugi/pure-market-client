import styled from "styled-components";

import CloseIcon from "../../assets/CloseBtnImg.png";
import CameraIcon from "../../assets/CameraIcon.svg";

export default function SingUp() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>회원가입</Title>
          <CloseBtn>
            <img src={CloseIcon} />
          </CloseBtn>
        </Header>
        <ProfileWrapper>
          <Profile>
            <img src={CameraIcon}></img>
          </Profile>
        </ProfileWrapper>
        <Form>
          <InputWrapper>
            <InputTitle>
              닉네임<span>*</span>
            </InputTitle>
            <InputBtnWrapper>
              <Input required type="text" placeholder="닉네임을 입력해주세요" />
              <Button>중복 확인</Button>
            </InputBtnWrapper>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>
              아이디<span>*</span>
            </InputTitle>
            <InputBtnWrapper>
              <Input required type="text" placeholder="아이디를 입력해주세요" />
              <Button>중복 확인</Button>
            </InputBtnWrapper>
          </InputWrapper>
          <InputWrapper>
            <InputTitle>
              비밀번호<span>*</span>
            </InputTitle>
            <Input
              required
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>
              비밀번호 확인<span>*</span>
            </InputTitle>
            <Input
              required
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </InputWrapper>
          <InputWrapper>
            <InputTitle>
              핸드폰 번호<span>*</span>
            </InputTitle>
            <Input required type="text" placeholder="‘-’ 없이 숫자만" />
          </InputWrapper>
          <BtnWrapper>
            <SignUpBtn>가입 완료하기</SignUpBtn>
          </BtnWrapper>
        </Form>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

const Container = styled.div`
  width: 400px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  flex: 1;
`;

const CloseBtn = styled.span``;

const ProfileWrapper = styled.div`
  //이거 안하면 프로필 원이 눌림
`;

const Profile = styled.div`
  width: 104px;
  height: 104px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 32px;
    height: 32px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputTitle = styled.h3`
  font-size: 18px;
  span {
    color: #ff0000;
  }
  margin-bottom: 5px;
`;

const InputBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #bababa;
  padding: 3px 0px;
  flex: 1;
  &::placeholder {
    color: #bababa;
  }
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 78px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid #0a5226;
  background-color: white;
  font-size: 14px;
  font-family: inherit;
  color: #4da36f;
  cursor: pointer;
  padding: 0;
  margin-left: 15px;

  &:hover {
    background-color: #d9d9d9;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0 40px 0;
`;

const SignUpBtn = styled.button`
  width: 360px;
  height: 60px;
  background-color: #d6e9dd;
  border-radius: 37.5px;
  font-size: 20px;
  color: #ffffff;
  border: transparent;
`;
