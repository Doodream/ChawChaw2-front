import React, { PropsWithChildren } from 'react'
import { BaseModal } from '@/components/common/modal/index'
import { ModalProps } from '@/hooks/common/use-modal'
import { ModalPortalTargetEnum } from '@/constants/modal-portal-target-enum'
import { SelectModalTypeEnum } from '@/constants/select-modal-type-enum'

type SelectModalProps = {
  modalProps: ModalProps
  modalType: SelectModalTypeEnum
  header?: React.ReactNode
  content?: React.ReactNode
  headerText?: string
  contentText?: string
  okText?: string
  cancelText?: string
  handleOk?(): void
  handleCancel?(): void
}

const SelectModal = ({
  modalProps,
  modalType,
  header,
  content,
  headerText,
  contentText,
  handleOk,
  handleCancel,
  okText,
  cancelText
}: SelectModalProps): JSX.Element => {
  return (
    <BaseModal modalProps={modalProps} portalTarget={ModalPortalTargetEnum.ModalRoot}>
      <div className="max-w-320 flex min-w-200 flex-col">
        {(header || headerText) && <SelectModal.Header headerText={headerText}>{header}</SelectModal.Header>}
        {(content || contentText) && <SelectModal.Content contentText={contentText}>{content}</SelectModal.Content>}
        <SelectModal.Footer
          modalType={modalType}
          okText={okText}
          cancelText={cancelText}
          handleOk={() => (handleOk ? handleOk() : modalProps.handleModalClose())}
          handleCancel={() => (handleCancel ? handleCancel() : modalProps.handleModalClose())}
        />
      </div>
    </BaseModal>
  )
}

const Header = ({ children, headerText }: PropsWithChildren<{ headerText?: string }>): JSX.Element => {
  return (
    <div className="align-center flex min-h-30 w-full rounded-t-10 bg-primary p-10">
      {children}
      {headerText && <span className="head5 text-white">{headerText}</span>}
    </div>
  )
}

const Content = ({ children, contentText }: PropsWithChildren<{ contentText?: string }>): JSX.Element => {
  return (
    <div className="flex min-h-100 w-full items-center justify-center bg-white p-10">
      {children}
      {contentText && <span className="paragraph">{contentText}</span>}
    </div>
  )
}

const Footer = ({
  modalType,
  okText = '확인',
  cancelText = '취소',
  handleOk,
  handleCancel
}: {
  modalType: SelectModalTypeEnum
  okText?: string
  cancelText?: string
  handleOk(): void
  handleCancel(): void
}): JSX.Element => {
  return (
    <div className="flex w-full items-center justify-center gap-10 rounded-b-10 bg-white p-10">
      {(modalType === SelectModalTypeEnum.ActionCancel || modalType === SelectModalTypeEnum.Action) && (
        <button type="button" className="btn-primary btn grow" onClick={handleOk}>
          {okText}
        </button>
      )}
      {(modalType === SelectModalTypeEnum.ActionCancel || modalType === SelectModalTypeEnum.Cancel) && (
        <button type="button" className="btn-outline btn-primary btn grow" onClick={handleCancel}>
          {cancelText}
        </button>
      )}
    </div>
  )
}

SelectModal.Header = Header
SelectModal.Footer = Footer
SelectModal.Content = Content

export default SelectModal
