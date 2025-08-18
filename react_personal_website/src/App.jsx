import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/header'
import ProfileCard from './components/profileCard'
import ContentContainer from './components/contentContainer'
import SiteFooter from './components/siteFooter'

// GSAP for advanced scrolling control
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

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

  // targetId is the name of the id that corresponds to the section to scroll to
  // based from a specific <a> tag in the navbar. Each <a> tag has a specfic
  // callback to this function that populates its parameters with the correct
  // values in the html.
  const smoothScroll = (targetId, durationSeconds = 1.5) => {
    const scrollContainer = contentRef.current;
    // Something went wrong check
    if (!scrollContainer) {
      return;
    }

    // Scroll the scroll bar according to which a tag from the navbar is clicked
    if (targetId === "home") {
      gsap.to(scrollContainer, {
        duration: durationSeconds,
        ease: "power1.inOut",
        scrollTo: { y: 0, autoKill: true }
      })
      setNavOpen(false)
      return;
    }

    let targetElement = scrollContainer.querySelector(`#${targetId}`);

    // Something went wrong check
    if (!targetElement) {
      return;
    }

    // The +70 is to avoid the navbar getting in the way to the selected section
    // moving up the scroll box
    const headerOffset = 70
    const targetTop = targetElement.offsetTop - scrollContainer.offsetTop + headerOffset

    // Scroll to the desired offset
    gsap.to(scrollContainer, {
      duration: durationSeconds,
      ease: "power1.inOut",
      scrollTo: { y: targetTop, autoKill: true }
    })

    // Logic for making sure the navbar for the smaller screens closes after a
    // link is clicked
    setNavOpen(false);
  }

  // TODO: Change this migration HTML into components for better readability
  // TODO: Adjust the company icon paths and image spacing
  // TODO: Update the website text
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
