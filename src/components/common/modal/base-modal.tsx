import React, { PropsWithChildren } from 'react'
import { ModalPortalTargetEnum } from '@/constants/modal-portal-target-enum'
import { ModalProps } from '@/hooks/common/use-modal'
import { createPortal } from 'react-dom'

type BaseMdoalProps = {
  portalTarget: ModalPortalTargetEnum
  modalProps: ModalProps
}

const BaseModal = ({ children, modalProps }: PropsWithChildren<BaseMdoalProps>): JSX.Element => {
  if (typeof window === 'undefined') {
    return <></>
  }
  const element = document.getElementById(ModalPortalTargetEnum.ModalRoot) as HTMLElement
  const { open, handleModalClose } = modalProps

  return createPortal(
    <div role="dialog">
      <div
        className={`fixed top-[50%] left-[50%] z-modalRoot ${
          open ? 'block' : 'none'
        } -translate-x-[50%] -translate-y-[50%]`}>
        {children}
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            handleModalClose()
          }
        }}
        onClick={() => handleModalClose()}
        className={`${
          open ? 'flex' : 'none'
        } fixed top-0 left-0 z-modalBackground h-screen w-screen bg-black opacity-20 outline-none`}
      />
    </div>,
    element
  )
}

export default BaseModal
