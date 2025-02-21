"use client";

import ScrollReveal from "./scroll-reveal";

const AboutSection = () => {
  return (
    <ScrollReveal name="about">
      <section id="about" className="section-container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="flex flex-col space-y-10 px-5 lg:px-0">
          <p>
            Hello there! My name is Muchammad Ardiansyah. I am 25 years old, and
            I am a self-taught web developer. I teach myself how to code, cause
            I find it interesting and potentially becoming high demand jobs in
            the future.
          </p>

          <p>
            I love building web from scratch and passionate about learning new
            technologies. Currently, I am focusing on specializing myself in
            Next JS for building full-stack web application. I also know basic
            of backend development using MERN Stack or PERN Stack.
          </p>

          <p>
            Now, I am Seeking a challenging position as a web developer to
            further enhance my skills, contribute to innovative projects, and
            fulfill my ambition of becoming a proficient full-stack developer.
          </p>

          <p>
            In my free time, I love to watch movie/anime, and sometime I play
            chess. I also football and bycycle too.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default AboutSection;
