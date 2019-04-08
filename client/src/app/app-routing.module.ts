import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { SongsListComponent } from './components/songs-list/songs-list.component';

const routes: Routes = [
  { path: '',redirectTo: 'songsList',pathMatch: 'full'},
  { path: 'songsList', component: SongsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
