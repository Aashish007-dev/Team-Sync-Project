import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginEmployee } from "../state/auth/authAction";


export const useAuth = () => {
    const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onRegisterSubmit = (data) => {
    console.log(data);
  };

  const onLoginSubmit = (data) => {
    dispatch(loginEmployee(data))
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    isSubmitting
  }
};
