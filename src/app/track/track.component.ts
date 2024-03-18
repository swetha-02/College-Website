import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css',
})
export class TrackComponent {
  app_track_num_val: string = '';
  mob_num_val: string = '';
}
