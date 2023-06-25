import Head from 'next/head';
import React from 'react';
import Text from '../components/Text/Text';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Head>
            <main className='mx-auto flex h-screen w-screen flex-col items-center justify-center'>
                <Text variant='h1' className='ltr' color='primary'>
                    Which would be worse - to live as a monster, or to die as a
                    good man?
                </Text>
            </main>
        </>
    );
}
