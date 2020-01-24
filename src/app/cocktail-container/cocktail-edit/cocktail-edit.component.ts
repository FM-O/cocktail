import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.scss']
})
export class CocktailEditComponent implements OnInit {

  public cocktailForm: FormGroup;
  public cocktail:Cocktail;
  private edit:boolean;

  constructor(private activatedRoute:ActivatedRoute, private fb:FormBuilder, private cocktailService:CocktailService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      if (params.get('index')) {
        this.edit = true;
        this.cocktailService.getCocktail(parseInt(params.get('index'))).subscribe( (cocktail:Cocktail) => {
          this.cocktail = cocktail;
          this.initForm(this.cocktail);
        });      
      } else {
        this.edit = false;
        this.initForm();
      }
    });
  }

  initForm(cocktail = {name: '', image: '', desc: '', ingredients: []}) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      image: [cocktail.image, Validators.required],
      desc: [cocktail.desc],
      ingredients: this.fb.array(cocktail.ingredients.map(ingredient => this.fb.group({name: [ingredient.name], quantity: [ingredient.quantity]})))
    });
  }

  addIngredient():void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
      name: [''],
      quantity: ['']
    }));
  }

  saveCocktail() {
    if (this.edit) {
      this.cocktailService.editCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
  }

}
