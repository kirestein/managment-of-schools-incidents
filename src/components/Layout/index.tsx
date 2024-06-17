import React, { ReactElement } from 'react';
import { Grid } from './style';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

interface ILayoutProps {
  children: ReactElement
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>
        { children }
      </Content>
        
    </Grid>
  )
}

export default Layout;