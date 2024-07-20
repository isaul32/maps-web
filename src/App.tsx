import {
  Map,
  useControl,
  FullscreenControl,
  GeolocateControl,
  ScaleControl,
  NavigationControl,
} from "react-map-gl/maplibre";
import { MapboxOverlay, MapboxOverlayProps } from "@deck.gl/mapbox";
import { type Layer } from "@deck.gl/core";
import "maplibre-gl/dist/maplibre-gl.css";

function DeckGLOverlay(props: MapboxOverlayProps) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

function App() {
  const layers: Layer[] = [];

  return (
    <Map
      initialViewState={{
        longitude: 23.76712,
        latitude: 61.49911,
        zoom: 12,
      }}
      antialias={true}
      hash={true}
      style={{ position: "absolute" }}
      mapStyle="style.json"
    >
      <DeckGLOverlay layers={layers} interleaved />
      <FullscreenControl />
      <ScaleControl />
      <NavigationControl position="bottom-right" showCompass={false} />
      <GeolocateControl
        position="bottom-right"
        positionOptions={{
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }}
      />
      <NavigationControl position="bottom-right" showZoom={false} />
    </Map>
  );
}

export default App;
