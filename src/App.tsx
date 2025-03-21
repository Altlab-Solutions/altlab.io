import React from 'react';
import { Code2, Globe2, Server, Linkedin, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Github } from 'lucide-react';
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
            <div className="text-center group">
              <div className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#3e7c95] to-[#78a1b0] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src="image/julian.jpg"
                  alt="Julian"
                  className="relative w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-white shadow-xl transform transition-all duration-300"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#3e7c95]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#3e7c95]">Julian</h3>
              <p className="text-[#5b8ea2] mb-3">Founder - Business Strategy</p>
              <a
                href="https://www.linkedin.com/in/julian-azwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3e7c95] hover:text-[#5b8ea2] transition-colors group-hover:scale-105 transform duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            <div className="text-center group">
              <div className="relative inline-block transition-transform duration-300 group-hover:scale-105">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#78a1b0] to-[#3e7c95] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src="image/mike.jpg"
                  alt="Mike"
                  className="relative w-40 h-40 rounded-full mx-auto mb-4 object-cover ring-4 ring-white shadow-xl transform transition-all duration-300"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#3e7c95]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#3e7c95]">Mike</h3>
              <p className="text-[#5b8ea2] mb-3">Founder - Technical Lead</p>
              <a
                href="https://www.linkedin.com/in/mike-veilleux-54052610/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3e7c95] hover:text-[#5b8ea2] transition-colors group-hover:scale-105 transform duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#95b3bd]/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3e7c95]">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-[#3e7c95]">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#5b8ea2]">
                    <div className="bg-[#95b3bd]/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>2/F., Tern Centre, Tower 1, 237 Queen's Road Central, Hong Kong</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#5b8ea2]">
                    <div className="bg-[#95b3bd]/10 p-3 rounded-full">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>+852 3703 8500</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#5b8ea2]">
                    <div className="bg-[#95b3bd]/10 p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>contact@altlab.io</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#3e7c95] p-8 rounded-lg shadow-lg text-white">
                <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
                <p className="mb-6 text-[#95b3bd]">Let's discuss how we can help you achieve your digital goals.</p>
                <button className="bg-white text-[#3e7c95] px-6 py-3 rounded-lg font-semibold hover:bg-[#95b3bd] hover:text-white transition-colors">
                  Schedule a Call
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-[#3e7c95]">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#5b8ea2] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-[#95b3bd]/20 focus:outline-none focus:ring-2 focus:ring-[#3e7c95]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#5b8ea2] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-[#95b3bd]/20 focus:outline-none focus:ring-2 focus:ring-[#3e7c95]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#5b8ea2] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-[#95b3bd]/20 focus:outline-none focus:ring-2 focus:ring-[#3e7c95]"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#5b8ea2] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-[#95b3bd]/20 focus:outline-none focus:ring-2 focus:ring-[#3e7c95]"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3e7c95] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5b8ea2] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3e7c95] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Logo_Altlab2 size={40} />
                <span className="text-xl font-bold">Altlab.io</span>
              </div>
              <p className="text-[#95b3bd] mb-6">
                Transforming businesses through innovative software solutions and expert consulting.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#95b3bd] transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#95b3bd] transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#95b3bd] transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#95b3bd] transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Blog</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Custom Development</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">IT Consulting</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Web Hosting</a>
                </li>
                <li>
                  <a href="#" className="text-[#95b3bd] hover:text-white transition-colors">Cloud Solutions</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#95b3bd]/20 mt-8 pt-8 text-center text-[#95b3bd]">
            <p>© 2024 Altlab.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;