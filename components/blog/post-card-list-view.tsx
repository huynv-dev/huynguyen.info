import clsx from "clsx";
import type { Blog } from "contentlayer/generated";
import { TagsList } from "~/components/blog/tags";
import { GrowingUnderline } from "~/components/ui/growing-underline";
import { Image } from "~/components/ui/image";
import { Link } from "~/components/ui/link";
import { SITE_METADATA } from "~/data/site-metadata";
import type { CoreContent } from "~/types/data";
import { formatDate } from "~/utils/misc";

export function PostCardListView({
  post,
  loading,
}: {
  post: CoreContent<Blog>;
  loading?: "lazy" | "eager";
}) {
  let { slug, date, title, summary, tags, images, readingTime } = post;

  return (
    <article className="group relative overflow-hidden rounded-lg border border-gray-300 bg-white p-6 shadow transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
        {/* Thumbnail */}
        <Link
          href={`/writing/${slug}`}
          className="relative block overflow-hidden rounded-lg shadow transition-all duration-300 group-hover:shadow-xl"
        >
          <Image
            src={images && images.length > 0 ? images[0] : SITE_METADATA.socialBanner}
            alt={title}
            width={500}
            height={300}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
            loading={loading}
          />
        </Link>

        {/* Nội dung */}
        <div className="flex flex-col justify-between space-y-3">
          {/* Ngày & Thời gian đọc */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="mx-2">•</span>
            <span>{Math.ceil(readingTime.minutes)} min read</span>
          </div>

          {/* Tiêu đề */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            <Link href={`/writing/${slug}`} className="transition-all hover:text-black dark:hover:text-white">
              <GrowingUnderline>{title}</GrowingUnderline>
            </Link>
          </h2>

          {/* Tags */}
          <TagsList tags={tags} />

          {/* Mô tả */}
          <p className="line-clamp-2 text-gray-600 dark:text-gray-400 md:line-clamp-3">
            {summary}
          </p>

          {/* Nút "Read article" */}
          <div>
            <Link
              href={`/writing/${slug}`}
              className="inline-flex items-center text-gray-800 transition-all hover:translate-x-1 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Read article →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
