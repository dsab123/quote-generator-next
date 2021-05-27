import React from "react";
import { signIn, signOut, useSession } from 'next-auth/client';

export function Navbar() {
    const [ session, loading ] = useSession();
  
    return <>
        <div className="text-left flex flex-row justify-between">
            <button 
                className="text-gray-400 font-bold py-1 px-2 cursor-pointer hover:text-white"
                onClick={() => console.log('I\'m a person')}>
                    Create Collection
            </button>

            {!session && <>
                <button 
                    className="text-gray-400 font-bold py-1 px-2 cursor-pointer hover:text-white"
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