"use client"
import React, { useState, useRef } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion, useInView } from "framer-motion"

const projectsData = [
	{
		id: 17,
		title: "Watch Design",
		// description: "Project 1 description",
		image: "/images/projects/k10.png",
		// video: "/images/projects/v1.mp4",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 16,
		title: "Shoe Design",
		// description: "Project 1 description",
		image: "/images/projects/k12.png",
		// video: "/images/projects/v1.mp4",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 18,
		title: "Best Design",
		// description: "Project 1 description",
		image: "/images/projects/k2.png",
		// video: "/images/projects/v1.mp4",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 1,
		title: "Best Color Grading",
		// description: "Project 1 description",
		video: "/images/projects/v6.mp4",
		tag: ["All", "Video"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "Pre-Wedding Shoot",
		// description: "Project 1 description",
		video: "/images/projects/v1.mp4",
		tag: ["All", "Video"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 3,
		title: "Pre-Wedding Shoot",
		// description: "Project 1 description",
		video: "/images/projects/v7.mp4",
		tag: ["All", "Video"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 19,
		title: "Bottle Graphics",
		// description: "Project 5 description",
		image: "/images/projects/b3.jpg",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 20,
		title: "Bottel Design",
		// description: "Project 5 description",
		image: "/images/projects/b4.jpg",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 21,
		title: "Cool One",
		// description: "Project 5 description",
		image: "/images/projects/b5.jpg",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},

	{
		id: 7,
		title: "Text Animative Effect",
		// description: "Project 1 description",
		video: "/images/projects/v3.mp4",
		tag: ["All", "Video"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 8,
		title: "Pre-Wedding Shoot",
		// description: "Project 1 description",
		video: "/images/projects/v1.mp4",
		tag: ["All", "Video"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 9,
		title: "Cinematic Fonts",
		// description: "Project 1 description",
		video: "/images/projects/v5.mp4",
		tag: ["All", "Video"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 10,
		title: "Design",
		// description: "Project 2 description",
		image: "/images/projects/m13.png",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 11,
		title: "Color Gradient",
		// description: "Project 3 description",
		image: "/images/projects/m3.png",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},

	{
		id: 12,
		title: "Cool Design",
		// description: "Authentication and CRUD operations",
		image: "/images/projects/k1.png",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 13,
		title: "Food Menu",
		// description: "Project 5 description",
		image: "/images/projects/k3.png",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},

	{
		id: 14,
		title: "Cinematic Edits",
		// description: "Project 1 description",
		video: "/images/projects/v2.mp4",
		tag: ["All", "Video"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 15,
		title: "Design",
		// description: "Project 5 description",
		image: "/images/projects/18.png",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 4,
		title: "Pre-Wedding Photoshoot",
		// description: "Project 1 description",
		image: "/images/projects/m8.png",
		// video: "/images/projects/v1.mp4",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 5,
		title: "Graphic Design Adobe Illustrator",
		// description: "Project 4 description",
		image: "/images/projects/m11.jpg",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 6,
		title: "Banner",
		// description: "Project 1 description",
		image: "/images/projects/m12.png",
		// video: "/images/projects/v1.mp4",
		tag: ["All", "Graphics"],
		gitUrl: "/",
		previewUrl: "/",
	},
]

const ProjectsSection = () => {
	const [tag, setTag] = useState("All")
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const handleTagChange = (newTag) => {
		setTag(newTag)
	}

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	)

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	}

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Video"
					isSelected={tag === "Video"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Graphics"
					isSelected={tag === "Graphics"}
				/>
			</div>
			<ul
				ref={ref}
				className="grid md:grid-cols-3 gap-8 md:gap-12"
			>
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							videourl={project.video}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	)
}

export default ProjectsSection
