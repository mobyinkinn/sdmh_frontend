import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

// import { formatCurrency } from "../../../utils/helpers";
// import { formatDistanceFromNow } from "../../../utils/helpers";
import Menus from "../../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiPencil,
  HiTrash,
} from "react-icons/hi2";
import {
  useBlockBlog,
  useDeleteBlog,
  useUnblockBlog,
  useUpdateBlog,
} from "../useBlogs";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { useState } from "react";
import { HiEyeOff } from "react-icons/hi";
import ConfirmEdit from "@/app/components/ui/EditModal";
// import { useNavigate } from "react-router-dom";
// import { useCheckout } from "../check-in-out/useCheckout";
// import useDeleteBooking from "./useDeleteBooking";

const Stacked = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 0.9rem;
  }
`;

function BlogRow({
  department: {
    _id,
    title,
    status,
    date,
    smallDescription,
    description,
    image,
  },
}) {
  const [fullDesc, showFullDesc] = useState(false);
  const [fullSDesc, showFullSDesc] = useState(false);
  const { mutate: deleteBlog, isLoading: isDeleting } = useDeleteBlog();
  const { mutate: blockBlog, isLoading: isBlocking } = useBlockBlog();
  const { mutate: unblockBlog, isLoading: isUnblocking } = useUnblockBlog();
  const { mutate: updateBlog, isLoading: isUpdating } = useUpdateBlog();
  const handleToggleStatus = () => {
    if (status) {
      blockBlog(_id); // Call block API if active
    } else {
      unblockBlog(_id); // Call unblock API if inactive
    }
  };

  const expandDesc = () => {
    showFullDesc((desc) => !desc);
  };

  const expandSDesc = () => {
    showFullSDesc((desc) => !desc);
  };
  const handleDelete = () => {
    deleteBlog(_id);
  };
const [editData, setEditData] = useState({
  title,
  smallDescription,
  description,
  image,
  date,
});

const handleConfirmEdit = () => {
  const formData = new FormData();
  formData.append("title", editData.title);
  formData.append("description", editData.description);
  formData.append("smallDescription", editData.smallDescription);
  if (editData.image instanceof File) {
    formData.append("image", editData.image);
  }

  updateBlog(
    {
      id: _id,
      data: formData,
    },
    {
      onSuccess: () => {
        toast.success("Blog updated successfully!");
        onCloseModal();
      },
      onError: (error) => {
        console.error("Failed to update Blog:", error);
        toast.error("Failed to update Blog. Please try again.");
      },
    }
  );
};

  return (
    <Table.Row alignItems="start">
      <Stacked>
        <span>{title}</span>
      </Stacked>

      <Stacked>
        <span>
          {fullSDesc ? smallDescription : smallDescription.slice(0, 10)}...
        </span>
        <span onClick={expandSDesc} style={{ cursor: "pointer" }}>
          {fullSDesc ? "Show less" : "Show more"}
        </span>
      </Stacked>

      <Stacked>
        <span>{fullDesc ? description : description.slice(0, 30)}...</span>
        <span onClick={expandDesc} style={{ cursor: "pointer" }}>
          {fullDesc ? "Show less" : "Show more"}
        </span>
      </Stacked>

      <Stacked>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            style={{ borderRadius: "8px" }}
          />
        ) : (
          <span>No Image</span>
        )}
      </Stacked>
      <Stacked>{date}</Stacked>

      <Tag type={status ? "green" : "silver"}>
        {status ? "Active" : "Inactive"}
      </Tag>
      <Modal>
        <Menus.Menu>
          <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            onClick={handleToggleStatus}
            disabled={isBlocking || isUnblocking}
          ></Menus.Button>
          <Modal.Open opens="edit">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="blog"
            disabled={isDeleting} // Disable button while deleting
            onConfirm={handleDelete} // Call the delete function on confirm
          />
        </Modal.Window>
        <Modal.Window name="edit">
          <ConfirmEdit
            resourceName="blog"
            editData={editData}
            setEditData={setEditData}
            onCloseModal={() => {}}
            onConfirm={handleConfirmEdit}
            disabled={false}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BlogRow;
