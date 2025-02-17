import React from "react";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";

const EditDownloadablesForm = ({
  onCloseModal,
  resourceName,
  onConfirm,
  disabled,
  editData,
  setEditData,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setEditData({ ...editData, [fieldName]: file });
    }
  };

  const handleSubmit = (e) => {
    console.log("Form", editData);
    e.preventDefault();
    onConfirm(); // Call the onConfirm function to handle the submission logic
  };

  // name type file

  return (
    <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
      <Heading as="h3">Edit {resourceName}</Heading>

      <Stack gap={2} pt={5}>
        <FormRow label="Name">
          <Input
            disabled={disabled}
            type="text"
            name="name"
            value={editData.name || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Type">
          <Input
            disabled={disabled}
            type="text"
            name="type"
            value={editData.type || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label={"File"}>
          <FileInput
            name="file"
            accept="image/*"
            type="file"
            onChange={(e) => handleImageChange(e, "file")}
          />
        </FormRow>

        <FormRow>
          <Button
            variation="secondary"
            type="button" // Change type to button to prevent default form submission behavior
            onClick={onCloseModal}
            disabled={disabled}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={disabled}>
            Save Changes
          </Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default EditDownloadablesForm;
