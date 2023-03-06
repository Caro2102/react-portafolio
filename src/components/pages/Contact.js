import React, { useState } from 'react';

// Aquí importamos una función de ayudante que verificará si el correo electrónico es válido
import {validateEmail } from '../../utils/helpers';

function Form() {
  // Crear variables de estado para los campos del formulario
  // También estamos configurando sus valores iniciales en una cadena vacía
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Obtener el valor y el nombre de la entrada que desencadenó el cambio
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Según el tipo de entrada, establecemos el estado del correo electrónico, el nombre de usuario y la contraseña
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const validateForm = (e) => {
    // Obtener el valor y el nombre de la entrada que desencadenó el cambio
    const { target } = e;
    const inputType = target.name;

    if (inputType === 'email') {
      if(email === ''){
        setErrorMessage('Favor de ingresar un email');
        return;
      }else if(!validateEmail(email)){
        setErrorMessage('Favor de ingresar un email valido');
        return;
      }else{
        setErrorMessage('');
      }
    }else if(inputType === 'name'){
      if(name === ''){
        setErrorMessage('Favor de ingresar un nombre');
        return;
      }else{
        setErrorMessage('');
      }
    }else if(inputType === 'message'){
      if(message === ''){
        setErrorMessage('Es necesario mandar un mensaje');
        return;
      }else{
        setErrorMessage('');
      }
  };
}

  const handleFormSubmit = (e) => {
    // Evitar el comportamiento predeterminado del envío del formulario (que es para actualizar la página)
    e.preventDefault();
    setEmail('');
    setName('');
    setMessage('');
  };

  const styles ={
    about:{
        background:"rgb(35,43,252) radial-gradient(circle, rgba(35,43,252,1) 0%, rgba(29,203,183,1) 100%)",
            borderRadius: "80px"
    },
  }
  return (
    <div>
      <div className="container-fluid my-5 " >
        <div className="row justify-content-start mx-5">
          <div className="col-lg-6 col-md-9 ">
            <div style={styles.about}>
                <h3 className="px-5 mt-3">Contact</h3>
            </div>
            <form>
            <div className="mb-3 mt-5">
                <label  className="form-label text-white">Name</label>
                <input 
                  value={name}
                  name="name"
                  type="name" 
                  className="form-control" 
                  id="exampleInputPassword1"
                  onChange={handleInputChange}
                  onMouseOut={validateForm}/>
              </div>
              <div className="mb-3">
                <label  className="form-label text-white">Email</label>
                <input 
                  value={email}
                  name="email"
                  type="email" 
                  className="form-control" 
                  id="exampleInputPassword1"
                  onChange={handleInputChange}
                  onMouseOut={validateForm}/>
              </div>
              <div className="mb-3">
                <label  className="form-label text-white">Message</label>
                <textarea 
                  value={message}
                  name="message"
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  onChange={handleInputChange} 
                  onMouseOut={validateForm}>
                </textarea>
              </div>
              {errorMessage && (
                <div id="emailHelp" className="form-text text-white my-3">{errorMessage}</div>
              )}
              <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </form>              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
