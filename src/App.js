import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./componants/Navbar";
import Filter from "./componants/Filter";
import Cards from "./componants/Cards";
import { toast } from "react-toastify/dist/components";
import Spinner from "./componants/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output -->
      setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi error hai");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData} />
      </div>

      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
};

export default App;
