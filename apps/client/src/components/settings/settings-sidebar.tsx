import React, { useEffect, useState } from "react";
import { Group, Text, ScrollArea, ActionIcon, rem } from "@mantine/core";
import {
  IconUser,
  IconSettings,
  IconUsers,
  IconArrowLeft,
  IconUsersGroup,
  IconSpaces,
  IconBrush,
} from "@tabler/icons-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./settings.module.css";
import i18n from "@/lang/i18n";
interface DataItem {
  label: string;
  icon: React.ElementType;
  path: string;
}

interface DataGroup {
  heading: string;
  items: DataItem[];
}

const groupedData: DataGroup[] = [
  {
    heading: i18n.t("Account"),
    items: [
      { label: i18n.t("Profile"), icon: IconUser, path: "/settings/account/profile" },
      {
        label: i18n.t("Preferences"),
        icon: IconBrush,
        path: "/settings/account/preferences",
      },
    ],
  },
  {
    heading: i18n.t("Workspace"),
    items: [
      { label: i18n.t("General"), icon: IconSettings, path: "/settings/workspace" },
      {
        label: i18n.t("Members"),
        icon: IconUsers,
        path: "/settings/members",
      },
      { label: i18n.t("Groups"), icon: IconUsersGroup, path: "/settings/groups" },
      { label: i18n.t("Spaces"), icon: IconSpaces, path: "/settings/spaces" },
    ],
  },
];

export default function SettingsSidebar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const menuItems = groupedData.map((group) => (
    <div key={group.heading}>
      <Text c="dimmed" className={classes.linkHeader}>
        {group.heading}
      </Text>
      {group.items.map((item) => (
        <Link
          className={classes.link}
          data-active={active.startsWith(item.path) || undefined}
          key={item.label}
          to={item.path}
        >
          <item.icon className={classes.linkIcon} stroke={2} />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  ));

  return (
    <div className={classes.navbar}>
      <Group className={classes.title} justify="flex-start">
        <ActionIcon
          onClick={() => navigate(-1)}
          variant="transparent"
          c="gray"
          aria-label="Back"
        >
          <IconArrowLeft stroke={2} />
        </ActionIcon>
        <Text fw={500}>{i18n.t("Settings")}</Text>
      </Group>

      <ScrollArea w="100%">{menuItems}</ScrollArea>
      <div className={classes.version}>
        <Text
          className={classes.version}
          size="sm"
          c="dimmed"
          component="a"
          href="https://github.com/docmost/docmost/releases"
          target="_blank"
        >
          v{APP_VERSION}
        </Text>
      </div>
    </div>
  );
}
