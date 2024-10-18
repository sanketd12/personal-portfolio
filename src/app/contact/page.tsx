import Header from "../../../components/Header";
export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <Header />
            <section id="contact" className="flex-grow flex items-center justify-center py-10">
                <div className="max-w-4xl mx-auto px-6 w-full">
                    <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">Contact</h1>
                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                        <p className="text-lg text-gray-700 text-center mb-4">
                            Feel free to contact me at:
                        </p>
                        <a 
                            href="mailto:sanketpd12@gmail.com" 
                            className="block text-xl font-medium text-blue-600 hover:text-blue-800 text-center transition duration-300 ease-in-out"
                        >
                            sanketpd12@gmail.com
                        </a>
                    </div>
                </div>
            
            </section>
        </div>
    );
}