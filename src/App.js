import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MenuMatlab from './components/MenuMatlab';
import Index from './components/Index';
import About from './components/About';
import Cuaderno from './components/Cuaderno';
import Navegacion from './components/Navegacion';
import Regresionlineal from './componentspdfmatlab/Regresionlineal';
import Curri from './components/Curri';
import Datos from './componentspdfmatlab/Datos';
import Gaussjordan from './componentspdfmatlab/Gaussjordan';
import GraficaDeVectores from './componentspdfmatlab/GraficaDeVectores';
import GraficasDeValorNumerico from './componentspdfmatlab/GraficasDeValorNumerico';
import GraficaVariableSimbolica from './componentspdfmatlab/GraficaVariableSimbolica';
import MatrizHessiana from './componentspdfmatlab/MatrizHessiana';
import MetodoBiseccion from './componentspdfmatlab/MetodoBiseccion';
import NewtonRhapson from './componentspdfmatlab/NewtonRhapson';
import PolinomioDeTaylor from './componentspdfmatlab/PolinomioDeTaylor';
import PuntosCriticos2Variables from './componentspdfmatlab/PuntosCriticos2Variables';
import Raices from './componentspdfmatlab/Raices';
import RegresionMultiple from './componentspdfmatlab/RegresionMultiple';
import ImagenesTransparentes from './componentspdfmatlab/ImagenesTransparentes';
import GaleriaDeImagenes from './componentspdfmatlab/GaleriaDeImagenes'
import ReproductorDeMusicaApp from './componentspdfmatlab/ReproductorDeMusicaApp'
import ReproductorDeMusica from './componentspdfmatlab/ReproductorDeMusica'

function App() {


  return (
    <Router>
      <Navegacion />

      <div>

        <Switch>

          <Route path="/" exact>
            <Index />
          </Route>

          <Route path="/RandomCodeWeb" exact>
            <Index />
          </Route>

          <Route path="/Menumatlab" exact>
            <MenuMatlab />
          </Route>

          <Route path="/Cuaderno" exact>
            <Cuaderno />
          </Route>

          <Route path="/About" exact>
            <About />
          </Route>

          <Route path="/Curriculum" exact>
            <Curri />
          </Route>

          <Route path="/Menumatlab/Regresionlineal">
            <Regresionlineal />
          </Route>

          <Route path="/Menumatlab/Datos">
            <Datos />
          </Route>

          <Route path="/Menumatlab/Gaussjordan">
            <Gaussjordan />
          </Route>

          <Route path="/Menumatlab/GraficaDeVectores">
            <GraficaDeVectores />
          </Route>

          <Route path="/Menumatlab/GraficasDeValorNumerico">
            <GraficasDeValorNumerico />
          </Route>

          <Route path="/Menumatlab/GraficaVariableSimbolica">
            <GraficaVariableSimbolica />
          </Route>

          <Route path="/Menumatlab/MatrizHessiana">
            <MatrizHessiana />
          </Route>

          <Route path="/Menumatlab/MetodoBiseccion">
            <MetodoBiseccion />
          </Route>

          <Route path="/Menumatlab/NewtonRhapson">
            <NewtonRhapson />
          </Route>

          <Route path="/Menumatlab/PolinomioDeTaylor">
            <PolinomioDeTaylor />
          </Route>

          <Route path="/Menumatlab/PuntosCriticos2Variables">
            <PuntosCriticos2Variables />
          </Route>

          <Route path="/Menumatlab/PuntosCriticos2Variables">
            <PuntosCriticos2Variables />
          </Route>

          <Route path="/Menumatlab/Raices">
            <Raices />
          </Route>

          <Route path="/Menumatlab/RegresionMultiple">
            <RegresionMultiple />
          </Route>

          <Route path="/Menumatlab/ImagenesTransparentes">
            <ImagenesTransparentes />
          </Route>

          <Route path="/Menumatlab/GaleriaDeImagenes">
            <GaleriaDeImagenes />
          </Route>
          
          <Route path="/Menumatlab/ReproductorDeMusicaApp">
            <ReproductorDeMusicaApp />
          </Route>

          <Route path="/Menumatlab/ReproductorDeMusica">
            <ReproductorDeMusica />
          </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default App;
