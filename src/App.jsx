import { useRef, useState } from "react";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  const [showMore, setShoreMore] = useState(false)
  const [isOn, setIsOn] = useState(true);
      function handleToggle(e) {
          if(isOn){
          setIsOn(false)
          } else {
              setIsOn(true)
          }
      }
        
  function handleClick(e) {
    e.preventDefault()
    e.stopPropagation()
    setShoreMore(true)
  }
  
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({behaviour:'smooth'})
  }
  const bcgColor = isOn ? '#032e2a': '#fff'
  const textColor = isOn? '#fff' : '#000'
 
  return (
    <div className="main">
    <Sidebar
    onNavigate={scrollToSection}
    sections={{
      home: homeRef,
      projects: projectsRef,
      about: aboutRef,
    }}
    checked={isOn}
    onChange={handleToggle}
    />
    <div className="content">
    <section 
    ref={homeRef}
    style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor: bcgColor,
      color: textColor
    }}
    >
      
        <Home/>
      {!showMore 
      ?
      <button className="showMore" style={{width:'6rem', marginTop:'1rem'}} onClick={(e) => handleClick(e)}>show more</button> :
      <button style={{width:'6rem', marginTop:'1rem'}} onClick={(e) => {
        e.preventDefault()
        setShoreMore(false)
      }}>hide details</button> 
      }
      </section>
      {showMore &&
      (
        <>
      <section ref={aboutRef}
      style={{backgroundColor: bcgColor, color:textColor}}
      >
        <About/>
      </section>
      <section ref={projectsRef}
      style={{backgroundColor:bcgColor, color: textColor}} 
      >
        <Projects isOn={isOn}/>
      </section>
      </>
      )}
    </div>
    </div>
  )
}

export default App
