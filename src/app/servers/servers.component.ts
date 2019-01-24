import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  alloNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName: string = 'hodor';
  serverCreated: boolean = false;
  servers: Array = ['test1', 'test2'];

  constructor() {
    setTimeout(() => {
      this.alloNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    //this.serverCreationStatus = 'Server was created !';
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
