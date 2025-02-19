import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import React, { useState } from 'react';
import { Form2, Form1, Form3 } from './Components/form/form';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import './Components/style/style.css';


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

  const [state, setState] = React.useState({
    checkedG: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const [currentStep, setCurrentStep] = useState(0)
  // function to get the content of all forms
  const getcontentofstep = (stepIndex: number, gettonextstep: () => void) => {
    switch (stepIndex) {
      case 0:
        return <Form1 handlenext={gettonextstep} />
      case 1:
        return <Form2 handlenext={gettonextstep} />
      case 2:
        return <Form3 handlenext={gettonextstep} />
      default:
        return "Unknown step index";
    }
  }
  // function to go on next step

  const gettonextstep = () => {
    setCurrentStep((step: number) => step + 1)
    console.log("clicking next");

  }


  const resetsteps = () => {
    setCurrentStep(0);
  }
  return (
 <>
 <div className="main-container">
      <h1 className="main-heading">SIGNUP MULTI STEP FORM </h1>
      <Stepper activeStep={currentStep}  alternativeLabel >
        {steplabel().map((value) => (
          // return (
          <Step key={value}>
            <StepLabel>{value}</StepLabel>
          </Step>
          // )
        ))}
      </Stepper>
      { currentStep === 2 ?
            <><div>
          {getcontentofstep(currentStep, gettonextstep)}
        </div>
       <div className='button-container'>
       <FormControlLabel
            control={<GreenCheckbox checked = {state.checkedG} onChange={handleChange} name="checkedG" />}
            label="I hereby confirm that the given information is correct" />
            <br/>
        <Button variant="contained" type="submit" onClick = {resetsteps} color="primary" disabled={state.checkedG === false}>
                        Finish and Reset
          </Button>
          </div>
          </> 
      :   
          <div>
      {getcontentofstep(currentStep, gettonextstep)}
    </div>
    }
    </div>

 </>

  );
}

export default App;
