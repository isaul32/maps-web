import { FC } from "react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import { MapContext } from "react-map-gl/dist/esm/components/map";
import { Layer } from "deck.gl";

const INITIAL_VIEW_STATE = {
  longitude: 23.78712,
  latitude: 61.49911,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data = [
  {
    sourcePosition: [23.78712, 61.52],
    targetPosition: [23.78, 61.519],
  },
];

const Map: FC = () => {
  const controller = {
    // scrollZoom: {
    //   smooth: false,
    // },
    touchRotate: true,
    keyboard: false,
    inertia: true,
  };
  const layers: Layer<unknown>[] = [
    // new LineLayer({ id: "line-layer", data })
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={controller}
      layers={layers}
      ContextProvider={MapContext.Provider}
    >
      <StaticMap mapLib={maplibregl} mapStyle="style.json" />
    </DeckGL>
  );
};

export default Map;
