import React, { useState, useEffect } from "react";
import bookmark from "./black bookmark.png";
import ybookmark from "./bookmark.png";
import website from "./website.png";
import email from "./gmail.png";
import community from "./chat-bubble.png";
import twitter from "./twitter.png";
import blog from "./blog.png";
import { useParams } from "react-router-dom";


function OrganisationPageSkeletonRight() {
  const { id } = useParams();
  const [organisation, setOrganisation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
 

  
  useEffect(() => {
    const bookmarkedOrgs = JSON.parse(localStorage.getItem('bookmarkedOrgs')) || [];
    setIsBookmarked(bookmarkedOrgs.includes(id));
  }, [id]);
  const toggleBookmark = (e) => {
   // e.stopPropagation(); // Prevents the click from triggering the card's click handler
    const bookmarkedOrgs = JSON.parse(localStorage.getItem('bookmarkedOrgs')) || [];
    if (bookmarkedOrgs.includes(id)) {
      const updatedBookmarks = bookmarkedOrgs.filter(orgId => orgId !== id);
      localStorage.setItem('bookmarkedOrgs', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      bookmarkedOrgs.push(id);
      localStorage.setItem('bookmarkedOrgs', JSON.stringify(bookmarkedOrgs));
      setIsBookmarked(true);
    }
  };

  useEffect(() => {
    const fetchOrganisations = async () => {
      try {
        const response = await fetch("http://localhost:3690/api/items");
        const data = await response.json();
        const selectedOrganisation = data.data.find((org) => org._id === id);
        setOrganisation(selectedOrganisation);
        console.log(selectedOrganisation.url);
        const years = Object.keys(selectedOrganisation.years);
        setSelectedYear(years[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the organisations:", error);
        setLoading(false);
      }
    };
    fetchOrganisations();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!organisation) {
    return <div>Error loading organisation</div>;
  }
    const handleYearClick = (year) => {
        setSelectedYear(year);
    }
    const years = Object.keys(organisation.years);
    let nfyears=years.length;
    let lyears=false;
    if(years.length>2)  lyears=true;
    const selectedYearData = organisation.years[selectedYear];

    const navigateHandler =(url) =>{
      //window.location.href=url;
    }
  return (
    <div className="w-full h-full flex items-center justify-center bg-lblack_bg">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-white font-light font-outfit text-[32px] mt-4 mb-4 px-12">
          {organisation.name}
        </div>
        <div className="w-5/6 h-auto rounded-large border-2 border-black border-solid bg-gray_bg flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-auto flex flex-col items-center justify-center ">
              <img
                className="w-[150px] h-[80px] mb-6 mt-10 p-2" style={{ backgroundColor: organisation.image_background_color}}
                src={organisation.image_url}
              />
              <span className="relative left-[300px] w-[60px] h-[60px] top-[-130px]" onClick={toggleBookmark}>
                <img src={isBookmarked ? ybookmark : bookmark}/>
              </span>
              <p className="text-white font-outfit font-light text-[16px] mb-10 ">
                {organisation.description}
              </p>
              <div className="w-5/6 h-0.5 bg-white"></div>
            </div>
            <div className="w-full h-[100px] mt-2 flex items-center justify-center " onClick={navigateHandler(organisation.url)}>
              <a href={organisation.url}>
                <div className="w-[130px] h-[40px] bg-yellow_bg rounded-xl flex items-center cursor-pointer " >
                <img className="w-[25px] h-[25px] ml-2" src={website} />
                <div className="w-[1.5px] h-[40px] bg-black ml-2"></div>
                <p className="font-outfit text-[18px] ml-2">Visit Site</p>
              </div>
              </a>
              <div className="flex gap-4 ml-20">
              {organisation.contact_email && (
                <a href={organisation.contact_email}>
                <div className="w-[45px] h-[45px] bg-lblack_bg rounded-xl flex items-center justify-center cursor-pointer">
                  <img className="w-[25px] h-[25px]" src={email} />
                </div>
                </a>
                )}
                {organisation.irc_channel && (
                  <a href={organisation.irc_channel}>
                  <div className="w-[45px] h-[45px] bg-lblack_bg rounded-xl cursor-pointer flex items-center justify-center">
                    <img className="w-[25px] h-[25px]" src={community} />
                  </div>
                </a>
                )}
                {organisation.blog_url &&(
                  <a href={organisation.blog_url}>
                <div className="w-[45px] h-[45px] bg-lblack_bg rounded-xl cursor-pointer flex items-center justify-center">
                  <img className="w-[30px] h-[30px]" src={blog} />
                </div>
                </a>
                )}
                {organisation.twitter_url &&(
                  <a href={organisation.twitter_url}>
                <div className="w-[45px] h-[45px] bg-lblack_bg rounded-xl cursor-pointer flex items-center justify-center">
                  <img className="w-[30px] h-[30px]" src={twitter} />
                </div>
                </a>
                )}
              </div>
            </div>
            <div className="w-full h-auto flex items-center justify-center">
              <div className="w-1/2 h-auto flex flex-col border-r-[1px] border-white border-solid">
                <div className="w-full h-auto flex flex-col ml-4 items-center justify-center">
                  <h1 className="text-white font-bold font-outfit text-xl">
                    Category
                  </h1>
                  <div className=" w-full h-auto flex items-center justify-center">
                    <div className="w-[200px] h-[25px] mt-4 mb-10 border-yellow_bg border-solid border-2 flex items-center justify-center font-outfit text-white text-[14px]">
                      {organisation.category}
                    </div>
                  </div>
                  <div className="w-5/6 h-[0.5px] bg-white"></div>
                </div>
                <div className="w-full h-auto flex flex-col ml-4 items-center mt-6">
                  <h1 className="text-white font-bold font-outfit text-xl text-center ">
                    Years
                  </h1>
                  <div className={`w-full h-auto px-16 py-4 gap-6 items-center justify-center ${lyears ? 'grid grid-cols-3' :'flex'}`}>
                    {years.map((year, index) => (
                      <div className="w-[45px] h-[20px] bg-yellow_bg rounded-[5px] font-outfit text-[16px] flex items-center justify-center">
                        {year}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-auto flex flex-col items-center">
                <h1 className="text-white font-bold font-outfit text-xl">
                  Technologies
                </h1>
                <div className=" w-full h-auto grid grid-cols-3 col-auto gap-y-2 gap-x-2 px-8 py-4">
                    {organisation.technologies.map((technology, index) => {
                      let divWidth = "w-[70px]";
                      if (technology.length > 5) divWidth = "w-[100px]";
                      else if (technology.length > 10) divWidth = "w-[130px]";
                      return (
                        <div
                          className={`${divWidth} h-[25px] py-2 rounded-md border-black border-solid border-2 flex items-center justify-center font-outfit font-light text-yellow_bg text-[14px]`}
                        >
                          {technology}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="w-full h-auto p-4 bg-white mt-10">
              <div className="w-full h-auto flex flex-col ml-4 items-center mt-6">
                <h1 className=" font-bold font-outfit text-xl text-center u">
                    Topics
                </h1>
                <div className="w-full h-auto mt-4 px-16 py-4">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                      {organisation.topics.map((topic, index) => {
                        let divWidth = "w-[70px]";
                        if (topic.length > 8) {
                          divWidth = "w-[120px]";
                        }
                        if (topic.length > 15) {
                          divWidth = "w-[150px]";
                        }
                        if (topic.length > 20) {
                          divWidth = "w-[200px]";
                        }
                        return (
                          <div
                            key={index}
                            className={` ${divWidth} h-auto bg-lgray_bg rounded-[5px] font-outfit text-[14px] flex items-center justify-start px-2 py-1`}
                          >
                            {topic}
                          </div>
                        );
                      })}
                    </div>
                  </div>
              </div>

            </div>
             {/* <div className="w-full h-auto flex items-center justify-center">
              <div className="w-1/2 h-auto flex flex-col border-r-[1px] border-white border-solid">
                <div className="w-full h-auto flex flex-col ml-4 items-center justify-center">
                  <h1 className="text-white font-bold font-outfit text-xl">
                    Category
                  </h1>
                  <div className=" w-full h-auto flex items-center justify-center">
                    <div className="w-[200px] h-[25px] mt-4 mb-10 border-yellow_bg border-solid border-2 flex items-center justify-center font-outfit text-white text-[14px]">
                      {organisation.category}
                    </div>
                  </div>
                  <div className="w-5/6 h-[0.5px] bg-white"></div>
                </div>
                <div className="w-full h-auto flex flex-col ml-4 items-center mt-6">
                  <h1 className="text-white font-bold font-outfit text-xl text-center ">
                    Years
                  </h1>
                  <div className={`grid grid-cols-${nfyears} w-full h-auto px-16 py-4 gap-6 items-center justify-center`}>
                    {years.map((year, index) => (
                      <div className="w-[45px] h-[20px] bg-yellow_bg rounded-[5px] font-outfit text-[16px] flex items-center justify-center">
                        {year}
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
              {/*<div className="w-1/2 h-auto flex flex-col">
                <div className="w-full h-auto flex flex-col ml-4 items-center">
                  <h1 className="text-white font-bold font-outfit text-xl">
                    Technologies
                  </h1>
                  <div className=" w-full h-auto grid grid-cols-3 col-auto gap-y-2 gap-x-2 px-8 py-4">
                    {organisation.technologies.map((technology, index) => {
                      let divWidth = "w-[70px]";
                      if (technology.length > 5) divWidth = "w-[100px]";
                      else if (technology.length > 10) divWidth = "w-[130px]";
                      return (
                        <div
                          className={`${divWidth} h-[25px] py-2 rounded-md border-black border-solid border-2 flex items-center justify-center font-outfit font-light text-yellow_bg text-[14px]`}
                        >
                          {technology}
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-5/6 h-[0.5px] bg-white"></div>
                </div>
                <div className="w-full h-auto flex flex-col ml-4 items-center mt-6">
                  <h1 className="text-white font-bold font-outfit text-xl text-center">
                    Topics
                  </h1>
                  <div className="w-full h-auto px-16 py-4">
                    <div className="grid grid-flow-row-dense grid-cols-3 gap-x-4 gap-y-4">
                      {organisation.topics.map((topic, index) => {
                        let divWidth = "w-[70px]";
                        let colSpan = "";
                        if (topic.length > 10) {
                          divWidth = "w-[100px]";
                          colSpan = "col-span-2";
                        }
                        return (
                          <div
                            key={index}
                            className={` ${divWidth} ${colSpan} h-auto bg-white rounded-[5px] font-outfit text-[14px] inline-flex flex items-center justify-center px-2 py-1`}
                          >
                            {topic}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-full h-auto flex flex-col mt-20 items-center justisy-center mb-10">
          <h1 className="text-white font-outfit text-[36px] font-normal">
            Past Projects
          </h1>
          <div className="flex mt-8 gap-8">
          {years.map((year, index) => (
            <div className={`w-[55px] h-[30px] bg-yellow_bg rounded-[5px] font-outfit text-[18px] flex items-center justify-center cursor-pointer ${
                selectedYear === year ? 'opacity-100' : 'opacity-20'}`}onClick={() => handleYearClick(year)}>
              {year}
            </div>))}
            {/* <div className="w-[55px] h-[30px] bg-yellow_bg rounded-[5px] font-outfit text-[18px] flex items-center justify-center cursor-pointer">
              2022
            </div>
            <div className="w-[55px] h-[30px] bg-yellow_bg rounded-[5px] font-outfit text-[18px] flex items-center justify-center cursor-pointer">
              2021
            </div>
            <div className="w-[55px] h-[30px] bg-yellow_bg rounded-[5px] font-outfit text-[18px] flex items-center justify-center cursor-pointer">
              2020
            </div> */}
          </div>
          <div className="w-full h-auto flex flex-col gap-14 items-center mt-14">
            {selectedYearData.projects.map((project,index) =>{
                return(
                <div className="w-5/6 h-[300px] bg-gray_bg rounded-3xl flex">
                <div className="w-full h-full px-14 py-8 flex flex-col">
                  <h1 className="text-white font-outfit font-semibold text-[20px]">
                    {project.title}
                  </h1>
                  <p className="text-yellow_bg font-outfit font-normal text-[18px] pt-4">
                    {project.student_name}
                  </p>
                  <p className="text-white font-outfit font-light text-[16px] pt-4">
                    {project.short_description}
                  </p>
                  <div className="flex justify-start gap-8 mt-8">
                    <a className="w-[120px] h-[40px] flex items-center justify-center rounded-md border-[1.5px] border-black border-solid text-yellow_bg font-outfit font-semibold text-[16px]" href={project.project_url}>
                      More details
                    </a>
                    <a className="w-[90px] h-[40px] flex items-center justify-center rounded-md border-[1.5px] border-black border-solid text-black bg-yellow_bg font-outfit font-semibold text-[17px]" href={project.code_url}>
                      Code
                    </a>
                  </div>
                </div>
              </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganisationPageSkeletonRight;
