import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import {
  useCreateBanner,
  useBanner,
  useUpdateBanner,
} from "../../admin/banner/parts/useBanner";
import { Stack } from "@mui/material";
import {
  useDepartment,
  useUpdateDepartment,
  useUpdateImage,
  useBannerImage,
} from "../../admin/departments/parts/useDepartment";
import { useState } from "react";

function EditDepartmentForm({ onCloseModal, id }) {
  const { data, isLoading } = useDepartment();
  const filteredData = data.data.filter((el) => el._id === id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });

  const [name, setName] = useState(filteredData[0].name);
  const [content, setContent] = useState(filteredData[0].content);

  const { isUpdating, updateDepartment } = useUpdateDepartment();
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const { updateBanner, isUpdatingBanner } = useBannerImage();

  const { errors } = formState;

  // const { isUpdating, updateBannerImage } = useUpdateBanner();

  function onUpdateDepartment(name, content, id) {
    const formdata = { name, content };
    updateDepartment({ formdata, id });
  }

  function onUpdateImage(files, id) {
    const file = typeof files === "string" ? files : files[0];
    const formdata = new FormData();
    formdata.append("image", file);
    updateImage({ id, formdata });
  }

  function onUpdateBanner(files, id) {
    const file = typeof files === "string" ? files : files[0];
    const formdata = new FormData();
    formdata.append("banner", file);
    updateBanner({ id, formdata });
  }

  function onError(errors) {}
  return (
    <Form
      // onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name" error={errors?.page?.message}>
        <Input
          // disabled={isUpdating}
          type="text"
          id="name"
          value={name}
          {...register("name", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newName = e.target.value;
            setName(newName);
            onUpdateDepartment(newName, content, id);
          }}
        />
      </FormRow>

      <FormRow label="Content" error={errors?.page?.message}>
        <Input
          // disabled={isUpdating}
          type="text"
          id="content"
          value={content}
          {...register("content", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newContent = e.target.value;
            setContent(newContent);
            onUpdateDepartment(name, newContent, id);
          }}
        />
      </FormRow>

      <FormRow label={"Image"}>
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("Image", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const updatedValue = e.target.files;
            onUpdateImage(updatedValue, id);
          }}
        />
      </FormRow>

      <FormRow label={"Banner Image"}>
        <FileInput
          id="bannerImage"
          accept="image/*"
          type="file"
          {...register("bannerImage", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const updatedValue = e.target.files;
            onUpdateBanner(updatedValue, id);
          }}
        />
      </FormRow>

      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
          gap: "20px",
        }}
      >
        <Button>{"Done"}</Button>
      </Stack>
    </Form>
  );
}

export default EditDepartmentForm;