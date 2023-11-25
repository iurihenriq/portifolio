import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ILink {
  route: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: ILink[] = [
    {
      route: '',
      label: 'Sobre mim',
    },
    {
      route: '/projects',
      label: 'Projetos',
    },
    {
      route: '/curriculum',
      label: 'Currículo',
    },
  ];
}
