import { useEffect, useRef, useState } from 'react'

type UseModalProps = {
  initOpen?: boolean
}

export type ModalProps<T = unknown> = {
  open: boolean
  data?: T
  setData(data: T): void
  handleModalClose(): void
  handleModalOpen(): void
  setHandleBeforeModalClose(callBackFn: () => void): void
  setHandleAfterModalClose(callBackFn: () => void): void
}

const useModal = <T>({ initOpen = false }: UseModalProps): ModalProps<T> => {
  const [open, setOpen] = useState(initOpen)
  const [data, setData] = useState<T>()
  const handleAfterModalClose = useRef<() => void>()
  const handleBeforeModalClose = useRef<() => void>()

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    handleBeforeModalClose.current?.()
    setOpen(false)
  }

  const setHandleBeforeModalClose = (callBackFn: () => void) => {
    handleBeforeModalClose.current = callBackFn
  }

  const setHandleAfterModalClose = (callBackFn: () => void) => {
    handleAfterModalClose.current = callBackFn
  }

  useEffect(() => {
    if (!open) {
      handleAfterModalClose.current?.()
    }
  }, [open])

  return {
    open,
    data,
    setData,
    handleModalClose,
    handleModalOpen,
    setHandleBeforeModalClose,
    setHandleAfterModalClose
  }
}

export default useModal
