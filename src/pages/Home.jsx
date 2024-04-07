import React from 'react'

import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'

const Home = () => {
  return (
    <div>
    
      <Hero />
      <HomeCard />
      <JobListing />
      <ViewAllJobs />

      
    </div>
  )
}

export default Home