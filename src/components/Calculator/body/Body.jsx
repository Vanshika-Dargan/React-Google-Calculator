import { NumButton } from './NumButton';
import { Equal } from './Equal';
import { Operation } from './Operation';
import { useState } from 'react';
import { Grid } from '@mui/material';
import "./Body.css";

export const Body = ({ clickedValue, setClickedValue, ans, setAns, setExpr, expr, setDisplay }) => {
  const buttonValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '(', ')'];
  const buttonOpr = ['='];
  const [type, setType] = useState('+');
  const [isXSet, setIsXSet] = useState(false);

  const buttonsPerRow = 4;

  
  const buttonRows = [];
  for (let i = 0; i < buttonValues.length; i += buttonsPerRow) {
    const buttonRow = buttonValues.slice(i, i + buttonsPerRow);
    buttonRows.push(buttonRow);
  }

  return (
     <div id="body">
      <Grid container spacing={1} >
        {buttonRows.map((buttonRow, rowIndex) => (
          <Grid container spacing={2} key={rowIndex}>
            {buttonRow.map((text) => (
              <Grid item xs={3} key={text} style={{width:30}}>
                <NumButton
                  text={text}
                  clickedValue={clickedValue}
                  setClickedValue={setClickedValue}
                  setExpr={setExpr}
                  expr={expr}
                />
              </Grid>
            ))}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Equal
            type={type}
            setClickedValue={setClickedValue}
            clickedValue={clickedValue}
            setExpr={setExpr}
            expr={expr}
            setDisplay={setDisplay}
          />
        </Grid>
      </Grid>
      </div>
  );
};
