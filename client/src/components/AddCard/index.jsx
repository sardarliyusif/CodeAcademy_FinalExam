import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux'
import "./style.scss";
import axios from "axios";
import { addUser } from "../../redux/cards/cardsSlice";

export const AddCard = () => {
  const dispatch = useDispatch()
  return (
    <div className="container form-div">
      <Formik
        initialValues={{ title: "", description: "", imgUrl: "" }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(150, "Must be 150 characters or less")
            .required("Required"),
          imgUrl: Yup.string()
            .max(60, "Must be 60 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          axios.post('http://localhost:1313/cards',values)
          dispatch(addUser(values))
        }}
      >
        <Form>
          <div className="label-div">
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" />
          </div>
          <div className="label-div">
            <label htmlFor="description">Description</label>
            <Field name="description" type="text" />
            <ErrorMessage name="description" />
          </div>
          <div className="label-div">
            <label htmlFor="imgUrl">Img Url</label>
            <Field name="imgUrl" type="text" />
            <ErrorMessage name="imgUrl" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
