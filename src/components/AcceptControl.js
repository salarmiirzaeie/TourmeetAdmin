import { cilCheck, cilDelete } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCardFooter, CButton } from '@coreui/react'
import React from 'react'

export const AcceptControl = ({ accept }) => {
  return (
    <CCardFooter>
      <h2>آیا تور زیر را تایید میکنید ؟</h2>
      <CButton onClick={() => accept('accept')} variant='' color="success" style={{ padding: 15, margin: 10 }}>
        {/* <CIcon color='#00000' icon={cilCheck} className="me-2" /> */}تایید
      </CButton>
      <CButton onClick={() => accept('reject')} variant='outline' color="danger" style={{ padding: 15, margin: 10 }}>
        {/* <CIcon color='#00000' icon={cilDelete} className="me-2" /> */}مردود
      </CButton>
    </CCardFooter>)
}
