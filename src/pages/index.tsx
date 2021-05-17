import Head from 'next/head'
import { Backgrounds } from '../components/Backgrounds';
import { Controls } from '../components/Controls';
import { Error } from '../components/Error';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadQuotesAsync } from '../store/quotesSlice';


export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(loadQuotesAsync())}, [dispatch]);

  return (
    <>
      <Head>
        <title>Quote Generator 💬</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Error />
      <div className="App text-center flex flex-col justify-center items-center m-auto p-5 min-h-screen bg-black">
        <div className="flex justify-center">
          <img alt="background" src={'logo_large.png'} />
        </div>
          <Backgrounds />
          <Controls />
      </div>
    </>
  );
}
