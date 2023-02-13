import React, { PropsWithChildren } from 'react'

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
}

const Button = ({
  onClick,
  type,
  children,
  disabled
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
