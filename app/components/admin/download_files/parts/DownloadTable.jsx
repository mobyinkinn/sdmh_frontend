import DownloadRow from "./DownloadRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useDownloadContext } from "./DownloadContext";

const downloadData = [
  {
    id: 0,
    name: "IEC Research Protocol",
    image: departmentImg,
    type: "Teaching Schedule",
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    name: "IEC Research Protocol",
    image: departmentImg,
    type: "Teaching Schedule",
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 2,
    name: "IEC Research Protocol",
    image: departmentImg,
    type: "Download",
    status: "inactive",
    created: "02/24/2022",
  },
];

function DownloadTable() {
  const { filter } = useDownloadContext();
  let filteredDownload = downloadData;
  if (filter !== "All") {
    filteredDownload = downloadData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!downloadData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="3fr 2fr 2fr 2fr 2fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Type</div>
          <div>Status</div>
          <div>created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredDownload}
          render={(department) => (
            <DownloadRow key={department.id} department={department} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={downloadData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default DownloadTable;