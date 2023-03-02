export default function GroupLayout({ children }) {
	return (
		<div>
			<marquee style={{ background: "#FFF", color: "orange" }}>
				Banner para probar layout compartidos
			</marquee>
			{children}
		</div>
	);
}
