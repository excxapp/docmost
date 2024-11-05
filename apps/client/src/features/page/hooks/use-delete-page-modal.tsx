import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";
import i18n from "@/lang/i18n";

type UseDeleteModalProps = {
  onConfirm: () => void;
};

export function useDeletePageModal() {
  const openDeleteModal = ({ onConfirm }: UseDeleteModalProps) => {
    modals.openConfirmModal({
      title: i18n.t("Are you sure you want to delete this page?"),
      children: (
        <Text size="sm">
          {i18n.t("Are you sure you want to delete this page?")} {i18n.t("This will delete its children and page history. This action is irreversible.")}
        </Text>
      ),
      centered: true,
      labels: { confirm: i18n.t("Delete"), cancel:i18n.t("Cancel") },
      confirmProps: { color: "red" },
      onConfirm,
    });
  };

  return { openDeleteModal } as const;
}
