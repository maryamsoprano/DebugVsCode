import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'contacts-view',
  templateUrl: './app/views/contacts.html',
  directives: [
  ],
  providers: [
   

  ]
})

export class ContactsView extends SeiComponent {
.
.
.
  editMode: boolean = false;
  searchCondition: string = '';
  searchOn: boolean = false;
 
   public ngOnInit() {
    this.service.getRecords();
   this.items = EnumValues.getNamesAndValues(GenderEnum);

 }

  public select = (recordSelected) => {
    // reset editMode to false
    this.editMode = false;
    

    // read full record from server
    this.service.getRecord(recordSelected.id)
      .then((contact: ContactBean) => {
        this.selected = contact;
      });
  }
  
  .
  .
  .
  
 
  
}
