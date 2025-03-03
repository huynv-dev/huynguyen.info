import clsx from "clsx";
import { Github } from "lucide-react";
import type { Route } from "next";
import { Fragment } from "react";
import type { BrandsMap } from "~/components/ui/brand";
import { Brand } from "~/components/ui/brand";
import { GradientBorder } from "~/components/ui/gradient-border";
import { GrowingUnderline } from "~/components/ui/growing-underline";
import { Image } from "~/components/ui/image";
import { Link } from "~/components/ui/link";
import type { PROJECTS } from "~/data/projects";
import type { GithubRepository } from "~/types/data";
import { ProjectTimeline } from "./project-timeline";

export function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  let { title, description, imgSrc, url, repo, builtWith, links } = project;
  let repository = repo as GithubRepository;
  let href = repository?.url || url;
  let lang = repository?.languages?.[0];

  return (
    <GradientBorder className="rounded-lg transition-all duration-300 hover:shadow-2xl dark:bg-white/5">
      <Link
        href={href as Route}
        title={title}
        className="block p-6 rounded-lg bg-white dark:bg-gray-900 hover:scale-[1.02] transition-transform"
      >
        {/* Hình ảnh & Tiêu đề */}
        <div className="flex items-center gap-4">
          <Image
            src={imgSrc}
            alt={title}
            width={80}
            height={80}
            className="h-14 w-14 rounded-lg shadow-sm"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              <GrowingUnderline>{title}</GrowingUnderline>
            </h2>
          </div>
        </div>

        {/* Mô tả */}
        <p className="mt-4 text-gray-600 dark:text-gray-400 line-clamp-3">{repository?.description || description}</p>

        {/* Stack + Thông tin bổ sung */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {/* Stack */}
          <div className="flex items-center gap-2">
            {builtWith?.map((tool) => (
              <Brand key={tool} name={tool as keyof typeof BrandsMap} iconClassName="h-5 w-5" />
            ))}
          </div>

          {/* Github Stars */}
          {repository && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Github size={16} />
              <span className="text-sm font-medium">{repository?.stargazerCount} Stars</span>
            </div>
          )}

          {/* Language */}
          {lang && (
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Brand name={lang.name as keyof typeof BrandsMap} as="icon" className="h-5 w-5" />
              <span className="text-sm font-medium">{lang.name}</span>
            </div>
          )}

          {/* Links */}
          {links && (
            <div className="flex gap-2">
              {links.map(({ title, url }) => (
                <Link
                  key={url}
                  href={url}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  {title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </Link>
    </GradientBorder>
  );
}
