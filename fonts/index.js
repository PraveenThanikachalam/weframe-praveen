import { Fira_Code } from 'next/font/google';
import localFont from 'next/font/local';

export const oceanwide = localFont({
  src: '../fonts/oceanwide/oceanwide-semibold.woff',
  variable: '--oceanwide-font',
});

export const nt_adventure = localFont({
  src: '../fonts/nt_adventure/ntadventure.woff',
  variable: '--ntadventure-font',
});
export const lexend = localFont({
  src: '../fonts/lexend/lexend.woff',
  variable: '--lexend-font',
});

export const fira_code = Fira_Code({
  subsets: ['latin'],
  variable: '--fira-code-font',
});
