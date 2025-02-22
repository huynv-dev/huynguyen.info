import type { Blog } from "contentlayer/generated";
import { Link } from "~/components/ui/link";
import { SITE_METADATA } from "~/data/site-metadata";
import { GrowingUnderline } from "~/components/ui/growing-underline";
import type { CoreContent } from "~/types/data";
import { formatDate } from "~/utils/misc";

export function PostCardGridView({ post }: { post: CoreContent<Blog> }) {
  let { path, date, title, images, readingTime } = post;

  return (
    <article className="group relative rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-900">
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images && images.length > 0 ? images[0] : SITE_METADATA.socialBanner}
          alt={title}
          className="w-full h-48 object-cover rounded-lg transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        {/* Date & Reading Time */}
        <div className="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date)}</time>
          <span>•</span>
          <span>{Math.ceil(readingTime.minutes)} min read</span>
        </div>

        {/* Title with Growing Underline */}
        <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
          <Link href={`/${path}`} className="transition-all hover:text-black dark:hover:text-white">
            <GrowingUnderline>{title}</GrowingUnderline>
          </Link>
        </h3>
      </div>
    </article>
  );
}
