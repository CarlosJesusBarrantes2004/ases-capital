interface VideoCardProps {
  title: string;
  url: string;
  description?: string;
}

function VideoCard({ title, url, description }: VideoCardProps) {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg bg-white">
      <header className="p-4 border-b border-gray-200 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </header>
      <div className="relative aspect-video h-96">
        <video
          src={url}
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          aria-label={`Video: ${title}`}
        ></video>
      </div>
      {description && (
        <footer className="p-4">
          <p className="text-gray-600">{description}</p>
        </footer>
      )}
    </article>
  );
}

export default VideoCard;
