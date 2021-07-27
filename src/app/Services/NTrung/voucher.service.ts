import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voucher } from 'src/app/model/voucher.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
  constructor(private httpClient: HttpClient) {}

  public getVoucher(): Observable<Voucher[]> {
    const url = `${this.REST_API_SERVER}/voucher`;
    return this.httpClient.get<Voucher[]>(url, this.httpOptions);
  }

  public getVoucherById(id:string): Observable<Voucher[]> {
    const url = `${this.REST_API_SERVER}/voucher?id=${id}`;
    return this.httpClient.get<Voucher[]>(url, this.httpOptions);
  }

}
