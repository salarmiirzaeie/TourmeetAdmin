import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const RedirectPage = () => {
    const address = window.location.pathname;
    console.log(address);
    return (
        <div >
            <div className='transactionStatus pt-5'>
                <h3>پرداخت با موفقیت انجام شد !</h3>
            </div>
        </div>
    )
}

export default RedirectPage