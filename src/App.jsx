import HansaHomePage from "./pages/HansaHomePage.jsx";
import HansaFounderPage from "./pages/HansaFounderPage.jsx";
import HansaFounderBlogPage from "./pages/HansaFounderBlogPage.jsx";
import HansaFounderTechnologyAiArticlePage from "./pages/HansaFounderTechnologyAiArticlePage.jsx";
import HansaFounderHumanPressureArticlePage from "./pages/HansaFounderHumanPressureArticlePage.jsx";
import HansaCurrentOpeningsPage from "./pages/HansaCurrentOpeningsPage.jsx";
import HansaForEmployersPage from "./pages/HansaForEmployersPage.jsx";
import HansaPrivacyPolicyPage from "./pages/HansaPrivacyPolicyPage.jsx";
import HansaCandidateTermsPage from "./pages/HansaCandidateTermsPage.jsx";
import HansaWebsiteTermsPage from "./pages/HansaWebsiteTermsPage.jsx";
import HansaContactPage from "./pages/HansaContactPage.jsx";

import HansaScrollTopButton from "./components/ui/HansaScrollTopButton.jsx";
import ScrollToHash from "./components/utils/ScrollToHash.jsx";

import "./styles/hansa-careers.css";

function App() {
  const path = window.location.pathname;

  let page = <HansaHomePage />;

  if (path === "/meet-the-founder") {
    page = <HansaFounderPage />;
  }

  if (path === "/founders-perspective") {
    page = <HansaFounderBlogPage />;
  }

  if (path === "/founders-perspective/will-ai-replace-people") {
    page = <HansaFounderTechnologyAiArticlePage />;
  }

  if (path === "/founders-perspective/staying-human-pressure") {
    page = <HansaFounderHumanPressureArticlePage />;
  }

  if (path === "/current-openings") {
    page = <HansaCurrentOpeningsPage />;
  }

  if (path === "/for-employers") {
    page = <HansaForEmployersPage />;
  }

  if (path === "/privacy-policy") {
    page = <HansaPrivacyPolicyPage />;
  }

  if (path === "/candidate-terms") {
    page = <HansaCandidateTermsPage />;
  }

  if (path === "/terms-and-conditions") {
    page = <HansaWebsiteTermsPage />;
  }

  if (path === "/contact") {
    page = <HansaContactPage />;
  }

  return (
    <>
      <ScrollToHash />
      {page}
      <HansaScrollTopButton />
    </>
  );
}

export default App;