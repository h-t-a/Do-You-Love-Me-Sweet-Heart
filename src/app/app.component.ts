import { Component } from '@angular/core';
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
  displayedLines: string[] = [];
  showNoButton: boolean = true;

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
      }, index * 2000); // Show each line every 2 seconds
    });
  }
}
