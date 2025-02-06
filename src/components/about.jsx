export default function About() {
    return (
        <>
        <section className="about">
            <img 
            src="/assets/devpic.webp" 
            alt="Codes"
            width={450}
            height='auto'
            style={{
                borderRadius:'5px',
                padding:'7rem 1rem 9rem 1rem'
            }}
            />
            <ul className="about-content"
            style={{
                lineHeight: '1.6',
                fontFamily: 'Arial, sans-serif',
                fontSize:'1.25rem',
                listStyleType:'none'
            }}>
                <p style={{
                    fontSize:'2rem',
                    fontWeight:'bold',

                }}>ABOUT ME</p>
                <li>Hi, I'm Christopher Nthusi, a passionate software developer specializing in JavaScript, React, and web applications. I turn creative ideas into interactive, user-friendly websites and apps.
                </li>
                <li>With a degree in Computer Science and 2+ years of experience building web applications, I’m proficient in React, Node.js, JavaScript, and RESTful APIs. I’ve also worked with tools like Git and Vercel to deploy scalable applications.
                </li>
                <li>
                I’m passionate about building intuitive, accessible user interfaces that make an impact. I believe in clean, maintainable code, and I always strive for innovative solutions to complex problems.
                </li>
                <li>I enjoy collaborating with cross-functional teams to bring ideas to life. I’m always looking for new challenges to push my skills and grow as a developer.
                </li>
                <li>When I’m not coding, I enjoy gaming, football and experimenting with new technologies in my spare time.
                </li>
            </ul>
        </section>
        </>
    )
}