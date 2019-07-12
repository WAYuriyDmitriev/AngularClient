import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AgentComponent} from '../agent/agent.component';
import {BranchComponent} from '../branch/branch.component';
import {ContractComponent} from '../contract/contract.component';
import {TariffComponent} from '../tariff/tariff.component';
import {UserDatabaseComponent} from '../user-database/user-database.component';
import {HomeComponent} from '../../home/home.component';


const routes: Routes = [
  {path: 'agents', component: AgentComponent},
  {path: 'branchs', component: BranchComponent},
  {path: 'contracts', component: ContractComponent},
  {path: 'tariffs', component: TariffComponent},
  {path: 'users', component: UserDatabaseComponent },
  {path: 'login', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {
}
