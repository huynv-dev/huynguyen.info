import Link from 'next/link'
import React from 'react'

export default function LogoFlyInLoop() {
  const letters = [
    { char: '<', delay: '0s', transform: 'translate(-100px, -100px)' },
    { char: 'h', delay: '0.1s', transform: 'translate(100px, -100px)' },
    { char: 'u', delay: '0.2s', transform: 'translate(-100px, 100px)' },
    { char: 'y', delay: '0.3s', transform: 'translate(100px, 100px)' },
    { char: 'n', delay: '0.4s', transform: 'translate(0, -150px)' },
    { char: 'g', delay: '0.5s', transform: 'translate(0, 150px)' },
    { char: 'u', delay: '0.6s', transform: 'translate(-150px, 0)' },
    { char: 'y', delay: '0.7s', transform: 'translate(150px, 0)' },
    { char: 'e', delay: '0.8s', transform: 'translate(-100px, 50px)' },
    { char: 'n', delay: '0.9s', transform: 'translate(100px, -50px)' },
    { char: '.', delay: '1.0s', transform: 'translate(0, -100px)' },
    { char: 'i', delay: '1.1s', transform: 'translate(0, -100px)' },
    { char: 'n', delay: '1.2s', transform: 'translate(0, -100px)' },
    { char: 'f', delay: '1.3s', transform: 'translate(0, -100px)' },
    { char: 'o', delay: '1.4s', transform: 'translate(0, -100px)' },
    { char: ' /', delay: '1.5s', transform: 'translate(0, 100px)' },
    { char: '>', delay: '1.6s', transform: 'translate(-100px, 0)' },
  ]

  return (
    <Link href='/' className="flex overflow-hidden whitespace-nowrap">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="animate-fly inline-block text-2xl font-bold"
          style={
            {
              animationDelay: letter.delay,
              '--initial-transform': letter.transform,
            } as React.CSSProperties
          }
        >
          {letter.char}
        </span>
      ))}
    </Link>
  )
}
