import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

const colorCodesColorMap: Record<string, string> = {
  '0': '#000000',
  '1': '#0000AA',
  '2': '#00AA00',
  '3': '#00AAAA',
  '4': '#AA0000',
  '5': '#AA00AA',
  '6': '#FFAA00',
  '7': '#AAAAAA',
  '8': '#555555',
  '9': '#5555FF',
  a: '#55FF55',
  b: '#55FFFF',
  c: '#FF5555',
  d: '#FF55FF',
  e: '#FFFF55',
  f: '#FFFFFF',
};

const formatSymbols = ['u', 'l', 'o', 'm', 'k', 'r'];
const colorSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

@Directive({
  selector: '[appMinecraftText]',
})
export class MinecraftTextDirective implements OnInit, OnChanges, OnDestroy {
  @Input() text!: string;
  private intervalSubscription!: Subscription;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.intervalSubscription = interval(50).subscribe(() => {
      const container = this.elementRef.nativeElement;
      const obfuscatedElements = container.querySelectorAll('.obfuscated');

      for (let i = 0; i < obfuscatedElements.length; i++) {
        const element = obfuscatedElements[i] as HTMLElement;
        element.innerText = this.obfuscatedText(element.innerText);
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
    text = this.parseColorCodes(text);
    text = this.parseMiniMessage(text);
    return text;
  }

  private parseMiniMessage(text: string): string {
    // TODO parse minimessage
    return text;
  }

  private parseColorCodes(text: string): string {
    let closingTags = [''];
    let formattedText = '';

    for (let i = 0; i < text.length; i++) {
      const letter = text.charAt(i);

      if (i === text.length - 1) {
        formattedText += text[i];
        break;
      }

      const nextLetter = text.charAt(i + 1);
      if (!this.isColorCodeSequence(letter, nextLetter)) {
        formattedText += letter;
        continue;
      }

      // Parse hex color codes e.g. &#ffffff
      console.log(text.substring(i + 0, i + 8));
      console.log(this.isHexSequence(text.substring(i, i + 8)));
      if (text.length - i + 7 >= 0 && this.isHexSequence(text.substring(i + 1, i + 8))) {
        console.log('parsing hex code');
        formattedText += closingTags.join('');
        closingTags = [];

        const hexColor = text.substring(i + 1, i + 8);
        formattedText += "<span style='color: " + hexColor + "'>";

        closingTags.push('</span>');
        i += 7;
        continue;
      }

      // Parse color codes e.g. &c
      if (this.isColorSymbol(nextLetter)) {
        formattedText += closingTags.join('');
        closingTags = [];
        formattedText += "<span style='color: " + colorCodesColorMap[nextLetter] + "'>";

        // Parse &r format code
      } else if (nextLetter === 'r') {
        formattedText += closingTags.join('');
        closingTags = [];
        formattedText += "<span style='color: #ffffff'>";

        // Parse all format codes besides &r
      } else {
        formattedText += this.getFormatCodeSpan(nextLetter);
      }

      closingTags.push('</span>');
      i += 1;
    }

    return formattedText + closingTags.join('');
  }

  private getFormatCodeSpan(formatCode: string): string {
    switch (formatCode) {
      case 'u':
        return "<span style='text-decoration: underline;'>";
      case 'l':
        return "<span style='font-weight: 600;'>";
      case 'o':
        return "<span style='font-style: italic'>";
      case 'm':
        return "<span style='text-decoration: line-through; text-decoration-thickness: 2px;'>";
      case 'k':
        return "<span class='obfuscated'>";
      default:
        throw new Error('Symbol is invalid format code: "' + formatCode + '"');
    }
  }

  private isHexSequence(sequence: string): boolean {
    return /#[0-9a-f]{6}/.test(sequence);
  }

  private isColorSymbol(code: string): boolean {
    return [...colorSymbols].includes(code);
  }

  private isColorCodeSequence(letter: string, nextLetter: string): boolean {
    if (!(letter === '&' || nextLetter === '§')) {
      return false;
    }

    return [...formatSymbols, ...colorSymbols, '#'].includes(nextLetter);
  }

  private obfuscatedText(text: string): string {
    return text
      .split('')
      .map(() => this.randomCharacter())
      .join('');
  }

  private randomCharacter(): string {
    return String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33);
  }
}
