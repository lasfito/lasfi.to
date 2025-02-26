interface ResponsivePlayerProps {
  url: string;
}

const ResponsivePlayer = ({url}: ResponsivePlayerProps) => {
  return (
    <iframe
      data-testid="VIDEO-IFRAME"
      src={url}
      title="YouTube video player"
      className=" my-20 aspect-video h-auto w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default ResponsivePlayer;
