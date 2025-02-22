export function ProjectTimeline({ projects }) {
    return (
      <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6">
        {projects.map((project, index) => (
          <div key={project.title} className="mb-10 relative">
            {/* Chấm tròn trên Timeline */}
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-900"></div>
  
            {/* Nội dung dự án */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>
  
              {/* Công nghệ sử dụng */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.builtWith.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
  
              {/* Liên kết đến dự án */}
              <div className="mt-4">
                <a
                  href={project.url}
                  className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  