/* This example requires Tailwind CSS v2.0+ */
import { LockClosedIcon, XMarkIcon } from '@heroicons/react/24/outline'

import React, { useEffect, useState } from 'react';

import { setCookie, hasCookie } from 'cookies-next';


export function CookieConsent() {
    const [consent, setConsent] = useState(true);
    useEffect(() => {
        setConsent(hasCookie('uowl_consent'));
    }, []);
    const acceptCookie = () => {
        setConsent(true);
        setCookie('uowl_consent', 'true', { maxAge: 60 * 60 * 24 * 365 });
        gtag('consent', 'update', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
        });
        console.log('accepting cookies');
    };
    const closeP = () => {
        setConsent(true);
        console.log('closing');
    };
    const denyCookie = () => {
        setConsent(true);
        setCookie('uowl_consent', 'false', { maxAge: 60 * 60 * 24 * 365 });
        console.log('denying cookie');
    };
    if (consent === true) {
        return null;
    }
    return (
        <>
            {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
            <div className="fixed inset-x-0 bottom-0">
                <div className="bg-primary">
                    <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="flex w-0 flex-1 items-center mr-16">
                                <span className="flex rounded-lg bg-indigo-800 p-2">
                                    <LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                                <p className="ml-3 font-normal text-sm text-white">
                                    <span className="md:hidden">We use cookies. Select &quot;Accept All&quot; to allow them to be used. Read our Cookie Policy.</span>
                                    <span className="hidden md:inline">We use our own cookies as well as third-party cookies on our websites to enhance your experience, analyze our traffic, and for security and marketing. Select &quot;Accept All&quot; to allow them to be used. Read our Cookie Policy.</span>
                                </p>
                            </div>
                            <div className="order-3 mt-2  w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                <div className="flex justify-end">
                                    <button
                                        onClick={(e) => denyCookie()}
                                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                                    >
                                        Deny All
                                    </button>
                                    <button
                                        onClick={() => {
                                            acceptCookie();
                                        }}
                                        className="flex items-center justify-center ml-3 rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                                    >
                                        Accept All
                                    </button>
                                </div>
                            </div>
                            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        closeP();
                                    }}
                                    className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                                >

                                    <span className="sr-only">Dismiss</span>
                                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

