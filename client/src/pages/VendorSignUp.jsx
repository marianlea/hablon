import { FormError } from "@ariakit/react";
import { signupVendor } from "../utils/hablon_api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

// importing default
import {
  Form,
  FormField,
  FormInput,
  FormSelect,
  FormSubmit,
} from "../components/VendorSignUpForm";

// importing named export
import { useFormStore } from "../components/VendorSignUpForm";
import { SelectItem } from "../components/Select";

export const VendorSignUp = () => {
  const navigate = useNavigate();
  const form = useFormStore({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      type: "",
      img: "",
      description: "",
      phoneNumber: "",
      messenger: "",
      facebook: "",
      instagram: "",
    },
  });
  const $ = form.names;

  form.useSubmit(async () => {
    const password = form.getValue($.password);
    const confirm = form.getValue($.confirmPassword);

    if (password !== confirm) {
      form.setError($.confirmPassword, "Passwords do not match!");
      return false; // prevent submission
    }

    if (!form.getValue($.email)) {
      form.setError($.email, "Email is required!");
      return false;
    }

    try {
      const values = form.getState().values;
      const vendor = await signupVendor(values);

      toast.success("Sign up successful!");
      navigate(`/vendors/${vendor._id}/products`);
      return true;
    } catch (err) {
      if (err.error === "Email or username already taken") {
        form.setError($.email, "Email or username already taken");
        form.setError($.username, "Email or username already taken");
      }

      toast.error(err.error || "Sign up failed.");
      console.error(err);
      return false;
    }
  }, false);

  return (
    <Form store={form}>
      <FormField name={$.firstName} label="First Name">
        <FormInput name={$.firstName} required placeholder="Maria" />
        <FormError name={$.firstName} />
      </FormField>
      <FormField name={$.lastName} label="Last Name">
        <FormInput name={$.lastName} required placeholder="Cruz" />
        <FormError name={$.lastName} />
      </FormField>
      <FormField name={$.nickname} label="Nickname">
        <FormInput name={$.nickname} required placeholder="Maring" />
        <FormError name={$.nickname} />
      </FormField>
      <FormField name={$.username} label="Username">
        <FormInput
          name={$.username}
          required
          minLength={8}
          placeholder="maring_cruz123"
        />
        <FormError name={$.username} />
      </FormField>
      <FormField name={$.email} label="Email">
        <FormInput
          name={$.email}
          required
          placeholder="maria_cruz@email.com"
          type="email"
        />
        <FormError name={$.email} />
      </FormField>
      <FormField name={$.password} label="Password">
        <FormInput
          name={$.password}
          required
          type="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
        />
        <FormError name={$.password} />
        <p>
          Password must be at least 8 characters, include uppercase, lowercase,
          and a number.
        </p>
      </FormField>
      <FormField name={$.confirmPassword} label="Confirm Password">
        <FormInput name={$.confirmPassword} required type="password" />
        <FormError name={$.confirmPassword} />
      </FormField>
      <FormField name={$.address} label="Address">
        <FormInput
          name={$.address}
          required
          placeholder="Ilocos Region, Philippines"
        />
        <FormError name={$.username} />
      </FormField>
      <FormField name={$.type} label="Vendor Type">
        <FormSelect name={$.type} required>
          <SelectItem value="">Select an item</SelectItem>
          <SelectItem value="Farmer" />
          <SelectItem value="Weaver" />
          <SelectItem value="Artisan" />
          <SelectItem value="Artist" />
          <SelectItem value="Food Artisan" />
        </FormSelect>
        <FormError name={$.type} />
      </FormField>
      <FormField name={$.img} label="Profile Photo">
        <FormInput name={$.img} required />
        <FormError name={$.img} />
      </FormField>
      <FormField name={$.description} label="Description">
        <FormInput
          name={$.description}
          required
          placeholder="maria_cruz@email.com"
        />
        <FormError name={$.description} />
      </FormField>
      <h3>Contact Details</h3>
      <FormField label="Phone Number">
        <FormInput name={$.phoneNumber} required placeholder="09123456789" />
        <FormError name={$.phoneNumber} />
      </FormField>

      <FormField label="Messenger">
        <FormInput name={$.messenger} placeholder="m.me/maria_cruz" />
        <FormError name={$.messenger} />
      </FormField>
      <FormField label="Facebook">
        <FormInput name={$.facebook} placeholder="fb.com/maria_cruz" />
        <FormError name={$.facebook} />
      </FormField>

      <FormField label="Instagram">
        <FormInput
          name={$.instagram}
          placeholder="instagram.com/marias_tarts"
        />
        <FormError name={$.instagram} />
      </FormField>

      <div className="buttons">
        <FormSubmit>Sign Up</FormSubmit>
      </div>
    </Form>
  );
};

export default VendorSignUp;
