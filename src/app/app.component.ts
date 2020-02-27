import { Component } from '@angular/core';
import {PostModel} from "./models/posts/post_model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EcologieCreative';
  postMap: Map<number, PostModel> = new Map([
    [1, new PostModel('Bonjour', '', 'Nouveau post bienvenue aux nouveaux ! :)')],
    [2, new PostModel('Bonjour', '', 'Nouveau post bienvenue aux nouveaux ! :)')],
    [3, new PostModel('Bonjour', '', 'Nouveau post bienvenue aux nouveaux ! :)')],
    [4, new PostModel('Bonjour', '', 'Nouveau post bienvenue aux nouveaux ! :)')],
    [5, new PostModel('Bonjour', '', 'Nouveau post bienvenue aux nouveaux ! :)')],
  ]);

}
