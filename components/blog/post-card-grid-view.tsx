import type { Blog } from 'contentlayer/generated'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import type { CoreContent } from '~/types/data'
import { formatDate } from '~/utils/misc'

export function PostCardGridView({ post }: { post: CoreContent<Blog> }) {
  let { path, date, title, images, readingTime } = post

  return (
    <Link href={`/${path}`} className="block h-full">
      <article className="relative flex h-full flex-col rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden rounded-lg">
          <img
            src={images && images.length > 0 ? images[0] : SITE_METADATA.socialBanner}
            alt={title}
            className="h-full w-full rounded-lg object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
          />
        </div>

        {/* Content */}
        <div className="mt-4 flex flex-grow flex-col space-y-2">
          {/* Date & Reading Time */}
          <div className="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
            <span>•</span>
            <span>{Math.ceil(readingTime.minutes)} min read</span>
          </div>

          {/* Title with Growing Underline */}
          <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
            <GrowingUnderline>{title}</GrowingUnderline>
          </h3>
        </div>
      </article>
    </Link>
  )
}
