import { Navigation } from "@/src/views/common/components/nav";
import "../../global.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Navigation>
        {children}
    </Navigation>
  );
}
