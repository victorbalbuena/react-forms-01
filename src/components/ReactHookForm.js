import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {

  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }
    console.log(watch("example")); 

  return (
    <Fragment>

      <h2>An application for keeping track of your books.</h2>
      
      <form className="row" onSubmit={handleSubmit(onSubmit)}>

        <div className="col-md-6">
          <input 
            name="title"
            type="text"
            placeholder="Harry Potter"
            className="form-control my-2"
            {...register("title", { required: true })}
          />
          {errors.title && <span className="text-danger text-small d-block mb-2">This field is required</span>}
        </div>

        <div className="col-md-6">
          <input 
            name="year"
            type="text"
            placeholder="1997"
            className="form-control my-2"
            {...register("year", { required: true })}
          />
          {errors.year && <span className="text-danger text-small d-block mb-2">This field is required</span>}
        </div>

        <div className="col-md-6">
          <input 
              name="author"
              type="text"
              placeholder="J. K. Rowling"
              className="form-control my-2"
              {...register("author", { required: true })}
          />
          {errors.author && <span className="text-danger text-small d-block mb-2">This field is required</span>}
        </div>

        <div className="col-md-6">
          <select {...register("genre", { required: true })} className="form-control my-2">
            <option value="" selected disabled hidden>Please select an option</option>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="thriller">Thriller</option>
            <option value="romace">Romace</option>
            <option value="contemporary">Contemporary</option>
            <option value="other">Other</option>
          </select>

          {errors.genre && <span className="text-danger text-small d-block mb-2">This field is required</span>}
        </div>

        <div className="col-md-6">
          <button className="btn btn-primary ml-1" type="submit">Submit</button>
        </div>
      
      </form>

    </Fragment>
  )
}

export default ReactHookForm;
