import React from 'react'
import { AppHeader } from './header'
import AppFooter from './footer'

const AppLayout = ({ children }) => {
    return (
        <div>
            <AppHeader />
            <main className="mt-20 mb-4">{children}</main>
            <AppFooter />
        </div>
    )
}

export default AppLayout