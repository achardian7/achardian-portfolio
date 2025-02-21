import React from "react";
import ScrollReveal from "./scroll-reveal";
import Image from "next/image";
import { skillIcons } from "@/lib/constant";

const SkillsSection = () => {
  return (
    <ScrollReveal name="skills">
      <div id="skills" className="section-container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {skillIcons.map((skill) => (
            <div
              key={skill.id}
              className="group w-fit rounded-md bg-[#001238] p-3"
            >
              <div className="relative h-[80px] w-[80px] grayscale group-hover:grayscale-0">
                <Image src={skill.icon} fill alt={skill.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default SkillsSection;
