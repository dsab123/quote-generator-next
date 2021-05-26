import React from 'react';
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Backgrounds } from 'components/Backgrounds';
import { Controls } from 'components/Controls';
import { Error } from 'components/Error';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadQuotesAsync } from 'store/quotesSlice';
import { Navbar } from 'components/Navbar';

export default function Home() {
  const dispatch = useDispatch();
  const [ session, loading ] = useSession()

  useEffect(() => {dispatch(loadQuotesAsync())}, [dispatch]);

  return (
    <>
      <Head>
        <title>Quote Generator 💬</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Error />
      <div className="App m-auto p-5 min-h-screen bg-black">
        <Navbar />
        <div className="text-center flex flex-col justify-center items-center ">
          <div className="flex justify-center">
            <img alt="Quote Generator" src={'logo_large.png'} />
          </div>
          <Backgrounds />
          <Controls />
        </div>
      </div>
    </>
  );
}
