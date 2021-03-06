import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the NiroshaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-nirosha',
    templateUrl: 'nirosha.html',
})

export class NiroshaPage {
    myTracks: any[];
    myTracks2: any[];
    myTracks3: any[];
    myTracks4: any[];
    myTracks5: any[];
    myTracks6: any[];
    myTracks7: any[];
    myTracks8: any[];
    myTracks9: any[];
    myTracks10: any[];
    myTracks11: any[];
    myTracks12: any[];
    myTracks13: any[];
    myTracks14: any[];
    allTracks: any[];
    selectedTrack: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private _audioProvider: AudioProvider) {
    }
    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the API
        this.allTracks = this._audioProvider.tracks;
    }

    playSelectedTrack() {
        // use AudioProvider to control selected track 
        this._audioProvider.play(this.selectedTrack);
    }

    pauseSelectedTrack() {
        // use AudioProvider to control selected track 
        this._audioProvider.pause(this.selectedTrack);
    }

    onTrackFinished(track: any) {
        console.log('Track finished', track)
    }

    punSanda() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Punsanda%20Reta%20__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: ' පුන් සඳ රෑට ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sandaThaniyama() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Thaniyama%20%20%20__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: ' සඳ තනියම',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    duhulMalaka() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Duhul%20Malaka%20Mal%20Petthaka-%20Live__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: '  දුහුල් මලක මල් පෙත්තක',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    dunnuWedana() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Dunnu%20Wedana__Nirosha%20Virijini_mp3[www.sarigama.lk].mp3',
            artist: ' දුන්නු වේදනා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    rangiraMaa() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Ran%20Gira%20Maa%20__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: '   රන් ගිර මා ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sandaDiya() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Diya%20Uthura__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: ' සද දිය උතුරා අපතේ යයි ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sinaThotak() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sina%20Thotak__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: 'සිනාතොටක් විය ඔබ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sithaHandai() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sitha%20Handai__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: '  සිත හඩයි...',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    suduAth() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sudu%20Eath%20Powuwek__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: '  සුදු ඇත් පොව්වෙක ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sigiriGeeyak() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Seegiri%20Geeyak__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: ' සීගිරි ගීයක් ඔබේ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    reeDolos() {
        this.myTracks12 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Re%20Dolos%20Peye%20%20__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: '  රෑ දොලොස් පැයේ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sandaRajini() {
        this.myTracks11 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Rajinee__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: ' සඳ රාජිනී ඇයි ද හැංගී ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    manKirilliyak() {
        this.myTracks13 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Man%20Kirilliyak%20__Nirosha%20Virajini_mp3[sarigama.lk].mp3',
            artist: 'මං කිරිල්ලියක් ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NiroshaPage');
    }

}
