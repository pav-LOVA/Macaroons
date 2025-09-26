import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonEffect]'
})
export class ButtonEffectDirective implements OnInit {

  @Input() buttonEffectDefaultBgColor: string = '#f3cabf';
  @Input() buttonEffectFocusBgColor: string = '#cb4452';

  constructor(private el: ElementRef,
              private rend: Renderer2) { }

  ngOnInit(): void {
    this.setBackground(this.buttonEffectDefaultBgColor);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBackground(this.buttonEffectFocusBgColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackground(this.buttonEffectDefaultBgColor);
  }

  setBackground(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
