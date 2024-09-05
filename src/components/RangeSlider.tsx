import { useEffect, useState } from "react";

interface RangeSliderProps {
	disabled?: boolean;
	onChange?: (value: number | null) => void;
}

export function RangeSlider({ disabled = false, onChange }: RangeSliderProps) {
	const [value, setValue] = useState(5);
	const [isValid, setIsValid] = useState(false);

	const handleInteraction = (newValue: number) => {
		setValue(newValue);
		setIsValid(true);
		if (onChange) {
			onChange(newValue);
		}
	};

	useEffect(() => {
		if (disabled) {
			setIsValid(false);
		}
	}, [disabled]);

	return (
		<div className={`w-full mt-3 ${disabled ? "pointer-events-none" : ""}`}>
			<div className="relative h-4 mb-8 flex justify-center items-center">
				<div
					className={`absolute w-full h-full rounded-xl ${
						disabled
							? "bg-gray-300"
							: "bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
					}`}>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
						<span
							key={num}
							className={`absolute top-1/2 -translate-y-1/2 text-xs font-bold text-white ${
								disabled
									? "opacity-40"
									: num === value
									? "opacity-100"
									: "opacity-40"
							}`}
							style={{
								left: `${(num - 1) * 8.8 + 13}%`,
							}}>
							{num}
						</span>
					))}
				</div>
				<input
					id="satisfaction-range"
					type="range"
					min={0}
					max={10}
					step={1}
					value={value}
					onChange={(e) => handleInteraction(parseInt(e.target.value, 10))}
					onMouseDown={() => !isValid && handleInteraction(value)}
					onTouchStart={() => !isValid && handleInteraction(value)}
					className="absolute w-full h-full opacity-0 cursor-pointer"
					disabled={disabled} // Atualiza o input fisicamente
				/>

				{!disabled && (
					<div
						className="absolute top-1/2 -translate-y-1/2 h-8 w-8 bg-white pointer-events-none rounded-full shadow-lg flex items-center justify-center border border-gray-300"
						style={{ left: `calc(${(value - 1) * 8.8 + 13}% - 1rem)` }}>
						<span
							className={`text-sm font-bold ${
								isValid ? "text-gray-800" : "text-gray-200"
							}`}>
							{value}
						</span>
					</div>
				)}
				<div className="absolute w-full top-full pt-2 flex justify-between text-xs text-gray-600">
					<span className="text-left font-light italic text-[9px] ">
						Totalmente insatisfeito
					</span>
					<span className="text-right font-light italic text-[9px] ">
						Totalmente satisfeito
					</span>
				</div>
			</div>
		</div>
	);
}

export default RangeSlider;
