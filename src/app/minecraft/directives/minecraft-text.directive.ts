import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

import { ColorCodePipe } from '../pipe/minecraft-text/color-code/color-code.pipe';
import { HexColorCodePipe } from '../pipe/minecraft-text/hex-color-code/hex-color-code.pipe';
import { MiniMessagePipe } from '../pipe/minecraft-text/mini-message/mini-message.pipe';
import { obfuscatedText } from '../../shared/utility/obfuscated-text-utility';

export interface MinecraftTextConfig {
  parseMiniMessage?: boolean;
  parseColorCodes?: boolean;
  parseHexColorCodes?: boolean;
}

@Directive({
  selector: '[appMinecraftText]',
  providers: [ColorCodePipe, HexColorCodePipe, MiniMessagePipe],
})
export class MinecraftTextDirective implements OnInit, OnChanges, OnDestroy {
  @Input() text!: string;
  @Input() config: MinecraftTextConfig = { parseColorCodes: true, parseHexColorCodes: true, parseMiniMessage: false };

  private intervalSubscription!: Subscription;

  constructor(
    private elementRef: ElementRef,
    private colorCodePipe: ColorCodePipe,
    private hexColorCodePipe: HexColorCodePipe,
    private miniMessagePipe: MiniMessagePipe
  ) {}

  ngOnInit(): void {
    this.intervalSubscription = interval(50).subscribe(() => {
      const container = this.elementRef.nativeElement;
      const obfuscatedElements = container.querySelectorAll('.obfuscated');

      for (let i = 0; i < obfuscatedElements.length; i++) {
        const element = obfuscatedElements[i] as HTMLElement;
        element.innerText = obfuscatedText(element.innerText);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.innerHTML = this.parseText(this.text);
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  private parseText(text: string): string {
    if (this.config.parseHexColorCodes) {
      text = this.hexColorCodePipe.transform(text);
    } else if (this.config.parseColorCodes) {
      text = this.colorCodePipe.transform(text);
    }

    if (this.config.parseMiniMessage) {
      text = this.miniMessagePipe.transform(text);
    }

    return text;
  }
}
