import Header from "../../../components/Header";

export default function Projects() {
    return (
      
      <><Header></Header>
      <section id="projects" className="bg-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">Personal Projects</h1>
          <ul className="space-y-12">
            <li className="bg-gray-50 rounded-2xl p-8 shadow-sm transition duration-300 ease-in-out hover:shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reel Recommender</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A smart movie recommendation platform powered by content-based filtering. Supports 10,000+ movies and personalized search results.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
            </li>
            <li className="bg-gray-50 rounded-2xl p-8 shadow-sm transition duration-300 ease-in-out hover:shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stock Market Bot</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A predictive stock market analysis tool that leverages natural language processing and machine learning to analyze live market data and news headlines for real-time predictions.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
            </li>
          </ul>
        </div>
      </section>
      </>
    );
  }