import slugify from "@sindresorhus/slugify";
import i18n from "@/lang/i18n";
const buildPageSlug = (pageSlugId: string, pageTitle?: string): string => {
  const titleSlug = slugify(pageTitle?.substring(0, 70) || i18n.t("untitled"), {
    customReplacements: [
      ["♥", ""],
      ["🦄", ""],
    ],
  });

  return `p/${titleSlug}-${pageSlugId}`;
};

export const buildPageUrl = (
  spaceName: string,
  pageSlugId: string,
  pageTitle?: string,
): string => {
  if (spaceName === undefined) {
    return `/${buildPageSlug(pageSlugId, pageTitle)}`;
  }
  return `/s/${spaceName}/${buildPageSlug(pageSlugId, pageTitle)}`;
};
