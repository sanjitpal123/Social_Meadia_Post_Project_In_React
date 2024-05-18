import React from 'react';

function Sidebar({ selectedtab , setselectedtab}) {

  // below function is taking tabname and setting it to setselectedtab 
   
  function handledclick(tabname){

   setselectedtab(tabname)
  }


  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px', minHeight: '70vh' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={()=>{handledclick("Home")}}>
          <a href="#" className={`nav-link text-white ${selectedtab === 'Home' && 'active'}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </a>
        </li>
        <li className="nav-item" onClick={()=>{handledclick("Create Post")}}>
          <a href="#" className={`nav-link text-white ${selectedtab === 'Create Post' && 'active'}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#Createpost"></use></svg>
            Create Post
          </a>
        </li>
      </ul>
      {/* Dropdown menu */}
    </div>
  );
}

export default Sidebar;
