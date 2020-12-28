import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexListItemComponent } from './pokedex-list-item.component';

describe('PokedexListItemComponent', () => {
  let component: PokedexListItemComponent;
  let fixture: ComponentFixture<PokedexListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
