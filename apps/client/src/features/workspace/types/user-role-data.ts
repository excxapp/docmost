import { IRoleData, UserRole } from "@/lib/types.ts";
import i18n from "@/lang/i18n";
export const userRoleData: IRoleData[] = [
  {
    label: i18n.t("Owner"),
    value: UserRole.OWNER,
    description: i18n.t("Can manage workspace"),
  },
  {
    label: i18n.t("Admin"),
    value: UserRole.ADMIN,
    description: i18n.t("Can manage workspace but cannot delete it."),
  },
  {
    label: i18n.t("Member"),
    value: UserRole.MEMBER,
    description: i18n.t("Can become members of groups and spaces in workspace."),
  },
];

export function getUserRoleLabel(value: string) {
  const role = userRoleData.find((item) => item.value === value);
  return role ? role.label : undefined;
}
