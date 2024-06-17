import styled from "styled-components";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from "@mui/material";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
`



/* Because of the structure of the DesktopDatePicker and the way the popper renders, the
`layout` slot will need to be replaced with a wtyled component */

/* You can style the `TextField` component directly */

export const StyledTextField = styled(TextField)({
    color: '#bbdefb',
    borderRadius: '7px',
    borderWidth: '0px',
    borderColor: '#2196f3',
    border: '0px solid',
    backgroundColor: '#0d47a1',
  })
  