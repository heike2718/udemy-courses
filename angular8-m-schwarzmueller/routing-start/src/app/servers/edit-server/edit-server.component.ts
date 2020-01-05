import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CanDeactivateComponent } from './can-deactivate.guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy, CanDeactivateComponent {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  private queryParamsSubscription: Subscription;
  private fragmentParamSubscription: Subscription;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === 1 ? true : false;
      }
    );

    this.fragmentParamSubscription = this.route.fragment.subscribe(

    );

    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
    this.fragmentParamSubscription.unsubscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate() {
    if (!this.allowEdit) {
      return true;
    }
    if (!this.changesSaved && (this.serverName !== this.server.name || this.serverStatus !== this.server.status)) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
