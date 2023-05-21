import type { AppProps } from 'next/app'
import React from 'react'
import '@/styles/globals.css'
import { initializeApp } from 'firebase/app'
import * as process from 'process'
import { AnimatePresence } from 'framer-motion'
import AnimationLayout from '@/components/common/AnimationLayout'
import { RouteProvider } from '@/providers/RouteProvider'
import Head from 'next/head'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const app = initializeApp(firebaseConfig)

  console.log(1)
  return (
    <RouteProvider>
      <AnimatePresence initial={false}>
        <AnimationLayout key={router.asPath}>
          <Head>
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" type="image/png" sizes="196x196" href="../../public/assets/favicon-196.png" />
            <link rel="apple-touch-icon" href="../../public/assets/apple-icon-180.png" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2048-2732.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2732-2048.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1668-2388.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2388-1668.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1536-2048.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2048-1536.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1668-2224.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2224-1668.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1620-2160.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2160-1620.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1290-2796.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2796-1290.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1179-2556.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2556-1179.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1284-2778.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2778-1284.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1170-2532.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2532-1170.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1125-2436.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2436-1125.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1242-2688.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2688-1242.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-828-1792.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1792-828.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1242-2208.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-2208-1242.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-750-1334.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1334-750.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-640-1136.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
              rel="apple-touch-startup-image"
              href="../../public/assets/apple-splash-dark-1136-640.jpeg"
              media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <meta name="theme-color" content="#FFFFFF" />
            <meta name="application-name" content="ChawChaw" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="ChawChaw" />
            <meta name="description" content="채팅 어플" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#2B5797" />
            <meta name="msapplication-tap-highlight" content="no" />

            <link rel="mask-icon" href="../../public/assets/apple-icon-180.png" color="#FFFFFF" />
            <link rel="shortcut icon" href="../../public/assets/favicon-196.png" />
          </Head>
          <main className="h-screen w-screen max-w-[576px] bg-white">
            <Component {...pageProps} />
          </main>
        </AnimationLayout>
      </AnimatePresence>
    </RouteProvider>
  )
}

export default MyApp
