import React, { ReactNode } from 'react'
type HeaderProps = {
  title?: string
  memberSize?: number
  leftNode?: ReactNode
  rightNode?: ReactNode
}
const Header = ({ title, leftNode, rightNode, memberSize }: HeaderProps): JSX.Element => {
  return (
    <header className="space-x flex h-70 w-full items-center border-b-1 border-gray-100 px-10">
      <div className="w-full">{leftNode}</div>
      {title && (
        <div className="flex w-full items-center justify-center gap-5">
          <h1 className="head5 overflow-hidden text-ellipsis">{title}</h1>
          {memberSize && memberSize > 1 && <span className="head5 text-gray-300">{memberSize}</span>}
        </div>
      )}
      <div className="flex w-full justify-end">{rightNode}</div>
    </header>
  )
}

export default Header
