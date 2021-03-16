import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Beneficiarios from '../pages/beneficiarios';
import Empresas from '../pages/empresas';
import AdicionarBeneficiarios from '../pages/adicionarBeneficiarios';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/empresas/:id/:nome/:cnpj/:qtdPlanos/:qtdBenef/:planoDentalEmpresa/:planoSaudeEmpresa/:planoSaudeMentalEmpresa" component={Empresas} />
            <Route path="/beneficiarios" component={Beneficiarios} />
            <Route path="/adicionar/:id/:nome/:cnpj/:qtdPlanos/:qtdBenef/:planoDentalEmpresa/:planoSaudeEmpresa/:planoSaudeMentalEmpresa" component={AdicionarBeneficiarios} />

        </Switch>
    </BrowserRouter>
);
export default Routes;
