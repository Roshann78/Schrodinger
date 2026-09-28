import { resume } from "@/data/resume";
import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-[220px] w-full max-w-[760px] mx-auto p-6 md:p-12 lg:p-16">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{resume.header.name}</h1>
          <div className="text-gray-600 dark:text-gray-400 space-y-1">
            <p>{resume.header.location}</p>
            <p>Email: {resume.header.email} | Phone: {resume.header.phone}</p>
            <p className="flex flex-wrap gap-2 mt-2">
              Links:
              {resume.header.links.map((link, i) => (
                <span key={i}>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    {link.label}
                  </Link>
                  {i < resume.header.links.length - 1 && " |"}
                </span>
              ))}
            </p>
          </div>
        </header>

        <Section title="Achievements">
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
            {resume.achievements.map((ach, i) => (
              <li key={i}>
                {ach.text}
                {ach.link && (
                  <span className="ml-2">
                    (<Link href={ach.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Link</Link>)
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Experience">
          <div className="space-y-8">
            {resume.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white">{exp.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}, {exp.location}</p>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">{exp.period}</span>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="space-y-8">
            {resume.projects.map((proj, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium text-black dark:text-white inline-block">{proj.title}</h3>
                {proj.github && (
                  <span className="ml-2 text-sm">
                    (<Link href={proj.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</Link>)
                  </span>
                )}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 mt-1">Stack: {proj.stack}</p>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {proj.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Technical Skills">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {resume.skills.map((skill, i) => (
              <li key={i}>
                <strong className="text-black dark:text-white font-medium">{skill.category}:</strong> {skill.items}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Positions of Responsibility">
          <div className="space-y-8">
            {resume.positions.map((pos, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white">{pos.role}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{pos.organization}, {pos.location}</p>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">{pos.period}</span>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {pos.details.map((detail, j) => (
                    <li key={j}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-6">
            {resume.education.map((edu, i) => (
              <div key={i} className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline gap-1">
                <div>
                  <h3 className="text-lg font-medium text-black dark:text-white">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}, {edu.location} - {edu.score}</p>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">{edu.period}</span>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
