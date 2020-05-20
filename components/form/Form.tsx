import React, { useState, ChangeEvent } from "react";
import { FormProps } from "../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));
const Form: React.FC<FormProps> = (props) => {
  const classes = useStyles();
  const [textTitle, setTextTitle] = useState<string>();
  const [textBody, setTextBody] = useState<string>();
  const changeHandlerTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTextTitle(event.target.value);
  };
  const changeHandlerBody = (event: ChangeEvent<HTMLInputElement>) => {
    setTextBody(event.target.value);
  };
  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(textTitle!, textBody!);
      setTextTitle("");
      setTextBody("");
      alert("Post Submitted!")
    }
  };

  return (
    <>
      <div className="">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onKeyPress={keyPress}
          // submit={onSubmit}
        >
          <div>
            <TextField
              className="formDiv"
              label="Title"
              onChange={changeHandlerTitle}
              value={textTitle}
              id="outlined-size-normal"
              defaultValue=""
              variant="filled"
              color="secondary"
              autoFocus
            />
          </div>
          <div>
            <TextField
              className="formDiv"
              label="Message"
              onChange={changeHandlerBody}
              value={textBody}
              id="outlined-size-normal"
              defaultValue=""
              variant="filled"
              color="secondary"
              autoFocus
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
