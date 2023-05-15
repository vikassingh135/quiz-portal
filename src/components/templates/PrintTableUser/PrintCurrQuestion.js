import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const PrintCurrQuestion = (props) => {
  

  const [value, setValue] = useState('');

  // console.log(currQuestion);
  
  const {content,optionA,optionB,optionC,optionD,correctAnswer} = props.currQuestion;

  const handleChange = (event) => {
    console.log(props.i, event.target.value);
    props.handleSelectedValue({i : props.i, ans : event.target.value});
    setValue(event.target.value);
  };

 
return (
  <FormControl sx={{display:"flex", pl:30}}>
  <FormLabel id="demo-controlled-radio-buttons-group" sx={{fontSize:20, color:"black", fontWeight:"500"}}>{props.i
  +1}. {content}</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
    sx={{mb:3}}
  >
    <FormControlLabel value="A" control={<Radio />} label={optionA} />
    <FormControlLabel value="B" control={<Radio />} label={optionB} />
    <FormControlLabel value="C" control={<Radio />} label={optionC} />
    <FormControlLabel value="D" control={<Radio />} label={optionD} />
  </RadioGroup>
</FormControl>
)
}

export default PrintCurrQuestion
