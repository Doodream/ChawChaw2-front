import { useRouter } from 'next/router'
import { UrlObject } from 'url'
import { useContext } from 'react'
import { RouteContext } from '@/providers/RouteProvider'

type TransitionOptions = {
  shallow?: boolean
  locale?: string | false
  scroll?: boolean
}
const useCustomRouter = () => {
  const router = useRouter()
  const { setIsPush } = useContext(RouteContext)
  const push = (url: UrlObject | string, as?: UrlObject | string, options?: TransitionOptions) => {
    setIsPush(true)
    return router.push(url, as, options)
  }

  const back = () => {
    setIsPush(false)
    return router.back()
  }

  return {
    ...router,
    push,
    back
  }
}

export default useCustomRouter
