import type { AppProps } from 'next/app'
import '../styles/globals.css'
import LayoutApp from '@/layouts/layoutApp'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutApp>
      <Component {...pageProps} />
    </LayoutApp>
  )
}