import { Component } from '@angular/core';

@Component({
  selector: 'ProjectCards',
  templateUrl: './ProjectCards.component.html',
  styles: [
    `
      h2 {
        text-align: center;
      }

      .linkButtons {
        margin-bottom: 10px;
        color: white;
      }

      .project-cards__header {
        margin-bottom: 30px;
      }

      .card {
        margin: 0 auto;
        float: none;
      }
    `,
  ],
})
export class ProjectCards {
  redirectToPage(url) {
    window.open(url, '_blank');
  }
}
