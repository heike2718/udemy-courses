import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface Server {
    id: number;
    name: string;
    status: string;
}


export class ServerResolver implements Resolve<Server> {

    constructor(private seversService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> |
        Promise<Server> | Server {

        return this.seversService.getServer(+route.params['id']);


    }

}
