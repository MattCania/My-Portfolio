import { useEffect, useState } from "react";

export default function TestPage({ circleCount, circlePx, lerp, interval, color }) {
	const changeInterval = interval || 1000;
	const numCircles = circleCount || 250;
	const circleSize = circlePx || 2;
	const lerpFactor = lerp || 0.75;

	const [hue, setHue] = useState(180);

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

	const [positions, setPositions] = useState(
		Array.from({ length: numCircles }, () => ({
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		}))
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

				updatedPositions[0] = {
					x: updatedPositions[0].x + (mousePos.x - updatedPositions[0].x) * lerpFactor,
					y: updatedPositions[0].y + (mousePos.y - updatedPositions[0].y) * lerpFactor
				};

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
		<section className="flex justify-center items-center w-screen h-screen fixed z-[0]">
			{positions.map((pos, index) => {
				const scale = 1 - index * 0.01;

				let randomColor = "black";
				if (hue === 180) randomColor = "rgb(0, 150, 136)";
				else if (hue === 0) randomColor = "white";
				else if (hue === 255) randomColor = "rgb(24, 24, 27)";

				return (
					<div
						key={index}
						className="circle rounded-full absolute transition-all duration-500"
						style={{
							width: `${circleSize}px`,
							height: `${circleSize}px`,
							backgroundColor: color || randomColor,
							left: `${pos.x - circleSize / 6}px`,
							top: `${pos.y - circleSize / 2}px`,
							transform: `scale(${scale})`,
							position: "absolute",
							transition: "background-color 1s ease",
							opacity: "50%"
						}}
					/>
				);
			})}
		</section>
	);
}
