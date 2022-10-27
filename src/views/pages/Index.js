import React, { useEffect ,useState} from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CCardHeader,
  CCardBody,
  CCard,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'
import { Posts } from 'src/components/Posts'
import { getIndex } from 'src/services/blogService'
import { HomePosts } from 'src/components/HomePosts'

const Index = () => {
  const [posts, setposts] = useState([])
  useEffect(() => {
    getIndex().then((res) => {
        // console.log(res.data.posts)
      setposts(res.data.posts)
    })
  }, [])
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow>
          <CCol xs>
            <CCard className="mb-4">
              <CCardHeader>تورهای شما</CCardHeader>
              <CCardBody>
                <HomePosts adress={'/Post/'} posts={posts} />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Index
