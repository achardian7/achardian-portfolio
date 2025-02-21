import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ProfileSection from "@/components/profile-section";
import ProjectSection from "@/components/project-section";
import SkillsSection from "@/components/skills-section";

const Home = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="w-full">
        <ProfileSection />
        <div>
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
