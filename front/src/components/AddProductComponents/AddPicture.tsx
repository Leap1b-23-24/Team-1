"use client";
import { Add } from "@mui/icons-material";
import { Stack, TextField, Typography, useForkRef } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { ProductPicture } from "./EachProductPicture";
import { toast } from "react-toastify";
import { url } from "inspector";

type AddPictureProps = {
  setLink: Dispatch<SetStateAction<string[]>>;
  links: string[];
};
type ImageUploadTypes = {
  file: ChangeEvent<HTMLInputElement>;
  index: number;
};
export const AddPicture = (props: AddPictureProps) => {
  const { setLink, links } = props;

  const isLinkEmpty = (e: ChangeEvent<HTMLInputElement>) => {
    let counter = 0;
    let indicator = 0;
    while (counter < links.length && indicator === 0) {
      if (links[counter] === "") {
        indicator++;
      }
      counter++;
    }
    indicator !== 0
      ? handleImageUpload({ file: e, index: counter - 1 })
      : toast.warning("Таны зураг дүүрэн байна");
  };

  const handleImageUpload = async ({ file, index }: ImageUploadTypes) => {
    if (file.target.files) {
      try {
        const formData = new FormData();
        formData.append("file", file.target.files[0]);

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/drwacb3lb/upload?upload_preset=up6cstnd",
          { method: "POST", body: formData }
        );

        const data = await response.json();

        const url: string = data.secure_url;
        const array = links;

        array[index] = url;

        console.log(array);

        setLink(array);
      } catch (error) {}
    }
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
          return <ProductPicture key={index} link={each} updateKey={index} />;
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
              onChange={isLinkEmpty}
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
