import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loveMessage: string = '';
  showLoveMessage: boolean = false;
  showPoem: boolean = false;
  showModal: boolean = false;
  showNoButton: boolean = true;
  showYesButton: boolean = true;
  showMemories: boolean = false;
  displayedLines: string[] = [];
  noButtonClickCount = 0;
  showInitialGif: boolean = true;
  showLoveGif: boolean = false;
  currentMemoryIndex: number = 0;
  currentMemoryImage: string = '';
  showHeading: boolean = true;

  poemLines: string[] = [
    "I'll be everything you need me to be.",
    "I'll be your shoulder to cry on.",
    "I'll be the perfect listener.",
    "I'll be the person that you can trust with everything on your plate.",
    "I'll be the everlasting hug you need.",
    "I'll keep you safe in my arms when the world gets tough.",
    "I'll be with you by your side so you never have to be alone.",
    "I'll be your lover and your best friend.",
    "I'll be your saviour and your hero.",
    "I'll be the walls you need to keep the building stable.",
    "I'll be everything you need me to be.",
  ];

  memoryImages = Array.from(
    { length: 15 },
    (_, i) => `assets/${(i + 1).toString().padStart(2, '0')}.jpg`
  );
  // Poem to be displayed in the modal
  poem: string = `
  I'm yours until the time stops still,\n
  Through every storm, through every thrill.\n
  No clock can break the love we weave,\n
  No force can make my heart deceive.\n\n
  Your laughter is my favorite song,\n
  A melody that plays so strong.\n
  With every beat, with every rhyme,\n
  I’ll love you past the end of time.\n\n
  Through moonlit nights and golden days,\n
  I'll cherish you in countless ways.\n
  No end, no pause, no final line—\n
  Forever yours, my baby buttercup. ❤️`;

  @ViewChild('container') containerRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  showLove() {
    // Play the love song
    this.playLoveSong();
    this.loveMessage = 'I Knew It😍,\nI Love You too ချစ်တုံးချေ😙💞';
    this.showLoveMessage = true;
    this.showNoButton = false;
    this.showYesButton = false;
    this.showInitialGif = false;
    this.showLoveGif = true;
    this.showHeading = false;

    setTimeout(() => {
      this.showPoem = true;
      this.displayPoemLines();
    }, 1000);
  }

  playLoveSong() {
    const audio = new Audio('assets/lovesong.mp3');
    audio.play();
    audio.onended = () => {
      this.showModal = true;
    };
  }

  closeModal() {
    this.showModal = false; // Close the modal when the user clicks close
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

    setTimeout(() => this.displayNextMemoryImage(), 2500);
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

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }

  scrollToBottom() {
  setTimeout(() => {
    const container = this.containerRef?.nativeElement;
    if (container) {
      container.scroll({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, 300); // Adjust the timeout as needed for smoother scrolling
}

}
