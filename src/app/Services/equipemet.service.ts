import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data.service";
const  APIUrl ="http://localhost:8081/api/equipment";

@Injectable({
  providedIn: 'root'
})
export class EquipemetService extends DataService {
  constructor(http: HttpClient,private httpPrivate: HttpClient) {
    super(APIUrl, http);
  }
}
