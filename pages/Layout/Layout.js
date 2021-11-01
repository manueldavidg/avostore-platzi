import React from 'react'
import Header from '@components/Header.jsx'

function Layout({children}) {
    return (
        <>
            <Header/>
            {children}
            <footer>
                This is the footer
            </footer>
        </>
    )
}

export default Layout
