import React, { PropsWithChildren } from 'react'

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = ({
  onClick,
  type,
  children
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
