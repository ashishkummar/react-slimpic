import React from 'react'

export default function Topnav() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light" style={{maxWidth: "90%", margin: "0 auto"}}>
    <div className="container-fluid">
     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Compress Images</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <nav class="nav nav-pills flex-column flex-sm-row" style={{maxWidth: "90%", margin: "0 auto"}}>
  <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Disabled</a>
</nav>

</>
  )
}
