import { useForm } from "react-hook-form";

function Form({formSub}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSub = (data) => {
    formSub(data);
    data.id = Date.now();
    data.fav = false;
    reset();
    // console.log(data);
  };
  return (
    <div className="col-sm-4 shadow rounded g-5 mt-3 h-25">
      <h3 className="text-center pt-3 text-secondary h2">ADD CONTACT</h3>
      <form onSubmit={handleSubmit(onSub)} className="p-1">
        <div className="form-group">
          <label className="col-form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^-]+@[A-Za-z0-9.-]+$/i,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3"
          value="Add contact"
        />
      </form>
    </div>
  );
}

export default Form;
