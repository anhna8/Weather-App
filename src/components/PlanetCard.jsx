const PlanetCard = ({ name, temperature, Atmoshphere }) => {
    return (
       <div style={{
        backgroundColor: "#1c1c1c",
        border: "1px solid #333",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem"
       }}> 
       <h2>{name}</h2>
       <p><strong>Temperature:</strong></p>
       <p><strong>Atmosphere:</strong></p>
       </div>
    );
};

export default PlanetCard;