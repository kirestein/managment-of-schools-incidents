import React from 'react';
import {
    Container,
    ToggleLabel,
    MaterialUISwitch
} from './styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Toggle: React.FC = (() => {
    return(
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <FormGroup>
                <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label="Dark"
                />
            </FormGroup>
        </Container>
)})

export default Toggle;
