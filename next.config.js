/** @type {import('next').NextConfig} */

module.exports = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
  })

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const withPWA = require('next-pwa')({
    dest: 'public'
  })

  const nextConfig = {
    compress: true,
    env: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID
    },
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
      // svg를 컴포넌트로 가져와서 사용가능
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
      return config
    }
  }

  return withBundleAnalyzer(withPWA(nextConfig))
}
