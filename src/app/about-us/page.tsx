import ContactUsSection from "@/components/sections/ContactUsSection";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/data/contact";

export default function AboutUsPage() {
  const workExperience = [
    {
      icon: "💼",
      title: "Software Consultant",
      company: "TNG Technology Consulting UK",
      period: "Aug 2026 to Present",
      location: "Oxford, UK",
      details: [
        {
          category: "AI Engineering & Sovereign Infrastructure",
          items: [
            "Built and deployed a self-hosted LLM inference platform providing OpenAI-compatible access to open-source models on company infrastructure, keeping sensitive data within EU jurisdiction.",
            "Developed an LLM gateway/router using Bifrost, integrating model inference, authentication, usage controls and internal infrastructure into a unified API.",
            "Built the platform's user and usage-management system, including a FastAPI backend and React/TypeScript frontend, enabling users to provision access and monitor consumption.",
            "Agentic-first software development, extensively using Opencode and Cursor.",
          ],
        },
      ],
    },
    {
      icon: "💻",
      title: "Software Consultant",
      company: "TNG Technology Consulting",
      period: "Oct 2023 to Jul 2026",
      location: "Munich, Bavaria, Germany · Hybrid",
      details: [
        {
          category: "Backend Development",
          items: [
            "Develop internal applications and REST APIs in Python3 to support multiple departments.",
            "Create internal automation tools and REST APIs in Go.",
          ],
        },
        {
          category: "Frontend Development",
          items: [
            "Develop internal self-service portals and applications using TypeScript, React, and Material-UI.",
            "Led the migration of ~20,000 lines of TypeScript/React code to more modern frameworks using AI agents to accelerate refactoring and improve maintainability.",
          ],
        },
        {
          category: "Cloud Infrastructure & DevOps",
          items: [
            "Manage and optimize AWS infrastructure and Kubernetes clusters in AWS EKS.",
            "Design and maintain CI/CD pipelines using Tekton and Github Actions.",
            "Provision and manage infrastructure using Infrastructure as Code (IaC) with Terraform, Helm, and Helmfile.",
            "Operate and monitor containerized applications using k9s.",
          ],
        },
      ],
    },
    {
      icon: "🚣",
      title: "Sales Representative and River Tour Guide",
      company: "Scudamore's Punting Company",
      period: "Jan 2023 to Sep 2023",
      location: "Cambridge, UK",
      details: [
        {
          category: "Highlights",
          items: [
            "Delivered over 1,500 polished 45-minute presentations to groups of 2–24 customers.",
            "Consistently ranked as a top salesperson, generating £4,000+ per week in revenue.",
            "Converted cold leads in a highly competitive, high-pressure sales environment with multiple rival operators.",
          ],
        },
      ],
    },
    {
      icon: "🌬️",
      title: "Year In Industry: Engineering Intern",
      company: "Breathing Buildings",
      period: "Sep 2017 to Apr 2018",
      location: "Cambridge, UK",
      details: [
        {
          category: "Highlights",
          items: [
            "Designed ventilation strategies for schools and non-domestic buildings, contributing to 100+ projects and approximately £1.5m in revenue.",
            "Used thermal modelling software daily and contributed code improvements to internal tools.",
            "Collaborated closely with sales and clients, attending sales meetings and producing technical and marketing materials.",
            "Awarded Employee of the Season for the second half of the placement.",
          ],
        },
      ],
    },
  ];

  const Education = [
    {
      icon: "🎓",
      title: "MPhys Master of Physics",
      subtitle: "University Of Oxford",
      description: "October 2018 - June 2022",
      details: [
        {
          category: "Final results",
          items: [
            "Passed with First Class Honours, final mark 82%.",
            "Ranked 4 out of 97 students.",
          ],
        },
        {
          category: "Final year project",
          items: [
            "Title: Machine Learning For Live-cell Super-resolution Imaging.",
            "Retrained a neural network to improve the resolution of bacterial images taken with a light microscope. The system made use of a Generative Adversarial Network (GAN) which trained a U-net generator against a Convolutional Neural Network discriminator.",
            "Received a distinction for this piece of work.",
          ],
        },
        {
          category: "Additional achievements",
          items: [
            "Distinction in preliminary examinations – rank 5 out of 177 students.",
            "Distinction in second year examinations – rank 2 out of 175 students.",
            'Awarded "The Scott Prize" for performance in the Physics Second Year Examination.',
            "First class in third year examinations – rank 2 out of 157 students.",
            'Awarded "The Gibbs prize" for performance in the MPhys Examination.',
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="About Us"
        subtitle="Digital Wombat is led by Ben Middleton, a software consultant at TNG Technology Consulting. This page outlines Ben's academic and professional career and experience."
        description=""
        backgroundColor="white"
        layout="centered"
        maxWidth="4xl"
        primaryButton={{
          text: "GitHub",
          href: GITHUB_URL,
          variant: "primary",
        }}
        secondaryButton={{
          text: "LinkedIn",
          href: LINKEDIN_URL,
          variant: "secondary",
        }}
      />
      <ContentSection
        title="Work Experience"
        backgroundColor="white"
        layout="centered"
        maxWidth="7xl"
        cards={workExperience}
      />
      <ContentSection
        title="Education"
        backgroundColor="white"
        layout="centered"
        maxWidth="7xl"
        cards={Education}
      />
      <ContactUsSection />
    </div>
  );
}
