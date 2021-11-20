import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEncyclopediaComponent } from './general-encyclopedia.component';

describe('GeneralEncyclopediaComponent', () => {
  let component: GeneralEncyclopediaComponent;
  let fixture: ComponentFixture<GeneralEncyclopediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralEncyclopediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEncyclopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
