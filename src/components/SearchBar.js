import React, { useState } from "react";
import { useSelector } from "react-redux";

import InputBase from "@mui/material/InputBase";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  input: {
    backgroundColor: "#eee5ff",
    width: "80vw",
    padding: "5px 20px",
    marginTop: "15px",
    marginLeft: "9vw",
    color: "#7f3dff",
    borderRadius: "5px",
  },
  img: {
    height: "50px",
  },
  a: {
    color: "grey",
    fontSize: "15px",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "120px",
  },
  h2: {
    fontSize: "20px",
    fontWeight: "600",
    marginLeft: "136px",
    marginBottom: "0px",
  },
  time: {
    color: "grey",
    position: "absolute",
    top: "20px",
    right: "285px",
    fontSize: "13.5px",
  },
  val: {
    position: "absolute",
    right: "300px",
    color: "green",
  },
});

const SearchBar = (props) => {
  const albums = useSelector((state) => state.albumData);
  const photos = useSelector((state) => state.photoData);
  const [searchItem, setSearchItem] = useState("");
  const [searchItems, setSearchItems] = useState("");
  const classes = useStyles();

  const inputChangeHandler = (event) => {
    setSearchItem(event.target.value);
    setSearchItems(searchItem.toLocaleLowerCase());
  };

  const items = albums.map((item) => {
    if (item.id < 6) {
      return (
        <div key={item.id}>
          <h3 className={classes.h2} key={item.id}>
            {item.title}
          </h3>
          {photos.map((photo) => {
            // if (photo.albumId === item.id) {
            if (photo.id < 11) {
              const randomNumber = Math.floor(Math.random() * 200) + 50;
              if (photo.title.includes(searchItems)) {
                return (
                  <ListItem className={classes.list} key={photo.id}>
                    <img className={classes.img} src={photo.url} alt="" />
                    <ListItem style={{ display: "block" }}>
                      <ListItemText primary={photo.title} />
                      <a className={classes.a} href={photo.url}>
                        {photo.thumbnailUrl}
                      </a>
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        className={classes.val}
                        style={{
                          color: randomNumber < 75 ? "red" : "green",
                        }}
                        primary={"$ " + randomNumber}
                      />
                      <span className={classes.time}>10.00 AM</span>
                    </ListItem>
                  </ListItem>
                );
              }
            }
            // }
            return console.log();
          })}
        </div>
      );
    }
    return null;
  });

  return (
    <div>
      <InputBase
        className={classes.input}
        placeholder="See your financial report"
        onChange={inputChangeHandler}
      />
      {items}
    </div>
  );
};

export default SearchBar;
