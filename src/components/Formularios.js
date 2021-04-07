import React, {Fragment, useState} from 'react';

const Formularios = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    });
  }

  const enviarDatos = (e) => {
    e.preventDefault();
    // console.log(`${datos.nombre} ${datos.apellido}`)
    e.target.reset();
  }

  return (
    <Fragment>
      <h2>Form with React</h2>
      <form className="row" onSubmit={enviarDatos}>

        {/* Nombre */}
        <div className="col-md-3">
          <input 
            placeholder="Enter name"
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />
        </div>

        {/* Apellido */}
        <div className="col-md-3">
          <input 
            placeholder="Enter last name"
            className="form-control"
            type="text"
            name="apellido"
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-3">
          <button className="btn btn-primary mt-1" type="submit">Submit</button>
        </div>

      </form>

      <h3>{datos.nombre} {datos.apellido}</h3>

      <hr />
    </Fragment>
  )
}

export default Formularios;
