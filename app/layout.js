import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Business Planner',
  description: 'Business Planner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='pt-24'>
        <header className='px-24 bg-slate-600 py-1 fixed top-0 left-0 w-full'>
          <nav>
            <ul className='list-none flex justify-evenly items-center'>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/chat">consult</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
