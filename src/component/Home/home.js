import React from 'react'
import './home.css'
import HomeHead from './Home-head/home-head';
import HomeLast from './Home-last/home-last';
const Home = () => {
  return (
    <div className="home">
      <HomeHead/>
      <HomeLast/>
    </div>
  )
}

export default Home
