import { TextField } from "@mui/material";
import { useState } from "react";

const Search = () => {
  const [text, setText] = useState<string>("");
  return (
    <TextField
      value={text}
      onChange={(e) => setText(e.target.value as string)}
      placeholder="Search"
      size="small"
    />
  );
};

export default Search;
