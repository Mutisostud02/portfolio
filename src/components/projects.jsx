import Profile from "./profile";

export default function Projects({isOn}) {
  const textColor = isOn? '#fff' : '#000'
    return (
        <>
        <h3
        style={{
            fontSize:'2rem',
            textAlign:'center',
        }}>MY PROJECTS</h3>
        <section className="myProjects-intro">
            <p><i>My portfolio showcases a range of projects, each demonstrating 
                expertise in JavaScript, React, and modern web development. I 
                enjoy building intuitive UI components, optimizing performance, 
                and implementing backend logic to create seamless user experiences. 
                Below are some highlights of my work.
                </i>
            </p>
            <hr/>
            <div className="myProjects">
                <div className="project-1">
                <Profile
                src="/assets/todo.webp"
                height="180"
                width="200"
                >
                    <a href="" style={{color:textColor}}>todo</a>
                </Profile>
                </div>

                <div className="project-2">
                <Profile
                src="/assets/cv.webp"
                width="200"
                height="180"
                >
                    <a href="" style={{color:textColor}}>CV</a>
                </Profile>
                </div>

                <div className="project-3">
                <Profile
                src="/assets/landingpage.webp"
                height="180"
                width="200"
                >
                    <a href="" style={{color:textColor}}>homepage</a>
                </Profile>
                </div>

                <div className="project-4">
                <Profile
                src="/assets/recipe.webp"
                height="180"
                width="200"
                >
                    <a href="" style={{color:textColor}}>Recipe</a>
                </Profile>
                </div>

                <div className="project-5">
                <Profile
                height="180"
                src="/assets/library.webp"
                >
                    <a href="" style={{color:textColor}}>Library</a>
                </Profile>
                </div>

                <div className="project-6">
                <Profile
                height="180"
                src="/assets/weatherapi.webp"
                >
                    <a href="" style={{color:textColor}}>Weather forecast</a>
                </Profile>
                </div>

                <div className="project-7">
                <Profile
                src="/assets/formgif.webp"
                width="200"
                height="180"
                >
                    <a 
                    href=""
                    style={{color:textColor}}
                    >Gif selector
                    </a>
                </Profile>
                </div>
            </div>
        </section>

        </>
    )
}