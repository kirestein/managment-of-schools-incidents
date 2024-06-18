import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { 
  Container,
  StyledTextField
} from './styles';

interface ISelectDateProps {
  
  setDate: (name: string) => void;
}



const SelectDate: React.FC<ISelectDateProps> = ({
  
  setDate
}) => {
  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          
          <DesktopDatePicker 
            slots={{
              textField: StyledTextField,
            }} format='DD/MM/YYYY'
            onChange={
              (val) => {
                setDate("endDate");
                setDate(val?.format('DD/MM/YYYY') || '');
                // console.log(`data: ${val?.date()}/${val?.month()}/${val?.year()}`);
              }
            }
          />

          
        </DemoContainer>
      </LocalizationProvider>
    </Container>
  );
}

export default SelectDate;