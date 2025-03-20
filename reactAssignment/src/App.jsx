import { useState } from 'react'
import './App.css'
import TopHeader from './components/TopHeader/TopHeader'
import SearchHeader from './components/SearchHeader/SearchHeader'
import RecentSearches from './components/RecentSearches'
import TripCategories from './components/TripCategories'
import RecommendedHolidays from './components/RecHolidays'
import PopularDestinations from './components/PopularDest'
import PopularStays from './components/PopularStays'
import Newsletter from './components/NewsLetter'
import Footer from './components/Footer'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
 

  return (
    <>
     <TopHeader/>
     <SearchHeader/>
     <RecentSearches/>
     <TripCategories/>
     <PopularDestinations/>
     <RecommendedHolidays/>
    <PopularStays/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
