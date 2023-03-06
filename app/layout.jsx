import './globals.css' 

export default function RootLayout({children}) {
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: "Next app",
    description: "Welcome to Next app"
}