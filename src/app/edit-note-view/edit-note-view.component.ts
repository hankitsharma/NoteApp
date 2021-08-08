import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NotesService } from '../services/notes.service';
import { RouterService } from '../services/router.service';
import { Note } from '../note';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent implements OnInit {
  note: Note;
  states: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;

  constructor(private matDialogRef: MatDialogRef<EditNoteViewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private noteService: NotesService, private routerService: RouterService) {
  }

  ngOnInit() {
    this.note = this.noteService.getNoteById(this.data.note);
  }

  onSave() {
    this.noteService.editNote(this.note).subscribe(editNote => {
        this.matDialogRef.close();
        this.routerService.routeBack();
    }, error => {
        this.errMessage = 'Http failure response for http://localhost:3000/api/v1/notes: 404 Not Found';
    });
  }
}
