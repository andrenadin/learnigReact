import React from "react";

const VideoListItem = ({ video }) => {
	// same that write -> const video = props.video;
	const imgUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item">
			<div className="video">
				<img className="" src={imgUrl} />
			</div>
			<div className="">
				<h2 className="">{video.snippet.title}</h2>
			</div>
		</li>
	);
};

export default VideoListItem;
