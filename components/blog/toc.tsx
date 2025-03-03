'use client'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { ChevronRight } from 'lucide-react'
import { Link } from '~/components/ui/link'

type TocItem = {
  value: string
  url: string
  depth: number
}

export function TableOfContents({ toc, className }: { toc: TocItem[]; className?: string }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Checking:', entry.target.id, 'isIntersecting:', entry.isIntersecting)
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.1 }
    )

    toc.forEach(({ url }) => {
      const section = document.querySelector(url)
      if (section) {
        console.log('Observing section:', url)
        observer.observe(section)
      } else {
        console.warn('Section not found:', url)
      }
    })

    return () => observer.disconnect()
  }, [toc])

  return (
    <details className={clsx('sticky top-20 space-y-4', className)} open>
      <summary className="flex cursor-pointer items-center gap-1 marker:content-none">
        <ChevronRight
          strokeWidth={1.5}
          size={20}
          className="chevron-right rotate-0 transition-transform"
        />
        <span className="text-lg font-medium">On this page</span>
      </summary>
      <ul className="flex flex-col space-y-2">
        {toc.map(({ value, depth, url }) => {
          const isActive = activeId === url.replace('#', '')
          return (
            <li
              key={url}
              className={clsx(
                'font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200',
                isActive && 'font-bold text-blue-600 dark:text-blue-400'
              )}
              style={{ paddingLeft: (depth - 2) * 16 }}
            >
              <Link href={url}>{value}</Link>
            </li>
          )
        })}
      </ul>
    </details>
  )
}
