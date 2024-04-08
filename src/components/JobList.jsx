// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {FaMapMarker} from 'react-icons/fa'

const JobList = (props) => {
    // eslint-disable-next-line react/prop-types
    const { job } = props;
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleButton = ()=>{
        setShowFullDescription(!showFullDescription)
    }
  return (
    <div>
        <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                  <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">
                      {job.title}
                    </h3>
                  </div>
                  <div className="mb-5">
                    {showFullDescription ? job.description : `${job.description.slice(0, 90)}...`}
                    <button className="  text-indigo-500 mt-5" onClick={toggleButton}>
                        {!showFullDescription ? 'Read More' : 'Show Less'}

                    </button>
                  </div>
                  <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
                  <div className="border border-gray-100 mb-5" />
                  <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                      <FaMapMarker className='inline text-lg mb-1 mr-1' />
                      {job.location}
                    </div>
                    <a
                      href={`/job/${job.id }`}
                      className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default JobList