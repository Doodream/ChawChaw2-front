import type { AppProps } from 'next/app'
import React from 'react'
import '@/styles/globals.css'
import Layout from '@/components/common/layout'
import { initializeApp } from 'firebase/app'
import * as process from 'process'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

function MyApp({ Component, pageProps }: AppProps) {
  const app = initializeApp(firebaseConfig)
  console.log('empty_commit_8')
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
