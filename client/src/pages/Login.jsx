import * as Ariakit from "@ariakit/react";
import { useNavigate } from "react-router";
import { login } from "../utils/hablon_api";
import toast from "react-hot-toast";
import { useCurrentUser } from "../context/CurrentUserContext";

export const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useCurrentUser();
  const form = Ariakit.useFormStore({
    defaultValues: { username: "", password: "" },
  });

  form.useSubmit(async () => {
    const { username, password } = form.getState().values;

    if (!username) {
      form.setError(form.names.username, "Username is required!");
      return false;
    }

    if (!password) {
      form.setError(form.names.password, "Password is required!");
      return false;
    }

    try {
      const loginData = await login({ username, password });
      localStorage.setItem("token", loginData.token);
      setCurrentUser(loginData.currentUser._id);
      console.log("You are logged in");
      toast.success("Login successful!");
      navigate(`/`);
    } catch (err) {
      console.error("Login error:", err);
      if (err.error.includes("Username")) {
        form.setError(form.names.username, err.error);
      } else if (err.error.includes("Password")) {
        form.setError(form.names.password, err.error);
      }
      toast.error(err.error || "Login failed");
      return false;
    }
  });

  return (
    <Ariakit.Form store={form} aria-labelledby="login" className="wrapper">
      <h2 id="login" className="heading">
        Login
      </h2>
      <div className="field">
        <Ariakit.FormLabel name={form.names.username}>
          Username
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          name={form.names.username}
          placeholder="maria_cruz123"
          minLength={8}
          className="input"
          required
        />
        <Ariakit.FormError name={form.names.username} className="error" />
      </div>
      <div className="field">
        <Ariakit.FormLabel name={form.names.password}>
          Password
        </Ariakit.FormLabel>
        <Ariakit.FormInput
          type="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
          name={form.names.password}
          className="input"
          required
        />
        <Ariakit.FormError name={form.names.password} className="error" />
      </div>
      <div className="buttons">
        <Ariakit.FormSubmit className="button">Login</Ariakit.FormSubmit>
      </div>
    </Ariakit.Form>
  );
};

export default Login;
