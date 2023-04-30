import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/ant-menu.css'
import 'styles/ant-pagination.css'
import '@/styles/ant-select.css'
import logo from '@/public/assets/icons/Logo.svg'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
