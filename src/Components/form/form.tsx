import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import {  makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import "../style/style.css"
import clsx from 'clsx';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
interface props {
    handlenext : () => void
}


const useStyles = makeStyles({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
      alignContent : "center",
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
  });
  function StyledRadio(props: RadioProps) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  export const Form1: React.FC<props> = ({ handlenext }) => {
    const classes = useStyles();
    // const classes1 = useStyles1();
    return (
      <div  className="div"  >
        <Formik
        initialValues= {{firstname: '', secondname: '', email: '' ,cnic: ''}}
        validationSchema={yup.object({
            firstname: yup.string().max(15 ,"Name Should be greater than 15 characters").required("Required"),
            secondname: yup.string().max(15 ,"Last Name Should be greater than 15 characters").required("Required"),
            email: yup.string().email().required("Email is Mandatory"),

            cnic: yup.number()
            .min(13, 'Must Be More Than 12 Characters')
            .required("Please Enter Cnic Number")
        })}
         onSubmit={(value) => {
            //  this is for debug
            //  console.log('This Is Value' , value)
             handlenext();
         }}
        >
          <Form className={classes.root} autoComplete="off">
            <Field className = "form" placeHolder = "First Name" name='firstname' type='text' />
            <br />
            <span className="Error">
              <ErrorMessage name="firstname" />
            </span>
            <br />
            <Field className = "form" name='secondname' placeHolder = "Second Name" type='text' />
            <br />
            <span className="Error">
              <ErrorMessage name="secondname" />
            </span>
            <br />
            <Field className = "form" name='email' type='text' placeHolder = "Email Adress" />
            <br />
            <span className="Error">
              <ErrorMessage name="email" />
            </span>
            <br />
            <Field className = "form" name='cnic' type='number' placeHolder = "Indentity Number" />
            <br />
            <span className="Error">
              <ErrorMessage name="cnic" />
            </span>
            <br />
            <PhoneInput
              country={'pk'}
              inputProps={{
                // country:{'us'},
                name: 'phone',
                required: true,
                autoFocus: true,
              }}
            />
            <div className = "buttonform">
            <Button variant="contained" type="submit" color="primary" disableElevation>
              Next Section
             </Button>
             </div>
          </Form>
          {/* {/* </div> */}
        </Formik>
      </div>
    )
  }