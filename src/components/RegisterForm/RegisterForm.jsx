import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('Dane formularza:', {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" placeholder="Name" required />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" placeholder="email" required />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
