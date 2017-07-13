import { Component, OnInit } from '@angular/core';
// import { MdSnackBar } from '@angular/material';
import { ContactModel } from '../../models/contact.model';


@Component({
  selector: 'tk-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

 contactModel = new ContactModel();
  // activeButton: string = 'firstName.value && message.value && lastName.value'; FormControl add later @TODO
  // disabledButton: string = '!firstName.value || !message.value || !lastName.value';

  constructor(
    // public snackBar: MdSnackBar
    // private _http: Http
  ) { }

  ngOnInit() {
    console.log(this.contactModel);
  }

  // /* NEED TO BE CORRELATED W/ MODEL @TODO */
  // openSnackBar(message: string, action: string) {
  //   message = 'Message Sent to Trevor Knott Successfully!';
  //   action = '(970) 581-3161';
  //   this.snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }

  sendInfo() {
    // this.openSnackBar('s', 'a');

    console.log(this.contactModel);

    // return this._http.put('https://evening-dusk-42226.herokuapp.com/new', this.contactModel);
  }

}
