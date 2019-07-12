import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavMenuComponent} from './nav-menu/nav-menu.component';

import {RouterModule} from '@angular/router';
import { ContractComponent } from './table-components/contract/contract.component';
import { TariffComponent } from './table-components/tariff/tariff.component';
import { BranchComponent } from './table-components/branch/branch.component';
import { AgentComponent } from './table-components/agent/agent.component';
import {TableModule} from './table-components/table/table.module';
import { UserDatabaseComponent } from './table-components/user-database/user-database.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalUserComponent } from './table-components/user-database/modal-user/modal-user.component';
import {EntittyRequest} from './table-components/EntittyRequest';
import { ModalTariffComponent } from './table-components/tariff/modal-tariff/modal-tariff.component';
import { ModalAgentComponent } from './table-components/agent/modal-agent/modal-agent.component';
import { ModalBranchComponent } from './table-components/branch/modal-branch/modal-branch.component';
import { ModalContractComponent } from './table-components/contract/modal-contract/modal-contract.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    NavMenuComponent,
    AppComponent,
    ContractComponent,
    TariffComponent,
    BranchComponent,
    AgentComponent,
    UserDatabaseComponent,
    ModalUserComponent,
    ModalTariffComponent,
    ModalAgentComponent,
    ModalBranchComponent,
    ModalContractComponent,
    HomeComponent
  ],


  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],

  entryComponents: [
    UserDatabaseComponent,
    ModalUserComponent,
    ModalTariffComponent,
    ModalAgentComponent,
    ModalBranchComponent,
    ModalContractComponent
  ],

  providers: [EntittyRequest],
  bootstrap: [AppComponent, NavMenuComponent, UserDatabaseComponent]

})
export class AppModule {
}
