import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'
import { Doc } from '@/content'
import { getNavInfo } from '@/lib/getNavInfo'
import Link from 'next/link'

interface Props {
  doc: Doc
  className?: string
}

const Breadcrumbs: React.FC<Props> = ({ doc, className }) => {
  // Implement your component logic here

  const docs = doc.slug.split('/')

  const navInfo = getNavInfo(doc)

  if (
    docs.length === 1 ||
    !navInfo ||
    !navInfo.navItem?.breadcrumbParentItem ||
    navInfo.navItem.breadcrumbRoot
  ) {
    return null
  }

  const { breadcrumbParentItem } = navInfo.navItem

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {'href' in breadcrumbParentItem ? (
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={breadcrumbParentItem.href}>
                {breadcrumbParentItem.title}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : null}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{navInfo.navItem.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default Breadcrumbs
