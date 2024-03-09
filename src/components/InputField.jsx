import { FormHelperText, InputAdornment, TextField } from '@mui/material';
import React from 'react';

function InputField({ label, value, onChange, placeholder, type, icon, name, id, blur, error, click }) {
  const isImageType = type === 'file' && value && value.type.startsWith('image/');

  const handleFileChange = (event) => {
    // Additional file handling logic if needed
    onChange(event);
  };

  return (
    <div style={{}}>
      <TextField
        label={label}
        variant="outlined"
        name={name}
        id={id}
        value={value}
        onChange={handleFileChange}
        placeholder={placeholder}
        type={type}
        fullWidth
        onClick={click}
        onBlur={blur}
        margin="normal"
        InputProps={{
          startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
        }}
        inputProps={{
          accept: 'image/*', // This helps some browsers enforce file type restrictions
        }}
      />
     {( error) && <FormHelperText error style={{fontWeight:'bold'}}>{error}</FormHelperText>}

    </div>
  );
}

export default InputField;
