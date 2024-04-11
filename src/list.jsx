export default function List({
  id,
  company,
  logo,
  newlyPosted,
  featured,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  position,
  setJobFilterArr,
  jobFilterArr,
}) {
  const skillsArr = [role, level, ...languages, ...tools];
  const mappedSkillArr = skillsArr.map((item, index) => {
    return jobFilterArr.includes(item) ? (
      <div
        key={index}
        className="bg-[#5ba4a4] text-[0.8rem] rounded-md py-1 px-2 cursor-pointer text-[#EBF9F5] duration-300"
        onClick={() => {
          setJobFilterArr((prev) => prev.filter((job) => job !== item));
        }}
      >
        {item}
      </div>
    ) : (
      <div
        key={index}
        className="text-[#5ba4a4] text-[0.8rem] rounded-md py-1 px-2 cursor-pointer hover:ring-1 ring-cyan-600 duration-300 bg-[#EBF9F5]"
        onClick={() => {
          setJobFilterArr((prev) => [...prev, item]);
        }}
      >
        {item}
      </div>
    );
  });
  return (
    <div className="bg-[#feffff] shadow-[#a6c8c8a0] w-full relative z-20 max-w-[1000px] shadow-lg flex group flex-col md:flex-row md:items-center gap-5 rounded-md justify-between py-3 px-5 items-start">
      {featured && (
        <div className="bg-[#5ba4a4] w-[5px] absolute h-full left-0 rounded-s-lg top-0"></div>
      )}
      <div className="flex md:items-center items-start gap-3 flex-col md:flex-row">
        <div className="mb-[16px]">
          <img
            src={logo}
            alt={company}
            className="w-full md:top-0 md:max-w-[100px] max-w-[70px] left-[20px] md:left-0 top-[-35px] md:relative absolute"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-3">
            <p className="text-[#5ba4a4] font-medium text-[1rem]">{company}</p>
            <div className="flex items-start gap-2">
              {newlyPosted && (
                <p className="bg-[#5ba4a4] text-[0.7rem] font-medium text-[#eef6f6] rounded-[20px] px-2 py-1">
                  NEW!
                </p>
              )}
              {featured && (
                <p className="bg-[#2c3a3a] text-[0.7rem] font-medium text-[#eef6f6] rounded-[20px] px-2 py-1">
                  FEATURED
                </p>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-[#2c3a3a] group-hover:text-[#5ba4a4] duration-300 font-semibold text-[1.2rem]">
              {position}
            </h2>
          </div>
          <div className=" *:text-[#2c3a3a8d] *:text-[.8rem] flex items-center gap-3">
            <p>{postedAt}</p>
            <div className="h-[3px] w-[3px] rounded-full bg-[#2c3a3a8d]"></div>
            <p>{contract}</p>
            <div className="h-[3px] w-[3px] rounded-full bg-[#2c3a3a8d]"></div>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#00000055] visible block md:hidden md:invisible"></div>
      <div className="flex items-center gap-3 flex-wrap">{mappedSkillArr}</div>
    </div>
  );
}
