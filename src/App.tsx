import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import React, { useState } from 'react';
import { Form2, Form1, Form3 } from './Components/form/form';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);


const steplabel = () => {
  return ['Account Information', 'Educational Information', 'Personal Details']

}

function App() {
  return (
 <>
 <div>
   HELLO WORLD
 </div>

 </>

  );
}

export default App;
