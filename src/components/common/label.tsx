import React, { PropsWithChildren, useMemo } from 'react'
import { LabelStatusEnum } from '@/constants/label-status-enum'

type LabelProps = {
  id: string
  text: string
  helpText?: string
  status?: LabelStatusEnum
}

const Label = ({
  id,
  text,
  helpText,
  children,
  status = LabelStatusEnum.Normal
}: PropsWithChildren<LabelProps>): JSX.Element => {
  const statusHelpTextColor = useMemo(
    () =>
      ({
        [LabelStatusEnum.Normal]: '',
        [LabelStatusEnum.Error]: 'text-error',
        [LabelStatusEnum.Disabled]: 'text-gray-300',
        [LabelStatusEnum.Success]: 'text-success'
      }[status]),
    [status]
  )
  return (
    <label htmlFor={id} className="input-label mb-10">
      <span className="paragraph">{text}</span>
      {children}
      <span className={`label ${statusHelpTextColor}`} role="alert" aria-live="polite">
        {helpText}
      </span>
    </label>
  )
}

export default Label
