import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: '' })
export abstract class MinecraftTextPipe implements PipeTransform {
  abstract transform(message: string): string;

  protected getColorSpan(color: string): string {
    return "<span style='color: " + color + "'>";
  }

  protected getResetSpan(): string {
    return "<span style='color: #ffffff'>";
  }

  protected getTextDecorationSpan(decoration: string): string | null {
    if (this.getBoldFormats().includes(decoration)) {
      return "<span style='font-weight: 600;'>";
    } else if (this.getUnderlineFormats().includes(decoration)) {
      return "<span style='text-decoration: underline;'>";
    } else if (this.getObfuscatedFormats().includes(decoration)) {
      return "<span class='obfuscated'>";
    } else if (this.getLineThroughFormats().includes(decoration)) {
      return "<span style='text-decoration: line-through; text-decoration-thickness: 2px;'>";
    } else if (this.getItalicFormats().includes(decoration)) {
      return "<span style='font-style: italic'>";
    }
    return null;
  }

  protected abstract parseColor(message: string): { success: boolean; message: string; passedChars: number };
  protected abstract parseFormatReset(message: string): { success: boolean; message: string; passedChars: number };
  protected abstract parseTextDecoration(message: string): { success: boolean; message: string; passedChars: number };

  protected abstract getResetFormats(): string[];

  protected getDecorationFormats(): string[] {
    return this.getBoldFormats().concat(
      this.getItalicFormats(),
      this.getObfuscatedFormats(),
      this.getUnderlineFormats(),
      this.getLineThroughFormats()
    );
  }
  protected abstract getBoldFormats(): string[];
  protected abstract getItalicFormats(): string[];
  protected abstract getObfuscatedFormats(): string[];
  protected abstract getUnderlineFormats(): string[];
  protected abstract getLineThroughFormats(): string[];
}
