import React from "react";
import VideoListItem from "./videoListItem";

const VideoList = (props) => {
	var videoItems = props.videos.map((video) => {
		return <VideoListItem key={video.id.videoId} video={video} />;
	});
	return <ul className="col-md-4">{videoItems}</ul>;
};

export default VideoList;
