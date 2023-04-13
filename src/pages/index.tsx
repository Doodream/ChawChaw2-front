import React, { Suspense, useContext, useEffect } from 'react'
import type { NextPage } from 'next'
import Header from '@/components/common/header'
import Icons from '@/components/common/icons'
import useCustomRouter from '@/hooks/customRouter'

const Home: NextPage = () => {
  const { back, push } = useCustomRouter()

  console.log('render Home')
  return (
    <>
      <Header
        title="메인"
        memberSize={2}
        leftNode={
          <button
            onClick={(e) => {
              e.preventDefault()
              back()
            }}>
            <Icons.ArrowRight className="h-24 w-24" />
          </button>
        }
      />
      <button className="btn-primary" onClick={() => push('/new-page')}>
        새로운 페이지로 가기
      </button>
    </>
  )
}

export default Home
