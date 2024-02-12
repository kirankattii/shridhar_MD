"use client"
import React, { useTransition, useState } from "react"
import Image from "next/image"
import TabButton from "./TabButton"

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Photoshop</li>
				<li>Premiere Pro</li>
				<li>LightRoom</li>
				<li>CapCut</li>
				<li>Canva</li>
				<li>AI Tools</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Bsc In Computer Science</li>
				<li>Karnataka University Dharwad</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>Graphic Design</li>
				<li>Video Editing</li>
				<li>AI Tools</li>
			</ul>
		),
	},
]

const AboutSection = () => {
	const [tab, setTab] = useState("skills")
	const [isPending, startTransition] = useTransition()

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id)
		})
	}

	return (
		<section
			className="text-white"
			id="about"
		>
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					className="rounded-b-md"
					src="/images/dsd4.png"
					width={500}
					height={500}
					// alt="hi"
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						Hello, Im a professional designer and video editor with a passion
						for creating interactive and unique designs. I have extensive
						experience specializing in video editing tools such as Premiere Pro,
						Photoshop, and DaVinci Resolve. Additionally, I excel in graphic
						design using platforms like Canva, AI-based tools, CapCut, and
						various others. With a diverse skill set, I am adept at producing
						compelling and visually stunning content. As a team player, I am
						enthusiastic about collaborating with others to create amazing
						projects.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							{" "}
							Skills{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							{" "}
							Education{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							{" "}
							Certifications{" "}
						</TabButton>
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
