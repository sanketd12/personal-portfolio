import Header from "../../../components/Header";

export default function About() {
  return (
    <><Header></Header>
    <div className="bg-white text-gray-900 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-16 text-center">About Me</h1>
        
        <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <ul className="list-disc pl-5 space-y-4">
          <li className="text-lg">
            <span className="font-semibold">Software Engineering Intern</span> at TechSur Solutions (Jun 2024-Present)
          </li>
          <li className="text-lg">
            <span className="font-semibold">Software Engineer</span> at CargoLabs (Jun 2024-Present)
          </li>
        </ul>
      </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["JavaScript", "React", "Node.js", "Python", "SQL"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Education</h2>
          <p className="text-lg">B.S. in Computer Science, University of Virginia, Charlottesville, VA</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Links</h2>
          <div className="space-y-4">
            {["LinkedIn", "GitHub", "Resume"].map((link) => (
              <p key={link} className="text-lg text-blue-600 hover:underline cursor-pointer">{link}</p>
            ))}
          </div>
        </section>
      </main>
    </div>
    </>

  )
}