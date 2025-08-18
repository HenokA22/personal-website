import { forwardRef } from 'react'
import AboutSection from './contentContainer_componets/AboutSection.jsx'
import WorkHistorySection from './contentContainer_componets/WorkHistorySection.jsx'
import PersonalProjectsSection from './contentContainer_componets/PersonalProjectsSection.jsx'

// TODO: Remove all in-line styling

/**
 * This component encapsulates all scrollable content sections. Props are not used in this component.
 */
const ContentContainer = forwardRef(function ContentContainer(_props, ref) {
  return (
    <div className="content-container" ref={ref}>
      <div className="list-group d-flex justify-content-center" style={{ marginBottom: 40 }}>
        <AboutSection />
        <WorkHistorySection />
        <PersonalProjectsSection />
      </div>
    </div>
  )
})

export default ContentContainer
