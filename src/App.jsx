import { useEffect, useState } from "react";
import data from "./assets/data.json";
import List from "./list";


export default function App() {
  const [listArr, setlistArr] = useState(data);
  const [jobFilterArr, setJobFilterArr] = useState([]);
  useEffect(() => {
    const filteredArr = data.filter((jobs) => {
      return jobFilterArr.every(filter => {
        if (
          jobs.role.includes(filter) ||
          jobs.level.includes(filter) ||
          jobs.languages.includes(filter) ||
          jobs.tools.includes(filter)
        ){return jobs}
      })
    });
    if (jobFilterArr.length)
    {
      setlistArr(filteredArr);
    } else
    {
      {
      setlistArr(data)
    }}
  }, [jobFilterArr]);
  const mappedArr = listArr.map((item) => {
    return (
      <List
        key={item.id}
        id={item.id}
        company={item.company}
        contract={item.contract}
        featured={item.featured}
        languages={item.languages}
        level={item.level}
        location={item.location}
        newlyPosted={item.new}
        position={item.position}
        postedAt={item.postedAt}
        logo={item.logo}
        tools={item.tools}
        role={item.role}
        setJobFilterArr={setJobFilterArr}
        jobFilterArr={jobFilterArr}
      />
    );
  });

  const filterArr = jobFilterArr.map((jobs, index) => {
    return (
      <div
        key={index}
        className="flex group items-center gap-0 rounded-lg relative justify-center overflow-hidden"
      >
        <div className="text-[#5ba4a4] bg-[#EBF9F5] hover:bg-[#5ba4a4] hover:text-[#ebf9f5]  text-[0.8rem] py-1 px-2 cursor-pointer duration-300">
          {jobs}
        </div>
        <div
          className="group-hover:bg-slate-950 flex  justify-center duration-300 items-center w-[30px] py-1 px-2 bg-[#5ba4a4]"
          onClick={() =>
            setJobFilterArr((prev) => prev.filter((item) => item !== jobs))
          }
        >
          <div className="h-[19px] w-[2px] bg-white rotate-[43deg]"></div>
          <div className="h-[19px] w-[2px] bg-white -rotate-[43deg]"></div>
        </div>
      </div>
    );
  });
  return (
    <>
      <header className="bg-[#5ba4a4] w-full min-h-[25vh] relative"></header>
      {jobFilterArr.length > 0 && (
        <div className="flex justify-center items-center sm:px-5 px-3 -translate-y-[30px] ">
          <div className="flex items-center justify-between max-w-[1000px] py-2 px-4 w-full bg-[#fefefe] rounded-lg shadow-[#7b8e8e] shadow-lg">
            <div className="flex items-center gap-3 flex-wrap">{filterArr}</div>
            <div
              className="hover:underline p-2 cursor-pointer hover:text-[#5ba4a4] text-[#7b8e8e]"
              onClick={() => setJobFilterArr([])}
            >
              clear
            </div>
          </div>
        </div>
      )}

      <section className="py-12 sm:px-5 px-3 flex justify-center items-center">
        <div className="flex flex-col items-center w-full justify-center md:gap-5 gap-16">
          {mappedArr}
        </div>
      </section>
    </>
  );
}
