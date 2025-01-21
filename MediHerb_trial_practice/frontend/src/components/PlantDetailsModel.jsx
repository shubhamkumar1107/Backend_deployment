import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const PlantDetailsModal = ({ plant, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{plant.name}</h2>
        <Canvas>
          <OrbitControls />
          <ambientLight />
          <directionalLight position={[10, 10, 5]} />
          <mesh>
            <primitive
              object={plant.details.model} // Placeholder; replace with GLTF loader later
            />
          </mesh>
        </Canvas>
        <p>{plant.description}</p>
        <div className="media-container">
          {plant.details.media.map((media, index) => (
            <div key={index}>
              {media.endsWith(".mp4") && (
                <video src={media} controls width="100%" />
              )}
              {media.endsWith(".mp3") && (
                <audio src={media} controls width="100%" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlantDetailsModal
