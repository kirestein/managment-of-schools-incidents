import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Ocorrencias from "../pages/Ocorrencias";
import AlunosAdvertidos from "../pages/AlunosAdvertidos";


// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/ocorrencias"  Component={ Ocorrencias }/>
        <Route path="/alunos-advertidos" Component={ AlunosAdvertidos } />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
