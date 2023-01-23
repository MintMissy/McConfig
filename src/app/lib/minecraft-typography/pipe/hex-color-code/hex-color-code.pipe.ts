import { Pipe, PipeTransform } from '@angular/core';
import { isHexColor } from 'src/app/lib/minecraft-typography/utility/color-utility';
import { ColorCodePipe } from '../color-code/color-code.pipe';

@Pipe({
	name: 'hexColorCode',
})
export class HexColorCodePipe extends ColorCodePipe implements PipeTransform {
	protected override parseColor(message: string): { success: boolean; message: string; passedChars: number } {
		if (message.length <= 6) {
			return super.parseColor(message);
		}

		if (message.charAt(0) === '&' && isHexColor(message.substring(1, 8))) {
			const color = message.substring(1, 8);
			message = this.getColorSpan(color ? color : '#ffffff');

			return { success: true, message: message, passedChars: 8 };
		}

		return super.parseColor(message);
	}
}
