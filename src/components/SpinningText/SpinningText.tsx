import { useRef } from 'react';

interface SpinningTextProps {
	text: string;
	size: number;
	children: React.ReactNode;
}

function SpinningText({ text, size, children }: SpinningTextProps) {
	const length = text.length;
	const deg = 360 / length;

	const circuloRef = useRef<HTMLDivElement>(null);

	return (
		<div
			className="relative select-none rounded-full text-texto-sft flex justify-center items-center font-bold z-10 cursor-pointer"
			id="circle-wrapper"
			title="Click para pausar"
			style={{
				width: `${size}px`,
				height: `${size}px`,
				fontSize: `${size * 0.00425}rem`,
			}}
			onClick={e => {
				if (!(e.target instanceof HTMLElement) || !circuloRef.current) return;

				if (circuloRef.current.style.animationPlayState === 'paused') {
					circuloRef.current.style.animationPlayState = 'running';
				} else if (circuloRef.current!.style.animationPlayState === 'running') {
					circuloRef.current.style.animationPlayState = 'paused';
				}
			}}
		>
			<div
				ref={circuloRef}
				className={`absolute inset-0   `}
				style={{ animation: `spin ${size * 0.05}s linear infinite` }}
				id="circle"
			>
				<p>
					{text.split('').map((letra, i) => (
						<span
							className="absolute left-1/2 "
							key={i}
							style={{
								transform: `rotate(${i * deg}deg)`,
								transformOrigin: `0 ${size / 2}px`,
							}}
						>
							{letra}
						</span>
					))}
				</p>
			</div>
			{children}
		</div>
	);
}

export default SpinningText;
