import React, { Suspense, useEffect } from 'react'
import type { NextPage } from 'next'
import Header from '@/components/common/header'
import Icons from '@/components/common/icons'
import UserImage from '@/components/common/user-image'
import LottieComponent from '@/components/LottieComponent'
const Spline = React.lazy(() => import('@splinetool/react-spline'))

const Home: NextPage = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Header
        title="메인"
        memberSize={2}
        leftNode={<Icons.ArrowRight className="h-24 w-24" />}
        rightNode={<UserImage src="/icons/user.svg" username={'doodream'} size={50} />}
      />
      {/*<LottieComponent />*/}
      {/*  <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.279/build/spline-viewer.js"></script>*/}
      {/*  <spline-viewer url="https://prod.spline.design/3C7bkjmzXybvnUIu/scene.splinecode"></spline-viewer>*/}
      <Spline scene="https://prod.spline.design/3C7bkjmzXybvnUIu/scene.splinecode" />
    </Suspense>
  )
}

export default Home
