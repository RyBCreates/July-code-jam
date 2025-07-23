import "./MapModal.css";

function MapModal({ isOpen, onClose, mapUrl }) {
  if (!isOpen) return null;

  return (
    <div className="map-modal__overlay" onClick={onClose}>
      <div className="map-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="map-modal__close" onClick={onClose}>
          ✕
        </button>
        <iframe
          src={mapUrl}
          title="Expanded Route Map"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default MapModal;
