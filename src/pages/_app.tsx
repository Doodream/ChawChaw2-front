import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import '@/styles/globals.css'
import { initializeApp } from 'firebase/app'
import * as process from 'process'
import { AnimatePresence } from 'framer-motion'
import AnimationLayout from '@/components/common/AnimationLayout'
import { RouteProvider } from '@/providers/RouteProvider'

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
  console.log('renderMyApp')

  return (
    <RouteProvider>
      <AnimatePresence initial={false}>
        <AnimationLayout key={router.asPath}>
          <main className="h-screen w-screen max-w-[576px] bg-white">
            <Component {...pageProps} />
          </main>
        </AnimationLayout>
      </AnimatePresence>
    </RouteProvider>
  )
}

export default MyApp
