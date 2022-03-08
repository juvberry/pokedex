import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons:any
  public getAllPokemons:any
  
  public apiError:boolean = false

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        // popula o setAllPokemons
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      },
      error => {
        this.apiError = true
      }
    )
  }

  public getSearch(value:string){
    // filtra a partir do setAll e então vira o mesmo que o getAll. Quando apagar a pesquisa, volta para o setAll
    const filter = this.setAllPokemons.filter((res:any) =>{
      return !res.name.indexOf(value.toLowerCase())
    })
    this.getAllPokemons = filter
  }
  
}
