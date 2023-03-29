import React from 'react'
import type { NextPage } from 'next'
import Header from '@/components/common/header'
import Icons from '@/components/common/icons'
import UserImage from '@/components/common/user-image'
import LottieComponent from '@/components/LottieComponent'

const Home: NextPage = () => {
  return (
    <>
      <Header
        title="메인"
        memberSize={2}
        leftNode={<Icons.ArrowRight className="h-24 w-24" />}
        rightNode={<UserImage src="/icons/user.svg" username={'doodream'} size={50} />}
      />
      <LottieComponent />
    </>
  )
}

export default Home
