import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lieu } from '../../services/lieu.service';

@Component({
  selector: 'app-lieu-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lieu-card.component.html',
  styleUrls: ['./lieu-card.component.scss']
})
export class LieuCardComponent {
  @Input() lieu!: Lieu;
}
