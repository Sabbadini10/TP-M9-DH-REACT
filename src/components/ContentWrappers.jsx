import React from 'react'
import ContentRowTop from './ContentRowTop';
import TopBar from './TopBar'
import Footer from './Footer'

export const ContentWrappers = () => {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
      <TopBar />
      <ContentRowTop />
      </div>
      <Footer />
    </div>
  )
}


export default ContentWrappers;
