import { useEffect, useState } from "react";

export default function TestPage({ circleCount, circlePx, lerp, isBlack, interval }) {
	const color = isBlack || false;
	const changeInterval = interval || 1000;
	const numCircles = circleCount || 250;
	const circleSize = circlePx || 2;
	const lerpFactor = lerp || 0.75;

	// State for cycling colors smoothly
	const [hue, setHue] = useState(180); // Start from teal

	// Update hue every second (cycle through teal -> white -> black -> teal)
	useEffect(() => {
		const colorInterval = setInterval(() => {
			setHue((prevHue) => {
				if (prevHue === 180) return 0; // Teal -> White
				if (prevHue === 0) return 255; // White -> Black
				return 180; // Black -> Teal
			});
		}, changeInterval);

		return () => clearInterval(colorInterval);
	}, [changeInterval]);

	// Initial positions (center of screen)
	const [positions, setPositions] = useState(
		new Array(numCircles).fill({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
	);
	const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePos({
				x: event.clientX,
				y: event.clientY
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	useEffect(() => {
		let animationFrame;

		const updatePositions = () => {
			setPositions((prevPositions) => {
				const updatedPositions = [...prevPositions];

				// First circle moves toward the mouse
				updatedPositions[0] = {
					x: updatedPositions[0].x + (mousePos.x - updatedPositions[0].x) * lerpFactor,
					y: updatedPositions[0].y + (mousePos.y - updatedPositions[0].y) * lerpFactor
				};

				// Make each circle follow the one before it
				for (let i = 1; i < updatedPositions.length; i++) {
					updatedPositions[i] = {
						x: updatedPositions[i].x + (updatedPositions[i - 1].x - updatedPositions[i].x) * lerpFactor,
						y: updatedPositions[i].y + (updatedPositions[i - 1].y - updatedPositions[i].y) * lerpFactor
					};
				}

				return updatedPositions;
			});

			animationFrame = requestAnimationFrame(updatePositions);
		};

		animationFrame = requestAnimationFrame(updatePositions);
		return () => cancelAnimationFrame(animationFrame);
	}, [mousePos]);

	return (
		<section className="w-full h-full fixed z-0">
			{positions.map((pos, index) => {
				const scale = 1 - index * 0.01; // Optional: smaller circles trail behind

				// Define background color based on the hue state
				let backgroundColor = "black"; // Default
				if (hue === 180) backgroundColor = "rgb(0, 150, 136)"; // Teal
				else if (hue === 0) backgroundColor = "white"; // White
				else if (hue === 255) backgroundColor = "rgb(24, 24, 27)"; // Zinc-950 (#18181b)

				return (
					<div
						key={index}
						className="circle rounded-full absolute"
						style={{
							width: `${circleSize}px`,
							height: `${circleSize}px`,
							backgroundColor, // Apply background color based on hue
							transform: `translate(${pos.x - circleSize / 2}px, ${pos.y - circleSize / 2}px) scale(${scale})`,
							transition: "background-color 1s ease", // Smooth transition
							opacity: "50%"
						}}
					/>
				);
			})}
		</section>
	);
}
