import LinearProgress from "@mui/joy/LinearProgress";
import { defaultTheme } from "../../styles/themes/default";

export function Progress() {
  return (
    <LinearProgress
      size="sm"
      variant="soft"
      style={{ color: defaultTheme.PURPLE }}
    />
  );
}
