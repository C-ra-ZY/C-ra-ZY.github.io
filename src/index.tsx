import React from "react";
import ReactDOM from "react-dom/client";
import { Box, Flex } from "rebass";

import { ReactStripMenu } from "react-strip-menu";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Flex
      sx={{
        height: "72px",
        width: "100%",
        display: "flex",
        top: 0,
        zIndex: 999,
        position: "fixed",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "5%",
        background: "gray",
        backdropFilter: "unset",
      }}
    >
      <ReactStripMenu
        dropdowns={[
          <Box sx={{ width: "100px", height: "100px", color: "red" }}>D</Box>,
          <Box sx={{ width: "200px", height: "200px", color: "red" }}>DDD</Box>,
          <Box sx={{ width: "300px", height: "300px", color: "red" }}>
            DDDDD
          </Box>,
        ]}
      >
        <Box textAlign={"center"} width="100px">
          A
        </Box>
        <Box textAlign={"center"} width="100px">
          B
        </Box>
        <Box textAlign={"center"} width="100px">
          C
        </Box>
      </ReactStripMenu>
    </Flex>
  </React.StrictMode>
);
