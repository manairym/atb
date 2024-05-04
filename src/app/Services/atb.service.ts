import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";
const  APIUrl ="http://localhost:8081/api/atb";

@Injectable({
  providedIn: 'root'
})
export class AtbService extends  DataService {
  constructor(http: HttpClient, private httpPrivate: HttpClient) {
    super(APIUrl, http);
  }
}
