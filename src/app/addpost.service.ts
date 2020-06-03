import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddpostService {

  constructor() { }

  post(){
    return[
      {"id":1,"title":"adssfg", "content":"sfguhsfluighksfuhgjkvnbjkgfhuedhytjf fghuhf uf dsgu dgfb"},
      {"id":2, "title":"adssfg", "content":"sfguhsfluighksfuhgjkvnbjkgfhuedhytjf fghuhf uf dsgu dgfb"},
      {"id":3, "title":"adssfg", "content":"sfguhsfluighksfuhgjkvnbjkgfhuedhytjf fghuhf uf dsgu dgfb"},
      {"id":4,"title":"adssfg", "content":"sfguhsfluighksfuhgjkvnbjkgfhuedhytjf fghuhf uf dsgu dgfb"}    
    ]

  }
}
