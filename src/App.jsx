import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent hover:from-yellow-300 hover:to-orange-400 transition-all duration-300">
                Michael Simiyu
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        activeSection === item
                          ? "text-yellow-400 bg-gray-800 shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-gray-800 hover:shadow-md"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-200 p-2 rounded-md hover:bg-gray-800"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeInDown">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item
                        ? "text-yellow-400 bg-gray-800 shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-gray-800 hover:shadow-md"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/10"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fadeInUp">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-1 animate-pulse hover:animate-none hover:scale-110 transition-all duration-500">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  MS
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
            Michael Simiyu
          </h1>

          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-medium animate-fadeInUp">
            Software and AI Engineer
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp font-light">
            Building exceptional digital experiences with cutting-edge
            technologies. Specializing in modern web applications, AI and cloud
            solutions, and user-centered design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/30 text-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-yellow-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse hover:bg-yellow-400 transition-colors duration-300"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                Hello, I'm Michael!
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate software and AI engineer with over one and a
                half years of experience creating digital solutions that make a
                difference. My journey began with curiosity about how websites
                work, and it has evolved into a deep love for crafting intelligent solutions and
                exceptional user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I specialize in modern JavaScript frameworks, Python, cloud
                technologies, AI/ML technologies and have a keen eye for design. When I'm not
                coding, you'll find me exploring new technologies, contributing
                to open source projects, or sharing knowledge with the developer
                community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    Available for freelance work
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    Open to new opportunities
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fadeInRight">
              <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  10+
                </div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  2+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  5+
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Skills & Technologies
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInLeft">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Frontend Development
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "React",
                  "Next.js",
                  "Vue.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Sass/SCSS",
                  "JavaScript ES6+",
                  "HTML5/CSS3",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full transition-all duration-1000 group-hover:w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Backend Development
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "Node.js",
                  "Express.js",
                  "Python",
                  "Django",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "REST APIs",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 group-hover:w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Artificial Intelligence Skills */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Artificial Intelligence
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "Python",
                  "Pytorch",
                  "OpenCV",
                  "Google AI Studio",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "REST APIs",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 group-hover:w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* Tools & Others */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 p-8 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInRight">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Tools & Others
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  "Git/GitHub",
                  "Docker",
                  "AWS",
                  "Vercel",
                  "Figma",
                  "Jest",
                  "Webpack",
                  "Linux",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 group-hover:w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group animate-fadeInLeft">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Gifted Chana Crafts</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                  Gifted Chana Crafts
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  An e-commerce solution built with React, Node.js, and
                  PostgreSQL.
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "PostgreSQL", "Stripe"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm hover:bg-yellow-500/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.giftedchanacrafts.com"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group animate-fadeInUp">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Metro Sports Arena</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors duration-300">
                  Metro Sports Arena
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  Your Table Tennis Partner in Kenya. Premium equipment for
                  players of all levels. From beginners to professionals, we
                  have everything you need to excel in table tennis.
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {["Vue.js", "Express.js", "Socket.io", "MongoDB"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm hover:bg-orange-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div> */}
                <div className="flex space-x-4">
                  <a
                    href="https://metro-sports.vercel.app/"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group animate-fadeInRight">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Twenty Four Seven Services
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors duration-300">
                  Twenty Four Seven Services
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  Maintenance & Repair Services.
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "D3.js", "Python", "FastAPI"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm hover:bg-orange-500/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.24-7solutions.co.ke"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Get In Touch
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fadeInLeft">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Email
                    </p>
                    <p className="text-white font-medium group-hover:text-yellow-300 transition-colors duration-300">
                      michaelsimiyu54@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Phone
                    </p>
                    <p className="text-white font-medium group-hover:text-orange-300 transition-colors duration-300">
                      +254 703 990 199
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Location
                    </p>
                    <p className="text-white font-medium group-hover:text-orange-300 transition-colors duration-300">
                      Narok, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/myc_ole"
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/michael-simiyu-102a2a285/"
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/my-c0de-hub"
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fadeInRight">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-600"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300 hover:bg-gray-600"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              © 2026 Michael Simiyu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
