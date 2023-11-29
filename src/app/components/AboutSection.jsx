"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid sm:grid-cols-3 grid-cols-2 justify-between">
        <ul className="list-disc pl-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next Js</li>
          <li>Vite</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Tailwind CSS</li>
          <li>React Native</li>
          <li>Expo Js</li>
          <li>Node Js</li>
          <li>MongoDB</li>
          <li>Supabase</li>
          <li>Cockroach DB</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>PostgreSQL</li>
          <li>Redux</li>
          <li>Zustand</li>
          <li>Axios</li>
          <li>Prisma</li>
          <li>Material UI</li>
          <li>Shadcn UI</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Engineering, University of New South Wales</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified Associate in Frontend Development, Talentlabs</li>
        <li>Data Science Training Program, 360DigiTMG Malaysia</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="rounded-3xl overflow-hidden w-500 h-500">
          <Image
            src="/images/profilepic-izzat.jpg"
            width={500}
            height={500}
            alt="About Me"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an Experienced Project Engineer transitioning to a career as a
            versatile professional in the fields of Web Development. Passionate
            about leveraging technology to drive innovation and solve complex
            problems, I bring a unique blend of technical expertise and project
            management skills to the table. With a solid foundation in
            engineering principles and a strong analytical mindset, I am adept
            at translating business requirements into practical solutions.
            Committed to continuous learning and growth via Online Courses and
            Project Works with Coding Friends, I thrive in dynamic and
            collaborative environments where I can make a meaningful impact.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
