import { Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const AllComment = () => {
  const [totalRatingNumber, setTotalRatingNumber] = useState(3);
  const [ratingNumber, setRatingNumber] = useState(2);
  const [totalComment, setTotalComment] = useState(23);

  return (
    <Stack width={"100%"} gap={3} overflow={"scroll"}>
      <Stack direction={"row"} gap={2}>
        <Typography color={"#1D3178"} fontSize={"18px"} fontWeight={800}>
          {"Нийт үнэлгээ:"}{" "}
        </Typography>
        <Stack direction={"row"}>
          <Rating value={totalRatingNumber} /> {`(${totalComment})`}
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        gap={3}
        px={3}
        py={4}
        bgcolor={"white"}
        borderRadius={"8px"}
      >
        <Stack
          width={"100%"}
          borderBottom={"1px #BFC6E0 dashed"}
          gap={4}
          paddingBottom={4}
        >
          <Rating value={ratingNumber} />
          <Stack gap={1}>
            <Typography fontSize={"18px"} fontWeight={800} color={"#1D3178"}>
              {"Name"}
            </Typography>
            <Typography color={"#9295AA"} fontWeight={400} fontSize={"17px"}>
              {"Материал нь ёстой гоё юм байна дахиж авна аа"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
// const Comment = () => {
//   return (
//     <Stack
//       width={"100%"}
//       borderBottom={"1px #BFC6E0 dashed"}
//       gap={4}
//       paddingBottom={4}
//     >
//       <Rating value={ratingNumber} />
//       <Stack gap={1}>
//         <Typography fontSize={"18px"} fontWeight={800} color={"#1D3178"}>
//           {"Name"}
//         </Typography>
//         <Typography color={"#9295AA"} fontWeight={400} fontSize={"17px"}>
//           {"Материал нь ёстой гоё юм байна дахиж авна аа"}
//         </Typography>
//       </Stack>
//     </Stack>
//   );
// };
