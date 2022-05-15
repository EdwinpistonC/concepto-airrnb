import { MessageBase, MessageDefaults, MessageProps } from "./messageBase";

//material component
import SearchIcon from "@mui/icons-material/Search";

const Message = ({ theme, name, customcolor }) => {
  return (
    <MessageBase customcolor={customcolor} theme={theme} variant="contained">
      <h1>{name}</h1>
    </MessageBase>
  );
};

Message.propTypes = MessageProps;

Message.defaultProps = MessageDefaults;

export default Message;

const SearchMessage = ({ theme, name, customcolor }) => {
  return (
    <MessageBase
      theme={theme}
      customcolor={customcolor}
      variant="contained"
      startIcon={<SearchIcon />}
    >
      {name}
    </MessageBase>
  );
};
SearchMessage.propTypes = MessageProps;

SearchMessage.defaultProps = MessageDefaults;

export { SearchMessage };
