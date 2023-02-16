interface SpinningTextProps {
	text: string;
	size: number;
	children: React.ReactNode;
}

function SpinningText({ text, size, children }: SpinningTextProps) {
	const length = text.length;
	const deg = 360 / length;

	return (
		<div
			className="spinning-text-wrapper z-100"
			style={{
				width: `${size}px`,
				height: `${size}px`,
				fontSize: `${size * 0.00425}rem`,
			}}
			onMouseLeave={e => {
				console.log('leave');
				if (!(e.target instanceof HTMLElement)) return;
				e.target.style.animationPlayState = 'running';
			}}
			onMouseEnter={e => {
				console.log('enter');
				if (!(e.target instanceof HTMLElement)) return;
				e.target.style.animationPlayState = 'paused';
			}}
		>
			<div
				className={`spinning-text `}
				style={{ animation: `spin ${size * 0.05}s linear infinite` }}
			>
				<p>
					{text.split('').map((letra, i) => (
						<span
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
