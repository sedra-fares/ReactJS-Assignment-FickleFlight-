import { useState } from 'react'
import './App.css'
import TopHeader from './components/TopHeader/TopHeader'
import SearchHeader from './components/SearchHeader/SearchHeader'
import RecentSearches from './components/RecentSearches'
import TripCategories from './components/TripCategories'
import RecommendedHolidays from './components/RecHolidays'
import PopularDestinations from './components/PopularDest'

function App() {
 

  return (
    <>
     <TopHeader/>
     <SearchHeader/>
     <RecentSearches/>
     <TripCategories/>
     <PopularDestinations/>
     <RecommendedHolidays/>
    </>
  )
}

export default App
