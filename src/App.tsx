import React from 'react';
import { Code2, Globe2, Server, Linkedin, LogOut } from 'lucide-react';
import Logo_Altlab2 from './logo2';

function App() {
  return (
    <div className="min-h-screen bg-[#eceae5]">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <nav className="fixed top-0 left-0 right-0 bg-[#3e7c95] z-10">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold flex items-center gap-2 text-white">
                {/* <Code2 className="h-8 w-8" /> */}
                <Logo_Altlab2 size={50} />
                <span>Altlab.io</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center pt-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-[#3e7c95]">
              Custom Software Solutions for Your Business
            </h1>
            <p className="text-xl text-[#5b8ea2] mb-8">
              We transform your ideas into powerful digital solutions. From custom software development
              to expert IT consulting and reliable hosting services.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#78a1b0]/20 rounded-lg blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
              alt="Modern development workspace"
              className="relative rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-[#95b3bd]/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3e7c95]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Code2 className="h-10 w-10 text-[#5b8ea2] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#3e7c95]">Custom Software Development</h3>
              <p className="text-[#5b8ea2]">Tailored solutions designed to meet your specific business needs and challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Server className="h-10 w-10 text-[#5b8ea2] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#3e7c95]">IT Consulting</h3>
              <p className="text-[#5b8ea2]">Expert guidance to help you make informed technology decisions and optimize your IT infrastructure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe2 className="h-10 w-10 text-[#5b8ea2] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#3e7c95]">Web Hosting & Management</h3>
              <p className="text-[#5b8ea2]">Reliable hosting solutions and comprehensive management services for your web applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3e7c95]">Meet The Founders</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-[#78a1b0]/20 rounded-full blur-md"></div>
                <img
                  src="image/julian.jpg"
                  alt="Julian"
                  className="relative w-48 h-48 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#95b3bd]/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#3e7c95]">Julian</h3>
              <p className="text-[#5b8ea2] mb-3">Founder - Business Stategy</p>
              <a
                href="https://www.linkedin.com/in/julian-azwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3e7c95] hover:text-[#5b8ea2] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-[#78a1b0]/20 rounded-full blur-md"></div>
                <img
                  src="image/mike.jpg"
                  alt="Mike"
                  className="relative w-48 h-48 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#95b3bd]/20"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#3e7c95]">Mike</h3>
              <p className="text-[#5b8ea2] mb-3">Founder - Technical Lead</p>
              <a
                href="https://www.linkedin.com/in/mike-veilleux-54052610/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3e7c95] hover:text-[#5b8ea2] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#95b3bd]/10 py-8">
        <div className="container mx-auto px-6 text-center text-[#5b8ea2]">
          <p>© 2024 Altlab.io. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
