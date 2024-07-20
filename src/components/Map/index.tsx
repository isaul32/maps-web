import { FC } from "react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";
import DeckGL from "@deck.gl/react";
import { MapContext } from "react-map-gl/dist/esm/components/map";

const INITIAL_VIEW_STATE = {
  longitude: 23.78712,
  latitude: 61.49911,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};
const Map: FC = () => {
  const controller = {
    // scrollZoom: {
    //   smooth: false,
    // },
    touchRotate: true,
    keyboard: false,
    inertia: true,
  };

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={controller}
      ContextProvider={MapContext.Provider}
    >
      <StaticMap mapLib={maplibregl} mapStyle="style.json" />
    </DeckGL>
  );
};

export default Map;
