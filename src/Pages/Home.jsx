import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/Section'

const Home = () => {
  return (<>
    <body class="flex flex-col min-h-screen ">
  <header>
   <Navbar/>
  </header>
  <main class="flex-grow">
    <Section/>
  </main>
  <footer>
   <Footer/>
  </footer>
</body>
      </>
  )
}

export default Home
