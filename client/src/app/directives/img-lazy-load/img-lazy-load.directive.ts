import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[imgLazyLoad]'
})
export class ImgLazyLoadDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const isSupportLazyLoad = 'loading' in HTMLImageElement.prototype

    if (isSupportLazyLoad) {
      nativeElement.setAttribute('loading', 'lazy')
      nativeElement.src = nativeElement.dataset.src
    } else {
      const lazyObserver = new IntersectionObserver(this.lazyObserver)

      lazyObserver.observe(nativeElement)
    }
  }

  lazyObserver(entries, imgObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target

        lazyImage.src = lazyImage.dataset.src

        imgObserver.unobserve(lazyImage)
      }
    })
  }
}
