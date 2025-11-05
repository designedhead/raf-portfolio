import { useState, useEffect } from 'react';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY >= 90);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        navScrolled ? 'bg-secondary/90 shadow-lg' : 'bg-transparent'
      }`}
      style={{ visibility: 'visible', opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-24 lg:px-32 py-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 119.98 138.54"
            className="w-12 h-12"
          >
            <polygon
              fill="transparent"
              stroke="#63FFDA"
              strokeWidth="6"
              points="1 35.21 1 103.33 59.99 137.38 118.98 103.33 118.98 35.21 59.99 1.15 1 35.21"
            />
            <g>
              <path
                fill="#63FFDA"
                d="M44.18,72.81h-7.68v15.68h-4.86V50.05h11.27c1.8,.04,3.48,.29,5.07,.77,1.58,.48,2.97,1.19,4.16,2.14,1.19,.95,2.12,2.14,2.8,3.58s1.02,3.12,1.02,5.06c0,1.25-.18,2.39-.54,3.43-.36,1.04-.86,1.98-1.49,2.83-.63,.84-1.39,1.59-2.27,2.24-.88,.65-1.85,1.21-2.9,1.66l8.16,16.42-.03,.32h-5.15l-7.55-15.68Zm-7.68-4.01h6.55c1.09-.02,2.12-.19,3.09-.51,.97-.33,1.82-.8,2.55-1.41,.73-.62,1.31-1.37,1.73-2.26,.42-.89,.63-1.91,.63-3.08,0-1.23-.2-2.31-.61-3.23-.41-.92-.97-1.7-1.69-2.32-.72-.62-1.58-1.10-2.57-1.41-.99-.32-2.08-.48-3.26-.5h-6.42v14.73Z"
              />
              <path
                fill="#63FFDA"
                d="M69.26,50.05l6.26,19.22,6.76-19.22h6.07v38.44h-4.75v-15.34l.4-16.05-7.1,20.7h-2.8l-6.52-20.14,.4,15.5v15.34h-4.75V50.05h6.05Z"
              />
            </g>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="text-title-dark hover:text-primary transition-colors font-mono text-sm"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              <span className="text-primary">01.</span> About
            </a>
          </li>
          <li>
            <a
              href="#skillset"
              className="text-title-dark hover:text-primary transition-colors font-mono text-sm"
              onClick={(e) => handleSmoothScroll(e, '#skillset')}
            >
              <span className="text-primary">02.</span> Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-title-dark hover:text-primary transition-colors font-mono text-sm"
              onClick={(e) => handleSmoothScroll(e, '#experience')}
            >
              <span className="text-primary">03.</span> Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-title-dark hover:text-primary transition-colors font-mono text-sm"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
            >
              <span className="text-primary">04.</span> Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-title-dark hover:text-primary transition-colors font-mono text-sm"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              <span className="text-primary">05.</span> Contact
            </a>
          </li>
          <li>
            <a
              href="mailto:mrrafaelmendes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm"
            >
              Say Hello
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-primary transition-all ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-all ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-all ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-secondary md:hidden transition-transform duration-300 z-40 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-2xl text-title-dark hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary">01.</span> About
              </a>
            </li>
            <li>
              <a
                href="#skillset"
                onClick={(e) => handleSmoothScroll(e, '#skillset')}
                className="text-2xl text-title-dark hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary">02.</span> Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, '#experience')}
                className="text-2xl text-title-dark hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary">03.</span> Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="text-2xl text-title-dark hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary">04.</span> Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-2xl text-title-dark hover:text-primary transition-colors font-mono"
              >
                <span className="text-primary">05.</span> Contact
              </a>
            </li>
            <li>
              <a
                href="mailto:mrrafaelmendes@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-lg"
              >
                Say Hello
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
