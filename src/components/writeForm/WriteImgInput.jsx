import styled from "styled-components";
import CameraIcon from "../../assets/CameraIcon.svg";

function WriteImgInput({ setImage }) {
  const handleImgInputClick = () => {
    const imgInput = document.getElementById("img");
    if (imgInput) imgInput.click();
  };

  const checkIsValid = (file) => {
    const SIZE_LIMIT = 5 * 1024 * 1024; // 5MB

    if (file.size > SIZE_LIMIT) {
      alert("이미지 파일 크기는 5MB 이하여야 합니다.");
      return false;
    }
    return true;
  };

  const showPreview = (file) => {
    document.getElementById("preview").src = URL.createObjectURL(file);
    document.getElementById("preview").style = "display:block";
    document.getElementById("default").style = "display:none";
  };

  const handleImgInput = () => {
    const fileInput = document.getElementById("img");
    const file = fileInput.files[0];
    setImage(file);

    if (checkIsValid(file) === false) return;
    showPreview(file);
  };
  return (
    <>
      <PreviewWrapper onClick={handleImgInputClick}>
        <Preview id="preview" alt="" style={{ display: "none" }} />
        <img id="default" src={CameraIcon} alt="" />
      </PreviewWrapper>
      <input
        id="img"
        name="img"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImgInput}
      />
    </>
  );
}

export default WriteImgInput;

const PreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Preview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
