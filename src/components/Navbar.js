import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'bootstrap';

function Navbar() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    const history = useHistory();

    const usuario = localStorage.getItem('usuario')


    useEffect(() => {
        const isLoggedIn = !!localStorage.getItem('usuario');
        if (!isLoggedIn) {
          toast.error('No has iniciado sesión');
          history.push('/login');
        }
      }, []);


    const handleLogout = () => {
        // Eliminar los datos del localStorage
        localStorage.removeItem('usuario');
    
        // Mostrar alerta utilizando react-toastify
        toast.info('Se cerró la sesión');
    
        // Redireccionar al inicio de sesión u otra página
        history.push('/login'); // Redirige al componente de inicio de sesión
      };

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };
    return (
        <div className="wrapper">
  {/* Preloader */}
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-dark" >
    {/* Left navbar links */}
    <ul className="navbar-nav" >
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* Navbar Search */}
      
      {/* Messages Dropdown Menu */}
      
            {/* Message End */}
          
            {/* Message End */}
          
            {/* Message End */}
         
      {/* Notifications Dropdown Menu */}
      
      
    </ul>
  </nav>
  {/* /.navbar */}
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4" style={ { height: '800px' } }>
    {/* Brand Logo */}
    <a href="https://femexbam.org.mx/" target="_blank" className="brand-link">
      <img src="dist/img/FEMEXBAM.png" alt="FEMEXBAMLOGO" className=" img-circle elevation-3" style={{opacity: '2', height:'100px', width:'100px'}} />
      {'  '} 
      <span className=" font-weight-light">       FEMEXBAM</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
  {/* Sidebar user panel (optional) */}
  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    <div className="image">
    </div>
    <div className="info">
      <a href="#" className="d-block">{usuario}</a>
    </div>
  </div>
  {/* SidebarSearch Form */}
  
  {/* Sidebar Menu */}
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
      <li className="nav-item menu-open">
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href="/escoltas" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Escoltas         </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Bandas" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Bandas</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/formularios" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>Formularios</p>
            </a>
          </li>
          <li className="nav-item">
            <button color="danger" onClick={handleLogout}> <i class="fas fa-users mr-2"></i> Cerrar sesión</button>
          </li>
        </ul>
      </li>
      
      
    </ul>
  </nav>
  {/* /.sidebar-menu */}
</div>
{/* /.sidebar */}

    {/* /.sidebar */}
  </aside>
  {/* Content Wrapper. Contains page content */}
  
  {/* /.content-wrapper */}
  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark"  >
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
  {/* Main Footer */}
</div>

      );
    }
    
    export default Navbar;