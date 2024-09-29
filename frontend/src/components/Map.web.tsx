import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type Shelter = {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  emoji: string;
};

const shelters: Shelter[] = [
  {
    id: 1,
    title: 'Shelter One',
    description: 'Sample description of Shelter One',
    latitude: 42.3611,
    longitude: -71.0579,
    emoji: '🏳️‍🌈',
  },
  {
    id: 2,
    title: 'Shelter Two',
    description: 'Sample description of Shelter Two',
    latitude: 42.3584,
    longitude: -71.065,
    emoji: '🏳️‍⚧️',
  },
];

const Map: React.FC = () => {
  return (
    <MapContainer
      center={[42.3601, -71.0589]}
      zoom={13}
      style={{ height: '562px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {shelters.map((shelter) => {
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="font-size: 24px;">${shelter.emoji}</div>`, // emoji as marker
        });

        return (
          <Marker
            key={shelter.id}
            position={[shelter.latitude, shelter.longitude]}
            icon={customIcon}
          >
            <Popup>
              {/*temp pop up with shelter info*/}
              {shelter.emoji} {shelter.title}: {shelter.description}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
