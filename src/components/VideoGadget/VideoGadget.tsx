import ReactPlayer from 'react-player';

interface ResponsivePlayerProps {
	url: string;
}

const ResponsivePlayer = ({ url }: ResponsivePlayerProps) => {
	return (
		<div className="player-wrapper-gadget">
			<ReactPlayer
				className="react-player-gadget"
				url={url}
				width="100%"
				height="100%"
			/>
		</div>
	);
};

export default ResponsivePlayer;
