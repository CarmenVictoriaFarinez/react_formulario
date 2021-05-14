import React, { useState } from 'react'

const App = () => {
  const [datos, setDatos] = useState({
    dni: '',
    celular: '',
    correo: ''
  })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

const enviarDatos = (event) => {
  event.preventDefault()
  console.log('enviando datos...' + datos.dni + ' ' + datos.celular+ ' ' + datos.correo  )
}
  return (
    <div>
      <section className="p-6 bg-gray-200">
        <form onSubmit={enviarDatos} >
          <div className="grid grid-cols-3 space-x-3">
            <div className="flex flex-col">
            <label>DNI <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="dni" 
              placeholder="Escribe tu DNI"
              className="form-control" 
              onChange={handleInputChange}
            />
          </div>

            <div className="flex flex-col">
            <label>Celular <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="celular" 
              placeholder="Escribe tu celular" 
              className="form-control" 
              onChange={handleInputChange}
            />
          </div>

            <div className="flex flex-col">
              <label>Correo electrónico <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="correo" 
                placeholder="Escribe tu correo electrónico" 
                className="form-control" 
                onChange={handleInputChange}
              />
            </div>
          </div>
          <b>Campos necesarios</b>
          <div>
            <label>
              <input type="checkbox" name="terminos" id="terminos"/>
              He leído y acepto 1...
            </label>
            <label>
              <input type="checkbox" name="terminos" id="terminos"/>
              He leído y acepto 2...  
            </label>
          </div>
          <button className="text-white bg-gray-600" type="submit">SIGAMOS</button>
        </form>

        <ul>
          <li>{datos.dni}</li>
          <li>{datos.celular}</li>
          <li>{datos.correo}</li>
        </ul>
      </section>
    </div>
  )
}

export default App

