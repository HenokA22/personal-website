import { forwardRef } from 'react'
import AboutSection from './contentContainer_components/AboutSection.jsx'
import WorkHistorySection from './contentContainer_components/WorkHistorySection.jsx'
import PersonalProjectsSection from './contentContainer_components/PersonalProjectsSection.jsx'

/**
 * This component encapsulates all scrollable content sections. Props are not used in this component.
 */
const ContentContainer = forwardRef(function ContentContainer(_props, ref) {
  return (
    <div className="content-container" ref={ref}>
      <div className="content-sections">
        <AboutSection />
        <WorkHistorySection />
        <PersonalProjectsSection />
      </div>
    </div>
  )
})

export default ContentContainer
