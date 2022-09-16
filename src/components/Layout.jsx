
//import { Consent } from './Consent';
import { CookieConsent } from './CookieConsent';

export function Layout({ children }) {
    return (
        <>
            <main>{children}</main>
            <CookieConsent />
        </>
    );
}