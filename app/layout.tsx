import '@styles/globals.css'
import { Root } from 'postcss'

export const metadata = {
    title: "Copy Cat",
    descripton: "A simple copy cat app",
}

function RootLayout({children}) {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
