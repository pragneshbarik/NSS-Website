import React from "react";
import { Stack, Divider } from "@mui/material";
import Counter from "../../UI/counter";

export default function CounterSection() {
  const isPhone = false;
  return (
    <Stack
      direction={isPhone ? "column" : "row"}
      justifyContent={"space-around"}
      sx={{
        fontFamily: "Poppins",
        fontWeight: "100",
        fontSize: "4rem",
        bgcolor: "#E1F0EE",
        px: 30,
        py: 5,
      }}
      alignItems={"center"}
    >
      <Counter start={0} end={200} duration={2} title="Members" />
      <Divider orientation="vertical" variant="middle" flexItem />

      <Counter start={0} end={7} duration={2} title="Trips" />
      <Divider orientation="vertical" variant="middle" flexItem />

      <Counter start={0} end={10} duration={2} title="Activities" />
    </Stack>
  );
}