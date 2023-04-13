import Link from 'next/link'
import React, { PropsWithChildren, useContext } from 'react'
import { UrlObject } from 'url'
import { RouteContext } from '@/providers/RouteProvider'

const RouteLink = ({
  children,
  href,
  className
}: PropsWithChildren<{ href: UrlObject | string; className?: string }>) => {
  const { setIsPush } = useContext(RouteContext)
  return (
    <Link href={href} onClick={() => setIsPush(true)} className={className}>
      {children}
    </Link>
  )
}

export default RouteLink
