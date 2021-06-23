import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddressGroupService {
  constructor(private http: HttpClient) {}
  url_ = '../../../assets/NTrungData/addressGroup.json';

  getAll(): any {
    return this.http.get<any>(this.url_);
  }
}
