interface ResponsivePlayerProps {
	url: string;
}

const ResponsivePlayer = ({ url }: ResponsivePlayerProps) => {
	console.log(url);
	return (
		<div className="player-wrapper-gadget">
			<iframe
				width="100%"
				height="100%"
				src={url}
				title="YouTube video player"
				className="react-player-gadget"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default ResponsivePlayer;
