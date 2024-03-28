import { CommentType } from "@/app/[productId]/page";
import { Rating, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type AllCommentProps = {
  comments: CommentType[];
  isCommentAdded: boolean;
};
export const AllComment = (props: AllCommentProps) => {
  const { comments, isCommentAdded } = props;
  const [totalRatingNumber, setTotalRatingNumber] = useState(0);
  const [ratingNumber, setRatingNumber] = useState(0);
  const [totalComment, setTotalComment] = useState(0);

  const ratingTotal = () => {
    setTotalRatingNumber(0);
    comments?.forEach((each) => {
      console.log(typeof each.rating);
      setTotalRatingNumber((prev) => (prev += each.rating));
    });
  };

  useEffect(() => {
    ratingTotal();
  }, []);
  return (
    <Stack width={"100%"} gap={3} overflow={"scroll"}>
      <Stack direction={"row"} gap={2}>
        <Typography color={"#1D3178"} fontSize={"18px"} fontWeight={800}>
          {"Нийт үнэлгээ:"}{" "}
        </Typography>
        <Stack direction={"row"}>
          <Rating value={Math.floor(totalRatingNumber / comments.length)} />{" "}
          {`(${comments.length})`}
        </Stack>
      </Stack>
      {comments?.map((item) => {
        return (
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
              <Rating value={item.rating} />
              <Stack gap={1}>
                <Typography
                  fontSize={"18px"}
                  fontWeight={800}
                  color={"#1D3178"}
                >
                  {item.userName}
                </Typography>
                <Typography
                  color={"#9295AA"}
                  fontWeight={400}
                  fontSize={"17px"}
                >
                  {item.comment}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
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
