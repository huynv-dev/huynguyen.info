import { Brand } from "../ui/brand";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      {/* Hero Content */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white animate-fade-in">
        <span className="inline-block animate-jump">Exploring,</span>{" "}
        <span className="inline-block animate-jump delay-150">Learning,</span>{" "}
        <span className="inline-block animate-jump delay-300">Sharing.</span>
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 animate-fade-in delay-500">
        Exploring, Learning, and Sharing the Future of Web Technologies.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4 animate-fade-in delay-700">
        <button className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:scale-105 transition dark:bg-white dark:text-black">
          View Projects
        </button>
        <button className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
          Read Blog
        </button>
      </div>

      {/* Tech Stack Icons */}
      <div className="mt-8 relative w-full overflow-hidden">
        <div className="marquee flex gap-6">
          {Array(2) // Nhân đôi danh sách để tạo hiệu ứng nối tiếp
            .fill([
              "Remix", "Webpack", "Html", "Shopify", "Npm", "MySQL", "MongoDB",
              "NextJS", "React", "TypeScript", "Markdown", "Javascript", "NodeJS",
              "TailwindCSS", "CSS", "Git", "GitHub"
            ])
            .flat()
            .map((tech, index) => (
              <div key={index} className="icon-item">
                <Brand name={tech} iconClassName="h-8 w-8 dark:text-white" />
              </div>
            ))}
        </div>
      </div>

    </section>
  );
}
