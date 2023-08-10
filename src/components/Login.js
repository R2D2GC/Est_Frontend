import React, {useState, useEffect} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button } from "react-bootstrap";

function Login() {

    const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Borrar los datos del localStorage al cargar la página de inicio de sesión
    localStorage.clear();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://192.168.1.65:5000/api/usuarios/login', {
        usuario,
        contrasena,
      });

      if (response.status === 200) {
        console.log(response.data); // Mostrar respuesta en la consola

        const roles = response.data.roles;
        // Redireccionar a otra página
        localStorage.setItem('usuario', usuario);
        // Mostrar alerta utilizando react-toastify
        toast.success('Inicio de sesión exitoso', {
          autoClose: 1000,
          onClose: () => {
            // Redireccionar a otra página después de la duración especificada
            history.push('/home');
          },
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Error en el inicio de sesión', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div>
        <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <b>Inicio de Sesion</b>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Bienvenido al sistema</p>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu usuario" 
                        onChange={e => setUsuario(e.target.value)}
                        value={ usuario } />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control 
        type="password"
        placeholder="Ingresa tu contraseña"
        onChange={e => setContrasena(e.target.value)}
        value={ contrasena } />
      </Form.Group>


      <Button variant="primary" type="submit" onClick={handleLogin} >
        Iniciar Sesion
      </Button>
      <ToastContainer />
    </Form>
    </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;