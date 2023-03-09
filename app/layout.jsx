import './globals.css' 
import {Montserrat} from '@next/font/google'

const montSerrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variables: "--font-montserrat"
})

export default function RootLayout({children}) {
    return (
        <html lang="pt-br">
            <body className={`${montSerrat.className}, mx-16 mb-8 mt-12 bg-slate-800`}>
            <header className="mb-20 flex justify-center items-center font-bold">
                <h1 className='text-7xl text-center text-white'>Movies List</h1>
            </header>
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: "Next app",
    description: "Welcome to Next app"
}