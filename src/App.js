import React, { useState, useEffect } from 'react';
import data from './assets/data.json';

import JobBoardComponent from './Components/JobBoardComponent';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data) , []);

  const filterFunc = ({role, level, tools, languages}) => {
    if(filters.length === 0){
      return true;
    }

    const tags = [role, level];

    if(tools){
      tags.push(...tools);
    }

    if(languages){
      tags.push(...languages);
    }

    return filters.every(filter => tags.includes(filter));

  } 

  const handleTagClick = (tag) => {
    // avoid readding tags
    if(filters.includes(tag)) return;
    setFilters([...filters, tag])
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJob = jobs.filter(filterFunc);

  return (
    <>
      <header className="bg-teal-500 mb-12">
        <img className="w-full hidden lg:block" src="images/bg-header-desktop.svg" alt="header background"/>
        <img className="w-full block lg:hidden" src="images/bg-header-mobile.svg" alt="header background"/>
      </header>
      
      <div className="container mx-auto">
        {
          filters.length > 0 && 
          <div className="flex bg-white shadow-md -mt-20 mb-16 p-6 rounded relative z-20 ">
          {filters.map((filter) => 
            <span onClick={() => {handleFilterClick(filter)}} className="text-teal-500 bg-teal-100 font-bold mr-4 lg:mb-0 rounded cursor-pointer h-8 flex items-center"><span className="px-2">{filter}</span> <span className="h-8 bg-teal-500 w-5 text-white flex items-center justify-center rounded hover:bg-gray-700">X</span></span>
        )}
        <button onClick={clearFilters} className="font-bold text-gray-700 ml-auto hover:text-teal-500 hover:underline">clear</button>
        </div>
        }
      {
        jobs.length === 0 ? (
          <p>Job is Fetching.....</p>
        ) : (
          filteredJob.map((job) => <JobBoardComponent handleTagClick = {handleTagClick} job ={ job } key= { job.id } />)
        )
      }
      </div>
    </>
  );
}

export default App;
