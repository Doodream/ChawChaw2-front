/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    FIREBASE_API_KEY: 'AIzaSyAPPDPbRJpIyu85TfVohtElpSnt7rFehN0',
    FIREBASE_AUTH_DOMAIN: 'chawchaw.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'chawchaw',
    FIREBASE_STORAGE_BUCKET: 'chawchaw.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '259242347220',
    FIREBASE_APP_ID: 'G-Y17VMGKWTH',
    MEASUREMENT_ID: 'G-Y17VMGKWTH'
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
