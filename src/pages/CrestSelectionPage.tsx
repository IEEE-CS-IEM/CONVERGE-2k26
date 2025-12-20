import CrestSelectionDesktop from "@/components/desktop/CrestSelectionDesktop";
import CrestSelectionMobile from "@/components/mobile/crestSelectionMobile";
import { useIsMobile} from "@/hooks/use-mobile";

const CrestSelectionPage = () => {
  const isMobile = useIsMobile();

  return isMobile ? 
  <CrestSelectionMobile/> : <CrestSelectionDesktop/>;
};

export default CrestSelectionPage;
