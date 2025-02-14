import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Do-You-Love-Me-Sweet-Heart';
  loveMessage = '';

  showLove() {
    this.loveMessage = 'I knew it! Love you too! 💖🥰';
  }

  moveButton(button: HTMLButtonElement) {
    const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  button.style.position = 'absolute'; // Ensure it moves freely
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
  }
}
