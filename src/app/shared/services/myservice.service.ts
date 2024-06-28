import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  baseURL:string="http://localhost:8888";

  constructor(private http:HttpClient) { }
  

  // breakFast:string[]=["idli","dosa","poori","pongal","vada"];

      // breakFast=[{name:"idli",photo:"https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg"},
      //   {name:"dosa",photo:"https://t3.ftcdn.net/jpg/00/37/81/84/360_F_37818424_iEAeI3ngDZ3pNwQ8iZvm2AIDzVDRQmhz.jpg"},
      //   {name:"poori",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMo1SjO6Pc4r--XqFJ8KzVPYnjInEeQhLhkA&s"},
      //   {name:"pongal",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DzLxQt6Z1wz2FZ-NbbhxASZMgmfqPoQwmA&s"}
    
      // ]

      getRecord(tableName:string){
        return this.http.get(`${this.baseURL}/${tableName}`);
      }
   //post request
      addRecord(tableName:string,data:any){
       return this.http.post(`${this.baseURL}/${tableName}`,data);
      }
//make a request for single record
      getSingleRecord(tableName:any,id:any){
        return this.http.get(`${this.baseURL}/${tableName}/${id}`);
      }

      //put request

      updateRecord(tableName:string,id:any,data:any){
        return this.http.put(`${this.baseURL}/${tableName}/${id}`,data);
      }


}
