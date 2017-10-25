import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';

/**
 * Generated class for the ProfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {
  username: string;
  profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private githubProvider: GithubProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit() {
    this.getProfile(this.username);
    this.username='';

    // console.log(this.username);
  }

  getProfile(username){
    // call service. set the profiles member variable to the response from our service.
     
    this.githubProvider.getProfile(username).subscribe(response => {
             this.profile=response;

    console.log(response);
    });

    
    }

    resetProfile() {
      this.username="";
      this.profile = null;
    }

  }

