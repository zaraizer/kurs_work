// Map.tsx
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

interface MapProps {
    center: google.maps.LatLngLiteral;
    zoom: number;
    markerPosition: google.maps.LatLngLiteral;
    markerIcon: { url: string };
    mapContainerStyle: React.CSSProperties
}

const Map: React.FC<MapProps> = ({ center, zoom, markerPosition, markerIcon, mapContainerStyle }) => {
    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
        >
            <Marker position={markerPosition} icon={markerIcon} />
        </GoogleMap>
    );
};

export default Map;
