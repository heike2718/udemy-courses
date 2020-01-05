import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  reloadPage() {

    // Das bricht die Anwendung, weil nun zu localhost:4200/servers/servers navigiert wird
    // this.router.navigate(['servers'], {relativeTo: this.route});
    this.router.navigate(['../servers'], {relativeTo: this.route});
  }

}
