import Approach from '@/components/approach'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Grid from '@/components/grid'
import Hero from '@/components/hero'
import RecentProjects from '@/components/recent-projects'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import React from 'react'

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default Home
