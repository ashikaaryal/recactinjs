// // src/Components/Card.jsx

// import React from "react";

// const Card = (props) => {
//   return (
//     <div className="card">
//       <img
//         src="https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg" alt="Inception Poster" width="90%" className="card-img"
//       />
//       <div className="card-body">
//         <h2 className="card-title">{props.title}</h2>
//         <p className="card-subtitle">{props.date}</p>
//         <p className="card-description">
//          {props.des}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;



import React from 'react'

const Card = (props) => {
	return (
		<div className='movie-card'
			style={{
				maxWidth: 350,
				border: "1px solid #ddd",
				borderRadius: 16,
				boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
				overflow: "hidden",
				background: "#fff",
				margin: "2rem auto",
        width:"400px",
        
			}}
		>
			<img
				src={props.img}
				alt="The Godfather"
				style={{ width: "100%", height: "320px", objectFit: "cover" }}
			/>
			<div style={{ padding: "1.5rem" }}>
				<h2 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>
					{props.title}
				</h2>
				<p style={{ margin: "0.5rem 0", color: "#555" }}>
					<strong>Release Date:</strong> March 24, 1972
				</p>
				<p style={{ margin: "0.5rem 0", color: "#555" }}>
					<strong>Director:</strong> Francis Ford Coppola
				</p>
			</div>
		</div>
	);
};

export default Card;
