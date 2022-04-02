import { FC } from "react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { MapContext } from "react-map-gl/dist/esm/components/map";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

const MapView: FC = () => {
  const layers = [new LineLayer({ id: "line-layer", data })];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      ContextProvider={MapContext.Provider}
    >
      <StaticMap
        mapLib={maplibregl}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      />
    </DeckGL>
  );
};

export default MapView;
