import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.css']
})
export class SwitchLanguageComponent {
  
  constructor(private translate: TranslateService) { }

  selectLanguage(lang: string) {
    this.translate.use(lang);
  }

}
