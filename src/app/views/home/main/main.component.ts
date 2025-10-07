import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil, timer} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  images = [
    'assets/chay-s-apelsinom-sayt-2%201.png',
    'assets/tea.png',
    'assets/shutterstock.png'
  ];

  // список вопросов и ответов для аккордеона
  faqs = [
    {
      title: 'Собираете ли вы подарочные боксы?',
      content: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!'
    },
    {
      title: 'Сколько у вас разновидностей чая?',
      content: 'У нас более 100 сортов — от классических до редких коллекционных.'
    },
    {
      title: 'В какой срок осуществляется доставка?',
      content: 'Доставка обычно занимает 2–3 дня по городу и до 5 дней по регионам.'
    },
    {
      title: 'У вас обновляется ассортимент?',
      content: 'Да! Мы регулярно пополняем ассортимент свежими коллекциями и сезонными предложениями.'
    },
    {
      title: 'Какого объема у вас пачки чая?',
      content: 'Пачки чая бывают по 50, 100, 200 и 500 грамм в зависимости от сорта.'
    }
  ];

  private destroy$ = new Subject<void>();
  popup = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // через 10 секунд сработает таймер
    timer(10000).pipe(
      takeUntil(this.destroy$) // если пользователь уйдет — таймер отменится
    ).subscribe(() => {
      this.popup = true;
    });
  }

  goToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  closePopup(): void {
    this.popup = false;
  }

  ngOnDestroy(): void {
    // отписка, если пользователь покидает страницу
    this.destroy$.next();
    this.destroy$.complete();
  }
}
