import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="I just build an amazing Next.js 14 Portofolio from scratch,wih React Three,React Drei and framer-motion"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="I can build blog's,presentation websites,e-commerces.I will have competitive prices acording to your needs "
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="This an example of a space themed website The site is responsive and have no errors at all ."
        />
      </div>
    </div>
  );
};

export default Projects;