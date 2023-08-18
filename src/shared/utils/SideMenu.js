import {
  TeamOutlined,
  SmileOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

import {
  ALL_EVENTS,
  HOST_EVENTS,
  PARTICIPATED,
} from "../../shared/constant/pageRoutes";

export const SideMenu = {
  HOST_EVENTS: {
    key: "host",
    icon: <SmileOutlined />,
    route: HOST_EVENTS,
    name: "Host Event",
  },
  ALL_EVENTS: {
    key: "all",
    icon: <TeamOutlined />,
    route: ALL_EVENTS,
    name: "All Events",
  },
  PARTICIPATED: {
    key: "participated",
    icon: <MoneyCollectOutlined />,
    route: PARTICIPATED,
    name: "Participated",
  },
};
