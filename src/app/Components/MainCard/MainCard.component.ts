import { Component } from '@angular/core';

@Component({
  selector: 'MainCard',
  templateUrl: './MainCard.component.html',
  styles: [
    `
      h1 {
      }

      .cardHeader {
        color: white;
        justify-content: center;
        align-items: center;
        padding: 125px 0;
        text-align: center;
      }

      .avatar {
        vertical-align: middle;
        width: 150px;
        height: 150px;
        border-radius: 100%;
        object-fit: cover;
      }
    `,
  ],
})
export class MainCard {}
