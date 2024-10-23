import React from 'react'
import OrganisationPageSkeletonLeft from './OrganisationPageSkeletonLeft'
import OrganisationPageSkeletonRight from './OrganisationPageSkeletonRight'

function OrganisationPageSkeleton() {
  return (
    <div className='flex h-full w-full'>
        <div className='flex w-2/6 h-full max-h-screen overflow-y-auto'><OrganisationPageSkeletonLeft/></div>
        <div className='flex w-4/6 h-full max-h-screen overflow-y-auto'><OrganisationPageSkeletonRight/></div>
    </div>
  )
}

export default OrganisationPageSkeleton