import { MapBase, MapDefaults, MapProps } from "./mapBase";

//material component
import SearchIcon from "@mui/icons-material/Search";

const Map = ({ theme, name, customcolor }) => {
  return (
    <MapBase customcolor={customcolor} theme={theme} variant="contained">
      <h1>{name}</h1>
    </MapBase>
  );
};

Map.propTypes = MapProps;

Map.defaultProps = MapDefaults;

export default Map;

const SearchMap = ({ theme, name, customcolor }) => {
  return (
    <MapBase
      theme={theme}
      customcolor={customcolor}
      variant="contained"
      startIcon={<SearchIcon />}
    >
      {name}
    </MapBase>
  );
};
SearchMap.propTypes = MapProps;

SearchMap.defaultProps = MapDefaults;

export { SearchMap };
