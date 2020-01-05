import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  private queryParamsSubscription: Subscription;
  private fragmentParamSubscription: Subscription;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.queryParamsSubscription = this.route.queryParams.subscribe(

    );

    this.fragmentParamSubscription = this.route.fragment.subscribe(

    );

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
    this.fragmentParamSubscription.unsubscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
