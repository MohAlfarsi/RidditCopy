import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  icon = "https://th.bing.com/th/id/R.1ec71cc4ddc12c8ebc54a5d284c9bba4?rik=1QIFzC6jToD%2fMA&riu=http%3a%2f%2fwww.cssbuy.com%2fskin%2fimages%2freddit.png&ehk=tZb4ivxYR%2fEl7E19vnZLRhrTFausb%2f8dW8gc6b07YL8%3d&risl=&pid=ImgRaw&r=0";

  
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
