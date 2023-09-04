import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('typingAnimation', [
      state('start', style({ width: '0' })),
      state('end', style({ width: '70%' })),
      transition('start => end', animate('3s')),
    ]),
  ],
})
export class HomeComponent {
  typingState = 'start';

  ngOnInit() {
    setTimeout(() => {
      this.typingState = 'end';
    }, 100);
  }
}
