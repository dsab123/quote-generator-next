import React from "react";
import { signIn, signOut, useSession } from 'next-auth/client';
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import('react-tooltip'), {
    ssr: false
  });

export function Navbar() {
    const [ session, loading ] = useSession();
  
    return <>
        <div className="text-left flex flex-row justify-between">
            <button
                data-tip="Coming Soon!" data-event="click" data-for="createCollection"
                className="text-gray-500 font-bold py-1 px-2 hover:text-white cursor-pointer rounded">
                Create Quotes Collection 📃
            </button>
            <ReactTooltip 
                globalEventOff="mouseover"
                id='createCollection'
                effect='solid' 
                place='right'
                delayHide={500}
                arrowColor='transparent'
                backgroundColor='#7F221E'
                overridePosition={ (
                    { left, top },
                    currentEvent, currentTarget, node) => {
                  left =(document.documentElement.clientWidth - node.clientWidth) / 2;
                  return { top, left }
                } }
            >
                <p className="text-white text-2xl">
                    Coming Soon!
                </p>
            </ReactTooltip>
            
            {!session && <>
                <button 
                    className="text-white font-bold py-1 px-2 cursor-pointer hover:underline"
                    onClick={() => signIn()}>
                        {loading ? 'loading...' : 'Sign in'}
                </button>
            </>}
            {session && <>
                <button
                    className="text-white font-bold py-1 px-2 cursor-pointer hover:underline"
                    onClick={() => signOut()}>
                        {loading ? 'loading...' : 'Sign out'}
                </button>
            </>}
        </div>
    </>
}