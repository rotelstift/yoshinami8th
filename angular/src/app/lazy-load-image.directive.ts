import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]',
  standalone: true
})
export class LazyLoadImageDirective {
  @HostBinding('attr.src') src_attr: string = ''
  @Input() src: string = ''

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage()
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window
  }

  private lazyLoadImage() {
    const observerOptions = {
      root: null, // ビューポートを基準とする
      rootMargin: '64px', // 要素がビューポートの境界に達する前にロードを開始したい場合は、ここを調整する
      threshold: 0.01 // 1%でも要素がビューポートに入ったらトリガーする
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // isIntersecting が true か intersectionRatioが0より大きい場合、画像をロード
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          this.loadImage();
          observer.unobserve(this.el.nativeElement); // 画像がロードされたら監視を停止
        }
      });
    }, observerOptions);
  
    observer.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.src_attr = this.src
  }
}
