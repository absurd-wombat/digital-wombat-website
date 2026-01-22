import ContactUsSection from "@/components/sections/ContactUsSection";
import HeroSection from "@/components/sections/HeroSection";
import ContentSection from "@/components/sections/ContentSection";

export default function AboutUsPage() {
  const workExperience = [
    {
      icon: "💼",
      title: "Software Consultant",
      company: "TNG Technology Consulting · Full-time",
      period: "Oct 2023 to Present · 2 yrs 2 mos",
      location: "Munich, Bavaria, Germany · Hybrid",
      details: [
        {
          category: "Cloud Infrastructure & DevOps",
          items: [
            "Manage and optimize AWS infrastructure and Kubernetes clusters in AWS EKS.",
            "Implement and maintain Identity and Access Management (IAM) including SSO for multiple AWS accounts.",
            "Automate deployments using Tekton Pipelines.",
            "Utilize Infrastructure as Code (IaC) with Terraform, Helm, and Helmfile.",
            "Oversee container applications with k9s.",
          ],
        },
        {
          category: "Backend Development",
          items: [
            "Develop internal applications and REST APIs in Python3 to support various departments.",
            "Create internal automation tools and REST APIs in Go for infrastructure and compliance.",
          ],
        },
        {
          category: "Frontend Development",
          items: [
            "Develop internal self-service portals and applications using TypeScript, React, and Material-UI.",
          ],
        },
        {
          category: "SSO & Security",
          items: [
            "Continuously develop and manage a company-wide SSO solution for over 800 users.",
            "Operate Keycloak as the central entry point for internal and external services.",
            "Implement Configuration as Code for Keycloak configuration via Terraform.",
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
            "Passed with First Class Honours, final mark 82%",
            "Ranked 4 out of 97 students",
          ],
        },
        {
          category: "Final year project",
          items: [
            "Machine Learning For Live-cell Super-resolution imaging",
            "Received a distinction for this piece of work",
            "Trained a neural network to improve the resolution of bacterial images taken with a light microscope.",
          ],
        },
        {
          category: "Additional achievements",
          items: [
            "Distinction in preliminary examinations – 5th highest mark in the year of 177 students",
            "Distinction in second year examinations – 2nd highest mark in the year of 175 students",
            'Awarded "The Scott Prize" for performance in the Physics Second Year Examination',
            "First class in third year examinations – 2nd highest mark in the year of 157 students",
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
