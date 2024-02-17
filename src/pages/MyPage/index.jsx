import { useEffect, useState } from "react";
import axios from "axios";

import Template from "../../components/Template";
import UserHeader from "./UserHeader";
import UserSection from "./UserSection";
import data from "../../data/myPage.json";

const MyPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users/my-page");
        console.log(response);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Template>
      <UserHeader data={data.result} />
      <UserSection data={data.result} />
    </Template>
  );
};

export default MyPage;
