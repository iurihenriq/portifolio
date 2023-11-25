import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IButton {
  label: string;
  link: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  buttons: IButton[] = [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/iuri-henrique/',
    },
    {
      label: 'GitHub',
      link: 'https://github.com/iurihenriq',
    },
    {
      label: 'Gmail',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=iurinhg2@gmail.com',
    },
  ];
}
