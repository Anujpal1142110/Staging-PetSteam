// src/App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

// site-wide layout
import Layout from "./components/layout/Layout";

// your public pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

// product detail pages
import InjectionMolding      from "./pages/products/InjectionMolding";
import BeverageFilling       from "./pages/products/BeverageFilling";
import PetPreformMold        from "./pages/products/PetPreformMold";
import LabEquipment          from "./pages/products/LabEquipment";
import DryingSystem          from "./pages/products/DryingSystem";
import CapsMold              from "./pages/products/CapsMold";
import PackagingMold         from "./pages/products/PackagingMold";
import Colorants             from "./pages/products/Colorants";
import PetLinePage           from "./pages/products/PetLinePage";
import ElionPage             from "./pages/products/ElionPage";
import ElionMedicalPage      from "./pages/products/ElionMedicalPage";
import EliosPage             from "./pages/products/EliosPage";
import Combiblock            from "./pages/products/Combiblock";
import BlowingSystem         from "./pages/products/BlowingSystem";
import FillingSystem         from "./pages/products/FillingSystem";
import SecondaryPackagingSystem from "./pages/products/SecondaryPackagingSystem";
import IntelligentLogistics  from "./pages/products/IntelligentLogistics";
import PretreatmentSystem    from "./pages/products/PretreatmentSystem";

// “About” and partner pages
import AboutUsPage           from "./pages/about/AboutUsPage";
import HowWeWorkPage         from "./pages/about/HowWeWorkPage";
import CustomersPage         from "./pages/CustomersPage";
import GdxlPage              from "./pages/about/AboutPartners/GdxlPage";
import NetstalPage           from "./pages/about/AboutPartners/NetstalPage";
import ZonwonPage            from "./pages/about/AboutPartners/ZonwonPage";
import NewamstarPage         from "./pages/about/AboutPartners/NewamstarPage";
import CorvagliaPage         from "./pages/about/AboutPartners/CorvagliaPage";
import GlaroformPage         from "./pages/about/AboutPartners/GlaroformPage";
import EisbarPage            from "./pages/about/AboutPartners/EisbarPage";
import ColorwayPage          from "./pages/about/AboutPartners/ColorwayPage";

// services
import AnnualMaintenance     from "./pages/services/AnnualMaintenance";
import AppSupport            from "./pages/services/AppSupport";
import BreakdownSupport      from "./pages/services/BreakdownSupport";
import CompleteMachine       from "./pages/services/CompleteMachine";
import MachineRelocation     from "./pages/services/MachineRelocation";
import ProjectDesign         from "./pages/services/ProjectDesign";
import SpareParts            from "./pages/services/SpareParts";
import Training              from "./pages/services/Training";

// newsroom
import CompanyUpdate         from "./pages/newsroom/CompanyUpdate";
import ProductUpdate         from "./pages/newsroom/ProductUpdate";
import RecentProjects        from "./pages/newsroom/RecentProjects";
import TrainingUpdate        from "./pages/newsroom/TrainingUpdate";
import IndustryInformationExchange from "./pages/newsroom/IndustryInformationExchange";

// admin-panel pieces
import { AuthProvider }      from "./components/adminpanel/components/AuthContext";
import Login                 from "./components/adminpanel/components/Login";
import AdminPanel            from "./components/adminpanel/components/AdminPanel";
import ProtectedRoute        from "./components/adminpanel/components/ProtectedRoute";

function App() {
  return (
    <Layout>
      <Routes>

        {/** ─── Admin Panel ─── */}

        {/* 1) Public login page */}
        <Route
          path="/adminpanel/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />

        {/* 2) All other /adminpanel/* routes are guarded */}
        <Route
          path="/adminpanel/*"
          element={
            <AuthProvider>
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            </AuthProvider>
          }
        />


        {/** ─── Public Site ─── */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/us" element={<AboutPage />} />
        <Route path="/about/customers" element={<CustomersPage />} />
        <Route path="/about/how-we-work" element={<HowWeWorkPage />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/maintenance" element={<AnnualMaintenance />} />
        <Route path="/services/application" element={<AppSupport />} />
        <Route path="/services/breakdown" element={<BreakdownSupport />} />
        <Route path="/services/project-design" element={<ProjectDesign />} />
        <Route path="/services/relocation" element={<MachineRelocation />} />
        <Route path="/services/refurbishment" element={<CompleteMachine />} />
        <Route path="/services/parts" element={<SpareParts />} />
        <Route path="/services/training" element={<Training />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/injection-molding" element={<InjectionMolding />} />
        <Route path="/products/beverage-filling" element={<BeverageFilling />} />
        <Route path="/products/pet-preform" element={<PetPreformMold />} />
        <Route path="/products/lab-equipment" element={<LabEquipment />} />
        <Route path="/products/drying-system" element={<DryingSystem />} />
        <Route path="/products/caps-mold" element={<CapsMold />} />
        <Route path="/products/packaging-mold" element={<PackagingMold />} />
        <Route path="/products/colorants" element={<Colorants />} />

        {/* new product pages */}
        <Route path="/products/pet-line" element={<PetLinePage />} />
        <Route path="/products/elion" element={<ElionPage />} />
        <Route path="/products/elion-medical" element={<ElionMedicalPage />} />
        <Route path="/products/elios" element={<EliosPage />} />
        <Route path="/products/combiblock" element={<Combiblock />} />
        <Route path="/products/blowing-system" element={<BlowingSystem />} />
        <Route path="/products/filling-system" element={<FillingSystem />} />
        <Route path="/products/secondary-packaging-system" element={<SecondaryPackagingSystem />} />
        <Route path="/products/intelligent-logistics" element={<IntelligentLogistics />} />
        <Route path="/products/pretreatment-system" element={<PretreatmentSystem />} />

        {/** About partners (legacy) */}
        <Route path="/about/partners/gdxl" element={<GdxlPage />} />
        <Route path="/about/partners/netstal" element={<NetstalPage />} />
        <Route path="/about/partners/zonwon" element={<ZonwonPage />} />
        <Route path="/about/partners/newamstar" element={<NewamstarPage />} />
        <Route path="/about/partners/corvaglia" element={<CorvagliaPage />} />
        <Route path="/about/partners/glaroform" element={<GlaroformPage />} />
        <Route path="/about/partners/eisbar" element={<EisbarPage />} />
        <Route path="/about/partners/colorway" element={<ColorwayPage />} />

        {/** Newsroom */}
        <Route path="/newsroom/products" element={<ProductUpdate />} />
        <Route path="/newsroom/company" element={<CompanyUpdate />} />
        <Route path="/newsroom/training" element={<TrainingUpdate />} />
        <Route path="/newsroom/projects" element={<RecentProjects />} />
        <Route path="/newsroom/industry" element={<IndustryInformationExchange />} />

        {/* optional 404:
        <Route path="*" element={<NotFoundPage />} />
        */}
      </Routes>
    </Layout>
  );
}

export default App;
