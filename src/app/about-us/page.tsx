import ContactUsSection from "@/components/sections/ContactUsSection";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";

export default function AboutUsPage() {
  const workExperience = [
    {
      icon: "💼",
      title: "Software Consultant",
      company: "TNG Technology Consulting · Full-time",
      period: "Oct 2023 to Present",
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
        {
          category: "SSO & Security",
          items: [
            "Operate Keycloak as the central authentication and authorization platform for internal and external services.",
            "Maintain a company-wide SSO solution supporting over 800 users.",
          ],
        },
        {
          category: "Network & System Administration",
          items: [
            "Administer network infrastructure, server management, and modern firewall management across multiple locations.",
            "Server configuration and provisioning with Ansible.",
            "Manage various internal systems and tools: LDAP, VPN, DNS, PGP and cloud access control system.",
          ],
        },
        {
          category: "Team Collaboration & Knowledge Sharing",
          items: [
            "Onboard new team members and foster knowledge dissemination within the team.",
          ],
        },
      ],
    },
  ];

  const Education = [
    {
      icon: "🎓",
      title: "MPhys Physics",
      subtitle: "University Of Oxford",
      description: "October 2018 - June 2023",
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
            "Distinction in preliminary examinations – 5th highest mark in the year of 177 students",
            "Distinction in second year examinations – 2nd highest mark in the year of 175 students.",
            'Awarded "The Scott Prize" for performance in the Physics Second Year Examination.',
            "First class in third year examinations – 2nd highest mark in the year of 157 students.",
            'Awarded "The Gibbs prize" for performance in the MPhys Examination',
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
        backgroundColor="gradient"
        layout="centered"
        maxWidth="4xl"
        primaryButton={{
          text: "GitHub",
          href: "https://github.com/absurd-wombat",
          variant: "primary",
        }}
        secondaryButton={{
          text: "LinkedIn",
          href: "https://www.linkedin.com/in/benjamin-middleton-a8370b14a/",
          variant: "secondary",
        }}
      />
      <ContentSection
        title="Work Experience"
        backgroundColor="white"
        layout="centered"
        maxWidth="7xl"
        variant="card"
        cards={workExperience}
      />
      <ContentSection
        title="Education"
        backgroundColor="white"
        layout="centered"
        maxWidth="7xl"
        variant="card"
        cards={Education}
      />
      <ContactUsSection />
    </div>
  );
}
