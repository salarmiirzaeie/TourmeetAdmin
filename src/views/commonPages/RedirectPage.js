import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const RedirectPage = () => {
    const address = useParams();
    console.log(address);
    return (
        <div >
            <div className='transactionStatus'>
                <h3>پرداخت با موفقیت انجام شد !</h3>
            </div>
        </div>
    )
}

export default RedirectPage