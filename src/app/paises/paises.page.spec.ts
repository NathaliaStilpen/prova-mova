import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisesPage } from './paises.page';

describe('PaisesPage', () => {
  let component: PaisesPage;
  let fixture: ComponentFixture<PaisesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
