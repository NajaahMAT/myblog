import React from 'react'
import ProjectItem from './ProjectItem'
import reporting from '../public/assets/projects/reporting.webp'
import microimage from '../public/assets/projects/microimage.jpg'
import pickme from '../public/assets/projects/pickme.jpg'
import epos from '../public/assets/projects/epos.jpg'
import npos from '../public/assets/projects/npos.jpg'
import cloudBackup from '../public/assets/projects/cloudbackup.png'

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I have built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem
                    title='Reporting System'
                    backgroundImage = {reporting}
                    description = 'Technologies Used: Golang, MongoDB'
                    projectUrl = '/reporting'
                />
                <ProjectItem
                    title='NeutriPOS'
                    backgroundImage = {npos}
                    description = 'Technologies Used: Golang, MongoDB'
                    projectUrl = '/npos'
                />
                <ProjectItem
                    title='ElectriPOS'
                    backgroundImage = {epos}
                    description = 'Technologies Used: Golang, MongoDB'
                    projectUrl = '/epos'
                />
                <ProjectItem
                    title='Cloud Backup Management'
                    backgroundImage = {cloudBackup}
                    description = 'Technologies Used: Golang, MongoDB'
                    projectUrl = '/cloudbkup'
                />
                <ProjectItem
                    title='PickMe Driver API'
                    backgroundImage = {pickme}
                    description = 'Technologies Used: Golang, PHP, MySQL'
                    projectUrl = '/pickme'
                />
                <ProjectItem
                    title='Human Capital Management System'
                    backgroundImage = {microimage}
                    description = 'Technologies Used: ASP.NET, C#, JavaScript, MicrosoftSQL'
                    projectUrl = '/hcm'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects
