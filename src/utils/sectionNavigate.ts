import { useLocation, useNavigate } from 'react-router-dom';

export function useSectionNavigate() {
  const location = useLocation();
  const navigate = useNavigate();

  function goToSection(sectionId: string) {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  }

  function scrollToSection(sectionId: string) {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  return goToSection;
}
