"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'


const Nav = () => {
  const isUserLoggedIn : boolean = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
  }, [])

  return (
    <nav className='flex flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg" width={33} height={33} alt="logo" />
        <p className='logo_text'>CopyCat</p>
      </Link>

      {/*Mobile Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt"
            className='black_btn'>
              Create Prompt
            </Link>
            <button type='button' className='outline_btn' onClick={signOut}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image src="/assets/images/logo.svg" width={37} height={37} alt="user" className='rounded-full' />
            </Link>
          </div>
          
          ) : (
            <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button 
                type='button' 
                key={provider.name} 
                onClick={()=> signIn(provider.id) } 
                className='black_btn'>
                  Sign in with {provider.name}
                </button>
              ))
            }
            </>
          )}
      </div>
      <div className='sm:hidden flex gap-3 relative'>
            {isUserLoggedIn ? (
              <div className='flex'>
                <Image src="/assets/images/logo.svg" width={33} height={33} alt="logo" />
              </div>
            ) : (
              <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button 
                type='button' 
                key={provider.name} 
                onClick={()=> signIn(provider.id) } 
                className='black_btn'>
                  Sign in with {provider.name}
                </button>
              ))
            }
            </>
            )
              }
        </div>
    </nav>
  )
}

export default Nav
