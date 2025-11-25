import { createContext, useEffect, useState } from "react";
import axiosInstance from '../utils/axiosInstance';
const MentorContext = createContext();

function MentorProvider({ children }) {
  const [mentors, setMentors] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  console.log('this is all mentors: ', mentors)
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axiosInstance.get(`/user/get-mentors`, {
          withCredentials: true,
        });

        if (response.data?.mentors) {
          setMentors(response.data.mentors);
        } else {
          console.warn("No mentors found in response");
          setMentors([]);
        }
      } catch (err) {
        console.error("Failed to fetch mentors:", err);
        setError(err);
        setMentors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <MentorContext.Provider value={{ mentors, loading, error }}>
      {children}
    </MentorContext.Provider>
  );
}

export { MentorContext };
export default MentorProvider;
