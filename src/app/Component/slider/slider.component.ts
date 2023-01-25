import { Component, Input } from '@angular/core';
import SwiperCore, { Autoplay, SwiperOptions, Navigation, EffectFade } from 'swiper';
import { Results } from '../../interface/get-movies';
import {environment} from '../../../environments/environment';


SwiperCore.use([Autoplay , Navigation, EffectFade]);


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() itemsSlider!: Results[];

  get urlImage(){
    return environment.urlImage;
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true }
  };
}
