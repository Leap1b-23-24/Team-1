import { Add } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ProductPicture } from "./EachProductPicture";

type AddPictureProps = {
  setLink: Dispatch<SetStateAction<{ link: string }[]>>;
  links: { link: string }[];
};
export const AddPicture = (props: AddPictureProps) => {
  const { setLink, links } = props;

  const imageUploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
    } catch (error) {}
  };
  return (
    <Stack width={"100%"} gap={2}>
      <Typography fontSize={18} fontWeight={600}>
        Бүтээгдэхүүний зураг
      </Typography>
      <Stack
        width={"100%"}
        flexDirection={"row"}
        gap={1}
        sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
      >
        {links.map((each, index) => {
          return (
            <ProductPicture key={index} link={each.link} updateKey={index} />
          );
        })}

        <Stack
          width={"100%"}
          sx={{
            aspectRatio: "1/1",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            width={32}
            bgcolor={"#ECEDF0"}
            borderRadius={"50%"}
            position={"relative"}
            border={1}
            sx={{
              overflow: "hidden",
              aspectRatio: "1/1",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              type="file"
              variant="standard"
              fullWidth
              onChange={imageUploadHandler}
              inputProps={{
                style: {
                  alignSelf: "center",
                  padding: "0px 20px",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  zIndex: 10,
                  opacity: 0,
                },
              }}
              InputProps={{ disableUnderline: true }}
            />
            <Add sx={{ position: "absolute" }} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
