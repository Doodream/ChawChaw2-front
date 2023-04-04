import React, { Suspense, useEffect } from 'react'

const LottieComponent = () => {
  useEffect(() => {
    import('@lottiefiles/lottie-player')
  }, [])

  return (
    <Suspense fallback={<div>loading ...</div>}>
      <lottie-player
        id="firstLottie"
        // ref={ref}
        autoplay
        // controls
        loop
        mode="normal"
        src="/images/item-shipped.json"
        style={{ width: '300px', height: '300px' }}
      />
      <lottie-player
        id="secondLottie"
        // ref={ref}
        autoplay
        // controls
        loop
        mode="normal"
        src="/images/girl-chatting-with-online-friends.json"
        style={{ width: '300px', height: '300px' }}
      />
    </Suspense>
  )
}

export default LottieComponent
