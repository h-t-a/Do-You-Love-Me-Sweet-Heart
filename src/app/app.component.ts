import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Do-You-Love-Me-Sweet-Heart';
  // loveMessage = '';

  // showLove() {
  //   this.loveMessage = 'I knew it! Love you too! 💖🥰';
  // }

  // moveButton(button: HTMLButtonElement) {
  //   const maxX = window.innerWidth - button.offsetWidth;
  // const maxY = window.innerHeight - button.offsetHeight;

  // const x = Math.random() * maxX;
  // const y = Math.random() * maxY;

  // button.style.position = 'absolute';
  // button.style.left = `${x}px`;
  // button.style.top = `${y}px`;
  // }
  loveMessage: string = "";
  showLoveMessage: boolean = false;
  showPoem: boolean = false;
  showNoButton: boolean = true;
  displayedLines: string[] = [];
  noButtonClickCount = 0; // Track how many times "No" button is clicked

  poemLines: string[] = [
    "i'll be everything you need me to be.",
    "i'll be your shoulder to cry on.",
    "i'll be the perfect listener.",
    "i'll be the person that you can trust with everything on your plate.",
    "i'll be the everlasting hug you need.",
    "i'll keep you safe in my arms when the world gets tough.",
    "i'll be with you by your side so you never have to be alone.",
    "i'll be your lover and your best friend.",
    "i'll be your saviour and your hero.",
    "i'll be the walls you need to keep the building stable.",
    "i'll be everything you need me to be."
  ];

  constructor(private renderer: Renderer2) {}

  showLove() {
    this.loveMessage = "I Knew I😍t, I Love You too ချစ်တုံးချေ😙💞";
    this.showLoveMessage = true;
    this.showNoButton = false;

    setTimeout(() => {
      this.showPoem = true;
      this.displayPoemLines();
    }, 1000);
  }

  displayPoemLines() {
    this.poemLines.forEach((line, index) => {
      setTimeout(() => {
        this.displayedLines.push(line);
      }, index * 2000);
    });
  }

  moveNoButton(event: Event) {
    const noButton = event.target as HTMLElement;
    if (this.noButtonClickCount === 0) {
      this.randomMove(noButton);
    }
  }

  clickNoButton(event: Event) {
    const noButton = event.target as HTMLElement;

    if (this.noButtonClickCount === 0) {
      this.renderer.addClass(noButton, 'cracked'); // First click → Crack
      this.noButtonClickCount++;
    } else if (this.noButtonClickCount === 1) {
      this.renderer.addClass(noButton, 'shattered'); // Second click → Shatter
      setTimeout(() => {
        this.showNoButton = false; // Remove button after shattering
      }, 500);
    }
  }

  randomMove(button: HTMLElement) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const newX = Math.random() * (screenWidth - 100);
    const newY = Math.random() * (screenHeight - 200);

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }

}
