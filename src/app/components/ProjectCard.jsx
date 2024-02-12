import React, { useState } from "react"
import {} from "@heroicons/react/24/outline"
import Link from "next/link"

const ProjectCard = ({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
	videourl,
}) => {
	const [isPlaying, setIsPlaying] = useState(false)

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<div>
			{/* <div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{
					background: `url(${imgUrl} || ${videourl})`,
					backgroundSize: "cover",
				}}
			> */}
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPositionX: "center",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0    transition-all duration-500 ">
					{videourl && (
						<video
							className="h-48 w-full flex
              justify-center items-center md:h-72 rounded-t-xl relative group  "
							autoPlay
							loop
							muted={!isPlaying}
							playsInline
							src={videourl}
							// controls
						/>
					)}{" "}
					{videourl && (
						<button
							className="absolute top-2 right-2 text-white"
							onClick={togglePlayPause}
						>
							{isPlaying ? (
								<span className="text-xs md:text-base mr-8 bg-black p-2 rounded-full">
									Pause
								</span>
							) : (
								<span className="text-xs md:text-base mr-8  bg-black p-2 rounded-full ">
									Play
								</span>
							)}
						</button>
					)}
				</div>
			</div>
			<div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-[#ADB7BE]">{description}</p>
			</div>
		</div>
	)
}

export default ProjectCard
