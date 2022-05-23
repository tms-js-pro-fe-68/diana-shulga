/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Formik, Form, useField } from "formik";
import { object, string } from "yup";

function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label htmlFor={props.id || props.name} className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

function MySelect({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

function MyRadio({ label, ...props }) {
  const [field] = useField(props);
  return (
    <>
      <input type="radio" id="html" {...field} {...props} />
      <label htmlFor="html">{label ?? field.name}</label>
      <br />
    </>
  );
}

export default function Clothes() {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        email: "",
        acceptedTerms: false,
        price: "",
        type: "",
        reviews: [],
      }}
      validationSchema={object().shape({
        name: string().required(),
        type: string().required(),
      })}
      validateOnMount
      true
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 200);
      }}
    >
      <Form>
        <div className="form_div">
          <MyTextInput
            label="Product name:"
            name="name"
            type="text"
            placeholder="T-shirt, blouse, jeans"
            className="label_style"
          />

          <MyTextInput
            label="Product description:"
            name="description"
            type="text"
            className="label_style"
            placeholder="It is yellow, blue, green..."
          />

          <MyTextInput
            label="Contact: email"
            name="email"
            type="email"
            className="label_style"
            placeholder="joker_1357@mail.ru"
          />

          <MySelect
            className="label_style"
            label="Product price:  "
            name="price"
          >
            <option value="">-</option>
            <option value="100BYN">100BYN</option>
            <option value="200BYN">200BYN</option>
            <option value="300BYN">300BYN</option>
            <option value="400BYN">400BYN</option>
            <option value="500BYN">500BYN</option>
          </MySelect>

          <MySelect
            className="label_style"
            label="Categories:  "
            name="type"
          >
            <option value="">-</option>
            <option value="Bags, backpacks">Glasses</option>
            <option value="Dress, sundress$">Dress</option>
            <option value="Shirts">Shirts</option>
            <option value="Hoodie, sweaters">Sweaters</option>
            <option value="Trousers, jeans">Jeans</option>
            <option value="Shoes">Shoes</option>
          </MySelect>

          <button type="submit">Send</button>
        </div>
      </Form>
    </Formik>
  );
};
