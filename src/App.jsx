import { useEffect, useRef, useState } from 'react'

// Importing styles
import './App.css'

// Importing components
import Header from './components/header'
import ProfileCard from './components/profileCard'
import ContentContainer from './components/contentContainer'
import SiteFooter from './components/siteFooter'

// GSAP for advanced scrolling control
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

// TODO: Work on mail pop up feature in the profile card

/**
 * App: Main application component.
 * @returns {JSX.Element}
 */
function App() {
  const contentRef = useRef(null)
  const [navOpen, setNavOpen] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    // The contentRef is set before this effect is run. The DOM is loaded first
    const scrollContainer = contentRef.current;
    if (!scrollContainer) {
      return;
    }

    // This is the scroll event handler which determines when to show the
    // footer.
    const onScroll = () => {
      // ScrollTop -> How many pixels have been scrolled vertically
      // ClientHeight -> The height of the visible area
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight;
      const bottomPosition = scrollContainer.scrollHeight;

      // If within 20px of the bottom show the footer
      setShowFooter(scrollPosition >= bottomPosition - 20);
    }

    // Attach the scroll event listener
    scrollContainer.addEventListener("scroll", onScroll);

    // Remove event listener on cleanup of this component
    return (() => {
      scrollContainer.removeEventListener("scroll", onScroll);
    });
  }, [])


  /**
   * Each <a> tag in the navbar has a specific callback to this function that
   * populates its parameters with the correct values in the html. The y
   * coordinate calculation to where to scroll to depends on the window width
   * which is handled accordingly in this implementation.
   *
   * @param {string} targetId - is the name of the id that corresponds to the
   * section to scroll to based from a specific <a> tag in the navbar.
   *
   * @param {number} durationSeconds - The duration of the scroll animation in
   * seconds.
   */
  const smoothScroll = (targetId, durationSeconds = 1.5) => {
    const headerOffset = 70
    const isMobile = window.matchMedia('(max-width: 990px)').matches

    // Determine the which scroll container to select depending on window width
    const scrollerType = isMobile ? window : contentRef.current

    // Something went wrong check
    if (!scrollerType) {
      return;
    }

    // Home section scroll
    if (targetId === "home") {
      gsap.to(scrollerType, {
        duration: durationSeconds,
        ease: "power1.inOut",
        scrollTo: { y: 0, autoKill: true }
      })

      // Ensure on smaller screens that the navbar is closed when clicked
      setNavOpen(false)
      return;
    }

    let targetElement = document.getElementById(targetId);
    // Something went wrong check
    if (!targetElement) {
      return;
    }

    // Scrolling methods depend on the type of scroller
    let scrollToSettings;

    // Initialize the scroll settings
    if (isMobile) {
      // Window: can pass element + offsetY
      scrollToSettings = {
        y: targetElement, offsetY: headerOffset, autoKill: true
      };
    } else {
      // Custom container: computing numeric y is needed
      const targetTop = targetElement.offsetTop - scrollerType.offsetTop + headerOffset;
      scrollToSettings = {
        y: targetTop, autoKill: true
      };
    }

    // Apply smooth scroll animation
    gsap.to(scrollerType, {
      duration: durationSeconds,
      ease: "power1.inOut",
      scrollTo: scrollToSettings
    });

    // Ensure on smaller screens that the navbar is closed when clicked
    setNavOpen(false);
  }

  return (
    <div>
  <Header navOpen={navOpen} setNavOpen={setNavOpen} smoothScroll={smoothScroll} />
  <ProfileCard />
  <ContentContainer ref={contentRef} />
  <SiteFooter show={showFooter} />
    </div>
  )
}

export default App
