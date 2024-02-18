import { useEffect, useState } from "react";
import axios from "axios";
import instance from "../../axios_interceptor";

import Template from "../../components/Template";
import UserHeader from "./UserHeader";
import UserSection from "./UserSection";
import data from "../../data/myPage.json";

const MyPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/users/my-page");
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Template>
      {userData && userData.result && (
        <>
          <UserHeader data={userData.result} />
          <UserSection data={userData.result} />
        </>
      )}
    </Template>
  );
};

export default MyPage;
