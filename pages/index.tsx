import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Mission from '../components/Mission'
import Projects from '../components/Projects'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import { fetchProjects } from '../lib/fetchProjects'
import { Content, Project, Service } from '../typings'
import { fetchContent } from '../lib/fetchContent'
import { fetchServices } from '../lib/fetchServices'
import Hero from '../components/Hero'

interface Props{
  projects:Project[]
  services:Service[]
  content:Content
}

const Home = ({projects, services, content}:Props) => {
  
  return (
    <div className="bg-white">
      <Head>
        <title>Set Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     <Hero
     content={content}
     />
    <Services
      services={services}
    />
    <Mission 
      developmentTitle={content.developmentTitle}
      developmentDescription={content.developmentDescription}
    />
    <Projects
      projects={projects}
    />
    <ContactUs />
    <Footer/>
    </div>
  )
}

export default Home

export const getServerSideProps:GetStaticProps = async (context) => {
  const projects = await fetchProjects()
  const content = await fetchContent()
  const services = await fetchServices()

  return {
    props: {
      projects,
      content,
      services,
    }, // will be passed to the page component as props
  }
}