import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'convite-eva';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const sparklesContainer = this.el.nativeElement.querySelector('.sparkles');

    for (let i = 0; i < 50; i++) {
      const sparkle = this.renderer.createElement('span');
      this.renderer.setStyle(sparkle, 'position', 'absolute');
      this.renderer.setStyle(sparkle, 'top', `${Math.random() * 95}%`); // Limita a posição para evitar overflow
      this.renderer.setStyle(sparkle, 'left', `${Math.random() * 95}%`); // Limita a posição para evitar overflow
      this.renderer.setStyle(sparkle, 'animationDelay', `${Math.random() * 3}s`);
      this.renderer.appendChild(sparklesContainer, sparkle);
    }
  }
}
