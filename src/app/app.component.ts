import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loveMessage: string = "";
  showLoveMessage: boolean = false;
  showPoem: boolean = false;
  showNoButton: boolean = true;
  showYesButton: boolean = true;
  showMemories: boolean = false;
  displayedLines: string[] = [];
  noButtonClickCount = 0;
  showInitialGif: boolean = true;
  showLoveGif: boolean = false;
  currentMemoryIndex: number = 0;
  currentMemoryImage: string = "";

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

  memoryImages = Array.from({ length: 15 }, (_, i) => `assets/${(i + 1).toString().padStart(2, '0')}.jpg`);

  @ViewChild('container') containerRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  showLove() {
    this.loveMessage = "I Knew I😍, \n I Love You too ချစ်တုံးချေ😙💞";
    this.showLoveMessage = true;
    this.showNoButton = false;
    this.showYesButton = false;
    this.showInitialGif = false;
    this.showLoveGif = true;

    setTimeout(() => {
      this.showPoem = true;
      this.displayPoemLines();
    }, 1000);
  }

  displayPoemLines() {
    this.poemLines.forEach((line, index) => {
      setTimeout(() => {
        this.displayedLines.push(line);
        this.scrollToBottom();
      }, index * 2000);
    });

    setTimeout(() => {
      this.showMemories = true;
      this.displayNextMemoryImage();
    }, this.poemLines.length * 2000);
  }

  displayNextMemoryImage() {
    if (this.currentMemoryIndex === 0) {
      // Shuffle the memory images randomly at the start
      this.memoryImages = this.memoryImages.sort(() => Math.random() - 0.5);
    }
  
    if (this.currentMemoryIndex < this.memoryImages.length) {
      this.currentMemoryImage = this.memoryImages[this.currentMemoryIndex];
      this.currentMemoryIndex++;
    } else {
      // Restart from the beginning to create a looping effect
      this.currentMemoryIndex = 0;
    }
  
    setTimeout(() => this.displayNextMemoryImage(), 2000);
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
      this.renderer.addClass(noButton, 'cracked');
      this.noButtonClickCount++;
    } else if (this.noButtonClickCount === 1) {
      this.renderer.addClass(noButton, 'shattered');
      setTimeout(() => {
        this.showNoButton = false;
      }, 500);
    }
  }

  randomMove(button: HTMLElement) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const newX = Math.random() * (screenWidth - 100);
    const newY = Math.random() * (screenHeight - 100);

    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.containerRef) {
        this.containerRef.nativeElement.scrollTo({
          top: this.containerRef.nativeElement.scrollHeight,
          behavior: "smooth"
        });
      }
    }, 300);
  }

}
