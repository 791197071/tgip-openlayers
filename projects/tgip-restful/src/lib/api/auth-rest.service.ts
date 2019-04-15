import { Injectable } from '@angular/core';
import { BaseUrl, BaseApi, GET, Path, DELETE, POST, PUT, Body } from '@delon/theme';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
@BaseUrl('gis-map-backend')
export class AuthRestService extends BaseApi {

    @GET('/permission/no-paging')
    getPermissionData(): Observable<any> {
        return;
    }

    @POST('/permission')
    addAuth(@Body data: Object): Observable<any> {
        return;
    }

    @DELETE('/permission/:id')
    deleteAuth(@Path('id') id: string): Observable<any> {
        return;
    }


    @GET('/permission/ids?ids=id')
    checkAuthId(@Path('id') id: string): Observable<any> {
        return;
    }

    @PUT('/permission/:id')
    updateAuth(@Path('id') id: any, @Body data: Object): Observable<any> {
        return;
    }
}