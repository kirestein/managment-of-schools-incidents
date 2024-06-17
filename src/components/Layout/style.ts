import styled from "styled-components";
/**
* Layout
* MH = Main Header
* AS = Aside
* CT = Content
*/

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 15rem auto;
    grid-template-rows: 4.375rem auto;

    grid-template-areas:
        'AS MH'
        'AS CT';
    height: 100vh;
`