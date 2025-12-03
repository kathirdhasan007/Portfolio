import { profile } from '../data/content';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-intro card" style={{ padding: 20 }}>
        <h1 className="title">{profile.title}</h1>
        <p className="subtitle">{profile.summary}</p>
        <div className="intro-image">
        <img src="/public/introimage.png" alt="" />
        </div>
        <div className="cta">
          <a className="btn primary" href={profile.links.resume} target="_blank" rel="noreferrer">View resume</a>
          <a className="btn outline" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn outline" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="card" style={{ padding: 20 }}>
        <h3 style={{ marginTop: 0 }}>About</h3>
        <p>
Hi, I’m <span className='highlight'>Kathirdhasan</span>, a full-stack developer skilled in Java and Python. I build scalable, user-friendly web applications from front-end to back-end, using tools like <span className='highlight'>Spring Boot, Django, React, MySQL, and REST APIs</span>.
I enjoy turning ideas into clean, maintainable code and creating smooth user experiences. Whether it’s designing interfaces, optimizing databases, or building secure APIs, I focus on writing efficient and reliable solutions.
I’m always learning new technologies to stay current, and I value teamwork, clear communication, and solving real-world problems through thoughtful development.
        </p>
        <p>
          Currently in {profile.location}. Open to backend roles with growth, autonomy, and mutual respect.
        </p>
      </div>
    </div>
  );
}