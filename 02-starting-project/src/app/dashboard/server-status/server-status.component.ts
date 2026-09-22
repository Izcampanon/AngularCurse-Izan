import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  //currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  currentStatus = signal<'online' | 'offline' | 'unknown'> ('offline');
  private interval?: ReturnType<typeof setInterval>;
  //private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() =>{
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    console.log('ON INIT');
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online');
        console.log('Change1');
      } else if (rnd < 0.9) {
        this.currentStatus.set('online');
        console.log('Change2');
      } else {
        this.currentStatus.set('unknown');
        console.log('Change3');
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
