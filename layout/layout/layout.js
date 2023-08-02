import { Footer, Meta, MobileNav } from 'layout'

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <div className="min-h-screen">
                <hr className="h-4 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
                <main>{children}</main>
            </div>
            <MobileNav />
            <Footer />
            <hr className="h-4 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
        </>
    )
}
