import { cilCheck, cilDelete } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCardFooter ,CButton} from '@coreui/react'
import React from 'react'

export const AcceptControl = ({accept}) => {
  return (
    <CCardFooter>
    <CButton onClick={()=>accept('accept')} variant='outline' color="success">
      <CIcon color='#00000' icon={cilCheck} className="me-2" />
    </CButton>
    <CButton onClick={()=>accept('reject')} variant='outline' color="danger">
      <CIcon color='#00000' icon={cilDelete} className="me-2" />
    </CButton>
  </CCardFooter>  )
}
