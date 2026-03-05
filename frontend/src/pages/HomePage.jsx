import React from 'react'
import HomePartner from '../components/HomePartner'
import HomeHero from '../components/HomeHero'
import HomeArtical from '../components/HomeArtical'
import HomeMatch from '../components/HomeMatch'
import HomeGame from '../components/HomeGame'
import HomeGameYear from '../components/HomeGameYear'
import HomeTournaments from '../components/HomeTournaments'
import HomeCommunity from '../components/HomeCommunity'
import HomeTeam from '../components/HomeTeam'
import HomePlayerWeek from '../components/HomePlayerWeek'

const HomePage = () => {
  return (
    <>
    {/* hero section */}
    <HomeHero />

    <HomeArtical />
    <HomeMatch />
    <HomeGame />
    <HomeGameYear />
    <HomeTournaments />
    <HomeCommunity />
    <HomeTeam />
    <HomePlayerWeek />

    <HomePartner />
    </>
  )
}

export default HomePage
