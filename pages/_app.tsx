import '../styles/globals.scss';
import '../styles/font-icons.scss';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer />
        </>
    );
}
