import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button";
import { ThemeButton } from "../Button/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
  };

  return (
    <Button className={classNames(cls.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>
      {t("Мова")}
    </Button>
  );
};
