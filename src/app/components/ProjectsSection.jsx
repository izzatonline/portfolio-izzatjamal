"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website Admin / Store",
    description: "E-Commerce Store with Admin Dashboard & User Store",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/izzatonline/ecommerce-store",
    previewUrl: "https://ecommerce-admin-izzat-jamal.vercel.app/",
  },
  {
    id: 2,
    title: "Employee Management App",
    description: "Add, Store, Edit, and Delete Employee",
    image: "/images/projects/emp-management-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/izzatonline/emp-management-app",
    previewUrl: "https://emp-management-app.vercel.app/",
  },
  {
    id: 3,
    title: "News Search App",
    description: "News Search App with API Call",
    image: "/images/projects/newsapp.jfif",
    tag: ["All", "Web"],
    gitUrl: " https://github.com/izzatonline/news-search-app",
    previewUrl: "https://news-search-app-seven.vercel.app/",
  },
  {
    id: 4,
    title: "To Do App",
    description: "To Do App for Daily Task",
    image: "/images/projects/todoapp.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/izzatonline/to-dos",
    previewUrl: "https://to-dos-eight.vercel.app/",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "Personal Portfolio with Next Js",
    image: "/images/projects/izzat-portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/izzatonline/izzat-portfolio",
    previewUrl: "https://izzat-portfolio.vercel.app/",
  },
  {
    id: 6,
    title: "Food Order App",
    description: "Food Order App with Admin & Users Page",
    image: "/images/projects/foodorderapp.jfif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/izzatonline/food-order-app ",
    previewUrl: "https://food-order-app-teal-pi.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
