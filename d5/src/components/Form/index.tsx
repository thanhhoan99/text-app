import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  const [values, setValues] = React.useState({
    firstname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phone: '',
    gender: '',
    date: '',
    country: '',
    hobby: [] as string[],
    image: null as File | null,
    about: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setValues(prev => ({
        ...prev,
        hobby: checked
          ? [...prev.hobby, value]
          : prev.hobby.filter(h => h !== value)
      }));
    } else if (type === 'file') {
      setValues(prev => ({
        ...prev,
        image: files && files[0] ? files[0] : null
      }));
    } else {
      setValues(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý dữ liệu ở đây
    alert('Form submitted! Xem console để biết chi tiết.');
    console.log('Form submitted:', values);
  };

  return (
    <div className={styles.form}>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            placeholder="Enter phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>Gender</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={values.gender === 'Male'}
              onChange={handleChange}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={values.gender === 'Female'}
              onChange={handleChange}
            />{' '}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={values.gender === 'Other'}
              onChange={handleChange}
            />{' '}
            Other
          </label>
        </div>

        <label>
          Date of Birth
          <input
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Country
          <select
            name="country"
            value={values.country}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="Vietnam">Vietnam</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>Hobbies</label>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              name="hobby"
              value="Music"
              checked={values.hobby.includes('Music')}
              onChange={handleChange}
            />{' '}
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="hobby"
              value="Sports"
              checked={values.hobby.includes('Sports')}
              onChange={handleChange}
            />{' '}
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="hobby"
              value="Reading"
              checked={values.hobby.includes('Reading')}
              onChange={handleChange}
            />{' '}
            Reading
          </label>
        </div>

        <label>
          Profile Picture
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <label>
          Bio / About You
          <textarea
            name="about"
            rows={4}
            value={values.about}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;