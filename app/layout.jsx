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
            <body className={`${montSerrat.className}`}>
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: "Next app",
    description: "Welcome to Next app"
}