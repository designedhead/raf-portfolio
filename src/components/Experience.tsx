import { useState } from 'react';
import { experience } from '../data/experience';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section id="experience" className="min-h-screen py-24 px-6 md:px-24 lg:px-32">
      <div className="max-w-3xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-title-light mb-4 flex items-center gap-4">
          <span className="text-primary font-mono text-xl md:text-2xl font-normal">02.</span>
          Where I've Worked
          <div className="flex-1 h-px bg-title-dark/30"></div>
        </h2>
      </div>

      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        {/* Tabs */}
        <div className="relative">
          <div
            className="absolute left-0 w-0.5 bg-primary transition-transform duration-300 h-12"
            style={{
              transform: `translateY(calc(${selectedExperience} * 48px))`,
            }}
          />
          <div className="flex flex-col gap-0">
            {experience.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setSelectedExperience(index)}
                className={`text-left px-6 py-3 border-l-2 transition-colors font-mono text-sm ${
                  selectedExperience === index
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-title-dark/20 text-title-dark hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {exp.role}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/mrrafaelmendes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left px-6 py-3 border-l-2 border-title-dark/20 text-title-dark/60 hover:bg-primary/5 hover:text-primary transition-colors font-mono text-sm"
            >
              More on LinkedIn
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`transition-all duration-300 ${
                selectedExperience === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 absolute pointer-events-none'
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-title-light mb-2">
                {exp.role}{' '}
                <span className="text-primary">@ {exp.company}</span>
              </h3>
              <p className="text-title-dark font-mono text-sm mb-6">{exp.period}</p>
              <p className="text-title-dark text-base mb-6">{exp.description}</p>
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3 text-title-dark text-sm md:text-base">
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
