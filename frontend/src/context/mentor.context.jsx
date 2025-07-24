import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const MentorContext = createContext();

function MentorProvider({ children }) {
  const [mentors, setMentors] = useState();
  console.log(`mentors data is : ${mentors}`)

useEffect(()=>{
  const fetchMentors = async () => {
      try {
        const response = await axiosInstance.get(`/user/get-mentors`, {
          withCredentials: true,
        });
        console.log(response)
        if (response.data && response.data.mentors) {
          setMentors(response.data.mentors);
        }
      } catch (error) {
        console.error("Failed to fetch user on refresh", error);
      }
    };
fetchMentors();
  }, []);

  return (
    <MentorContext.Provider value={{ mentors }}>
      {children}
    </MentorContext.Provider>
  );
}

export { MentorContext };
export default MentorProvider;
