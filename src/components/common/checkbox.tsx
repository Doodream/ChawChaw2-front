import React from 'react'
import Icons from '@/components/common/icons'
import { UseFormRegisterReturn } from 'react-hook-form'

type CheckboxProps = {
  id: string
  checked: boolean
  disabled?: boolean
  text?: string
  size?: number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  register?: UseFormRegisterReturn
}

const Checkbox = ({ id, checked, disabled, onChange, text, size = 16, register }: CheckboxProps): JSX.Element => {
  return (
    <label htmlFor={id} className="flex items-center gap-4">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        id={id}
        disabled={disabled}
        {...register}
      />
      {checked && (
        <div className={`flex h-${size} w-${size} cursor-pointer items-center justify-center rounded-4 bg-primary`}>
          <Icons.Check className={`h-${size} w-${size} text-white`} />
        </div>
      )}
      {checked === false && (
        <div className={`rounded-4 border-1 border-primary bg-white w-${size} h-${size} cursor-pointer`}></div>
      )}
      {disabled && (
        <div className={`rounded-4 border-1 border-gray-600 bg-gray-300 w-${size} h-${size} cursor-pointer`} />
      )}
      <span>{text}</span>
    </label>
  )
}

export default Checkbox
