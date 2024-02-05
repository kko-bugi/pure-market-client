import Template from "../../components/Template";
import UserHeader from "./UserHeader";
import UserSection from "./UserSection";

// 임시 데이터
const data = {
  nickname: "미야옹",
  profileImage:
    "https://storage.googleapis.com/pure-market-bucket/users/708af857-b847-4f3e-b3e5-7ac1e1194b48루피.png",
  produceList: [
    {
      produceIdx: 0,
      title:
        "판매글 데이터임판매글 데이터임판매글 데이터임판매글 데이터임판매글 데이터임판매글 데이터임판매글 데이터임판매글 데이터임판매글 데이터임",
      produceImage:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
      createdDate: "2023/12/28",
    },
    {
      produceIdx: 1,
      title: "판매글 데이터임",
      produceImage:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
      createdDate: "2023/12/28",
    },
    {
      produceIdx: 2,
      title: "판매글 데이터임",
      produceImage:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
      createdDate: "2023/12/28",
    },
    {
      produceIdx: 3,
      title: "판매글 데이터임",
      produceImage:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
      createdDate: "2023/12/28",
    },
  ],
  recipeList: [
    {
      recipeIdx: 0,
      title: "레시피글 데이터임",
      recipeImage:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
      createdDate: "2023/12/28",
    },
    {
      recipeIdx: 1,
      title:
        "레시피글 데이터임레시피글 데이터임레시피글 데이터임레시피글 데이터임레시피글 데이터임레시피글 데이터임",
      recipeImage:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
      createdDate: "2023/12/28",
    },
    {
      recipeIdx: 2,
      title: "레시피글 데이터임",
      recipeImage:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
      createdDate: "2023/12/28",
    },
  ],
  giveawayList: [
    // {
    //   giveawayIdx: 0,
    //   title: "나눔글 데이터임",
    //   giveawayImage:
    //     "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
    //   createdDate: "2023/12/28",
    // },
    // {
    //   giveawayIdx: 1,
    //   title: "나눔글 데이터임",
    //   giveawayImage:
    //     "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
    //   createdDate: "2023/12/28",
    // },
    // {
    //   giveawayIdx: 2,
    //   title: "나눔글 데이터임",
    //   giveawayImage:
    //     "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
    //   createdDate: "2023/12/28",
    // },
    // {
    //   giveawayIdx: 3,
    //   title: "나눔글 데이터임",
    //   giveawayImage:
    //     "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/advices/166557187462755279.jpg?gif=1&w=480",
    //   createdDate: "2023/12/28",
    // },
  ],
};

const MyPage = () => {
  return (
    <Template>
      <UserHeader data={data} />
      <UserSection data={data} />
    </Template>
  );
};

export default MyPage;
