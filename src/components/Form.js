import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import React from 'react'



const Form = () => {

    const history = useHistory();
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
    
    const onSubmit = (data) => {
      history.push("/perfil")
      console.log(JSON.stringify(data));
    };
    
    return (
    <div>
      <section className="p-10 bg-gray-200">
        <h1 className="text-2xl text-center">¡Crea tu cuenta ahora!</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="grid grid-cols-3 py-4 space-x-3">
            <div className="flex flex-col">
            <label>DNI <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="dni" 
              placeholder="Escribe tu DNI"
              className="form-control" 
              {...register("dni", {
                required: true,
                maxLength: 8,
                minLength: 8,
                pattern: /([1-9])\w+/g
                
              })}
            />
            {errors?.dni?.type === "required" && <p className="text-red-500">Este campo es requerido</p>}
            {errors?.dni?.type === "maxLength" && (
              <p className="text-red-500">Tu dni debe tener 8 dígitos</p>
            )}
            {errors?.dni?.type === "minLength" && (
              <p className="text-red-500">Tu dni debe tener 8 dígitos</p>
            )}
            {errors?.dni?.type === "pattern" && (
              <p className="text-red-500">Su dni sólo debe contener números</p>
            )}
          </div>

            <div className="flex flex-col">
            <label>Celular <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="celular" 
              placeholder="Escribe tu celular" 
              className="form-control" 
              {...register("celular", {
                required: true,
                maxLength: 9,
                minLength: 9,
                pattern: /([1-9])\w+/g
                
              })}
            />
            {errors?.celular?.type === "required" && <p className="text-red-500">Este campo es requerido</p>}
            {errors?.celular?.type === "maxLength" && (
              <p className="text-red-500">Tu celular debe contener 9 dígitos</p>
            )}
            {errors?.celular?.type === "minLength" && (
              <p className="text-red-500">Tu celular debe contener 9 dígitos</p>
            )}
            {errors?.celular?.type === "pattern" && (
              <p className="text-red-500">Su celular sólo debe contener números</p>
            )}
          </div>

            <div className="flex flex-col">
              <label>Correo electrónico <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="correo" 
                placeholder="Escribe tu correo electrónico" 
                className="form-control" 
                {...register("correo", {
                  required: true,
                  pattern: /\S+@\S+.\S+/
                   
                  
                })}
              />
              {errors?.correo?.type === "required" && <p className="text-red-500">Este campo es requerido</p>}
              {errors?.correo?.type === "maxLength" && (
                <p>DNI no debe exceder 8 caracteres</p>
              )}
              {errors?.correo?.type === "pattern" && (
              <p className="text-red-500">Correo incorrecto</p>
            )}
            </div>
          </div>
          <p className="py-4">Campos necesarios<span className="text-red-500">*</span></p>
          <div className="">
            <div>
              <label>
                <input 
                  type="checkbox" 
                  name="terminos" 
                  id="terminos"
                  {...register("terminos", {
                    required: true
                  })}
                />
                He leído y acepto 1...
                {errors?.terminos?.type === "required" && <p className="text-red-500">Este campo es requerido</p>}
              </label>
            </div>
            <div>
              <label>
                <input 
                type="checkbox" 
                name="terminos" 
                id="terminos"
                {...register("terminos", {
                  required: true
                })}
                />
                He leído y acepto 2...
                {errors?.terminos?.type === "required" && <p className="text-red-500">Este campo es requerido</p>}  
              </label>
            </div>
           
          </div>
          <div className="flex items-center justify-center">
                <button className="w-32 h-10 text-white bg-blue-700 rounded-lg " type="submit">SIGAMOS</button>
          </div>
          
        </form>

        <ul className="p-5">
            <li>{(watch("dni"))}</li>
            <li>{(watch("celular"))}</li>
            <li>{(watch("correo"))}</li>
        </ul>
       
      </section>
    </div>
    )
}

export default Form
