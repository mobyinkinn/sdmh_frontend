import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { BannerProvider } from "./parts/BannerContext";
import BannerTable from "./parts/BannerTable";
import BannerTableOperations from "./parts/BannerTableOperations";

export default function Banner() {
  return (
    <BannerProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Banners</Heading>
          <BannerTableOperations />
        </Row>
        <BannerTable />
      </AppLayout>
    </BannerProvider>
  );
}
