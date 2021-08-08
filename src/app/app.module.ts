import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesService } from './services/notes.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteComponent } from './note/note.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { ListViewComponent } from './list-view/list-view.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo : 'dashboard', pathMatch : 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateRouteGuard],
    children : [
      {path : '', redirectTo : 'view/noteview', pathMatch : 'full'},
      {path : 'view/noteview', component : NoteViewComponent},
      {path : 'view/listview', component : ListViewComponent},
      {path : 'view/editview', component : EditNoteOpenerComponent},
      {path : 'note/:noteId/edit', component: EditNoteOpenerComponent , outlet: 'noteEditOutlet'}
    ]
  }
];

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NoteComponent,
    DashboardComponent,
    NoteTakerComponent,
    NoteViewComponent,
    ListViewComponent,
    EditNoteOpenerComponent,
    EditNoteViewComponent],
  imports: [ 
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule],
  providers: [ 
    NotesService, 
    CanActivateRouteGuard, 
    AuthenticationService, 
    RouterService],
  bootstrap: [ AppComponent ],
  entryComponents: [ [EditNoteViewComponent]]
})

export class AppModule { }
