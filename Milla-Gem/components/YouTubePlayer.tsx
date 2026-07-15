url: https://raw.githubusercontent.com/mrdannyclark82/Milla-Gem/00b4fc6539267fe8d29b65b188e1ad9d094cbacc/components/YouTubePlayer.tsx

import React from 'react';

interface YouTubePlayerProps {
  videoId: string;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId }) => {
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};