import * as React from 'react';
import Button from '@mui/material/Button';

export default function ColorButtons({btn_name,color,submit,type,click}) {
  return (
    <>
      <Button variant="contained" onClick={click} type={type} color={color} onSubmit={submit}>
        {btn_name}
      </Button>
    </>
  );
}