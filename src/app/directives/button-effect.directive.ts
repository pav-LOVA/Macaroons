import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonEffect]'
})
export class ButtonEffectDirective implements OnInit{

  @Input() buttonEffectDefaultBgColor: string = 'rgb(113, 8, 30)';
  @Input() buttonEffectFocusBgColor: string = 'transparent';

  constructor(private el: ElementRef,
              private rend: Renderer2) { }


  ngOnInit(): void {
    this.setBackground(this.buttonEffectDefaultBgColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.buttonEffectFocusBgColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground(this.buttonEffectDefaultBgColor);
  }

  private setBackground(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
