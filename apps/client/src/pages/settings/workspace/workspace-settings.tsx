import SettingsTitle from "@/components/settings/settings-title.tsx";
import WorkspaceNameForm from "@/features/workspace/components/settings/components/workspace-name-form";
import {getAppName} from "@/lib/config.ts";
import {Helmet} from "react-helmet-async";
import { useTranslation } from "react-i18next";
export default function WorkspaceSettings() {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t("Workspace")}  {t("Settings")} - {getAppName()}</title>
            </Helmet>
            <SettingsTitle title={t("General")}/>
            <WorkspaceNameForm/>
        </>
    );
}
