import React from 'react';

const JobBoardComponent = ({ job: {id, company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools}, handleTagClick }) => {
    const tags = [role, level, ...languages, ...tools];

    return(
        <div className={`flex flex-col bg-white shadow-lg my-16 p-6 rounded ${featured && 'border-l-4 border-teal-500 border-solid'} lg:flex-row lg:my-4`}>
            <div>
                <img className="-mt-16 lg:mt-0 mb-4 h-20 w-20 lg:h-24 lg:w-24 lg:mb-0" src={logo} alt={company} />
            </div>
            <div className="ml-4 flex flex-col justify-between">
                <h3 className="font-bold text-teal-500">
                    {company}
                    {isNew && <span className="bg-teal-500 text-teal-100 text-lg font-bold m-2 py-1 px-2 rounded-full">NEW!</span>}
                    {featured && <span className="bg-gray-800 text-white text-lg font-bold py-1 px-2 rounded-full">FEATURED</span>}
                </h3>
                <h2 className="font-bold text-xl my-2 lg:my-0 cursor-pointer hover:text-teal-500">{position}</h2>
                <p className="text-gray-700">{postedAt} · {contract} · {location}</p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-400 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
                {
                    tags ? (
                        tags.map((tag) => <span onClick={() => {handleTagClick(tag)}} className="text-teal-500 bg-teal-100 font-bold mr-4 mb-4 lg:mb-0 p-2 rounded cursor-pointer hover:bg-teal-500 hover:text-white">{tag}</span> )
                    ) : ('')
                }
            </div>
        </div>
    )};

export default JobBoardComponent;