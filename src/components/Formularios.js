import React from 'react';
import Navbar from './Navbar';

function Formularios() {

  return (
    <div align="center">
        <Navbar />
        <div class="content-wrapper">
    <div class="content">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v2</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <div align="center">
    <h1 className="m-0">Formularios</h1>
    </div>
    {/* /.content */}
  </div>
      </div>
      </div>
  );
}

export default Formularios;