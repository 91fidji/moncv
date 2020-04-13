import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  angularVersion = '9';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCBCI3UVHdEBfg5jZXZkBxbx_2IiX7go7c",
      authDomain: "moncv-14c8a.firebaseapp.com",
      databaseURL: "https://moncv-14c8a.firebaseio.com",
      projectId: "moncv-14c8a",
      storageBucket: "moncv-14c8a.appspot.com",
      messagingSenderId: "936493547239",
      appId: "1:936493547239:web:7ff3acf6a9499dd04c6c42"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

