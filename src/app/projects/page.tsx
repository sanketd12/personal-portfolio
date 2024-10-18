import Header from "../../../components/Header";
import {ExpandableCardDemo} from "../../../components/ExpandableCard"

export default function Projects() {
    return (
      <div className="min-h-screen bg-slate-100">
        <Header />
        <section id="projects" className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">Personal Projects</h1>
            <ExpandableCardDemo />
          </div>
        </section>
      </div>
    );
}