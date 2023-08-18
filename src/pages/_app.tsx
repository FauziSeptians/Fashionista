import 'bootstrap/dist/css/bootstrap.css'
import Mainlayout from '@/component/mainlayout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Mainlayout>
        <div className='mx-5'>
          <Component {...pageProps} />
        </div>
      </Mainlayout>
    </div>
  );
}


