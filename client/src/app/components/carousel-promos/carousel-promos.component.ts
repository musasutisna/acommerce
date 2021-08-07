import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carousel-promos',
  templateUrl: './carousel-promos.component.html',
  styleUrls: ['./carousel-promos.component.scss']
})
export class CarouselPromosComponent {

  promos: Object
  inLoadPromoImage = false
  currentPromoImage = {
    id: null,
    img: null,
    src: null
  }

  public constructor(private http: HttpClient) {
    this.promos = Array(
      {
        id: 1,
        img: '/assets/images/promos/promo-1.jpg',
        src: null
      },
      {
        id: 2,
        img: '/assets/images/promos/promo-1.jpg',
        src: null
      }
    )

    this.changePromoImage(0)
  }

  changePromoImage(promoIndex) {
    var self = this

    this.inLoadPromoImage = true
    this.currentPromoImage = this.promos[promoIndex]

    this.http.get(this.currentPromoImage.img)
      .subscribe(this.imageLoaded)

    fetch(this.currentPromoImage.img, {
      mode: 'no-cors'
    }).then(function (res) {
      return res.blob()
    }).then(function (res) {
      let imageSrc = new FileReader()

      imageSrc.onloadend = function () {
        self.inLoadPromoImage = false
        self.currentPromoImage.src = imageSrc.result
      }

      imageSrc.readAsDataURL(res)
    }).catch(function (err) {
      self.inLoadPromoImage = false
      self.currentPromoImage.src = null
    })
  }

  imageLoaded(data) {
    console.log(data)
  }
}
