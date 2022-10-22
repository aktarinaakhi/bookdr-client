import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const PageLayout = ({ children }) => {
  return (
    <div>

      <div className="container my-4">
        <div className="row">
          <SideBar />
          <div className="col-md-9 my-2">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout
