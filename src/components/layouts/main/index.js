import React, { memo } from 'react';
import { Header, Footer } from '../main/components'
import LoadingBar from 'react-redux-loading-bar';

function MainLayout ({children}) {
    return (
        <>
            {/* <LoadingBar className="loading-bar-redux" showFastActions /> */}
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}

export default memo(MainLayout)