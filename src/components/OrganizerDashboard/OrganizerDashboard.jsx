import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { gradient } from "../../shared/constant/FormConstatnt";
import DashboardRouter from "../../routes/DashboardRouter";
const { Content } = Layout;

const OrganizerDashboard = () => {
  return (
    <div className="w-screen h-screen">
      <Layout className="!h-full w-full overflow-hidden">
        <Content>
          {/* Header Section */}
          <Header
            style={{
              padding: 0,
              background: gradient,
            }}
          />
          <Layout>
            <Sidebar />
            <Content
              className={
                "py-[30px] px-[15px] md:py-[40px] md:px-[64px] min-h-[280px] overflow-y-scroll"
              }
            >
              <section className="max-h-[80vh] h-[80vh]">
                <DashboardRouter />
              </section>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
};

export default OrganizerDashboard;
