import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EntryNavComponent } from './entry-nav.component';

describe('EntryNavComponent', () => {
  let component: EntryNavComponent;
  let fixture: ComponentFixture<EntryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        EntryNavComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
