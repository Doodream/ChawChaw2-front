import Header from '@/components/common/header'
import Icons from '@/components/common/icons'
import React from 'react'
import LottieComponent from '@/components/LottieComponent'
import useCustomRouter from '@/hooks/customRouter'

const NewPage = () => {
  const { back, push } = useCustomRouter()
  console.log('render NewPage')

  return (
    <>
      <Header
        title="메인"
        memberSize={2}
        leftNode={
          <button onClick={(e) => back()}>
            <Icons.ArrowRight className="h-24 w-24" />
          </button>
        }
        // rightNode={<UserImage src="/icons/user.svg" username={'doodream'} size={50} />}
      />
      <button className="btn-primary" onClick={() => push('/')}>
        홈으로 가기
      </button>
      <LottieComponent />
    </>
  )
}

export default NewPage
