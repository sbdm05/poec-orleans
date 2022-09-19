import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';

const routes: Routes = [
  // créer 3 routes
  // afficher PageListClients
  // on est déjà sur la route /clients
  { path: '', component: PageListClientsComponent },

  // afficher PageAddClient /clients/add
  { path: 'add', component: PageAddClientComponent },

  // afficher PageEditClient
  { path: 'edit', component: PageEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
