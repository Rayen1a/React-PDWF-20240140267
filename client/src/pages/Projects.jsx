import React from 'react';
import { projectsData } from '../data/mockData';

const Projects = () => {
  return (
    <div className="md:ml-64 min-h-screen bg-slate-50 p-6 md:p-10">
      <h3 className="text-3xl font-bold mb-8 text-slate-800">Proyek Yang Kami Tangani</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-1 transition duration-300">
            <div className="h-3 bg-blue-600 w-full"></div>
            <div className="p-6">
              <span className="text-xs font-bold text-blue-500 uppercase">{project.category}</span>
              <h4 className="text-xl font-bold mt-1 text-slate-800">{project.title}</h4>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">{project.desc}</p>
              <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center text-xs font-semibold text-slate-400">
                <span>Status:</span>
                <span className={project.status === 'Completed' ? 'text-green-500' : 'text-orange-500'}>{project.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;