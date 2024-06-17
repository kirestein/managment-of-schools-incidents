import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { 
  Container,
  StyledTextField
} from './styles';





export default function SelectDate() {
  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          
          <DesktopDatePicker 
            slots={{
              textField: StyledTextField,
          }} format='DD/MM/YYYY'/>

          
        </DemoContainer>
      </LocalizationProvider>
    </Container>
  );
}