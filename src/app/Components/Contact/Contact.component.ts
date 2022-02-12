import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'contact-me',
  templateUrl: './Contact.component.html',
  styles: [
    `
      .contact-paragraph {
        font-size: 20px;
        margin-top: 25px;
      }

      img {
        width: 25px;
      }

      .social {
        margin-right: 5px;
        margin-left: 5px;
        cursor: pointer;
      }
    `,
  ],
})
export class Contact {
  constructor(private toastr: ToastrService) {}

  handleRedirect(url) {
    window.open(url, '_blank');
  }
}
