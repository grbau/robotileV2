import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GluepullerComponent } from './gluepuller.component';


describe('GluepullerComponent', () => {
  let component: GluepullerComponent;
  let fixture: ComponentFixture<GluepullerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GluepullerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GluepullerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
