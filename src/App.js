import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AdminLayout from "./components/layout/AdminLayout";

// Main Website Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import CustomersPage from "./pages/CustomersPage";

// About Pages
import AboutUsPage from "./pages/about/AboutUsPage";
import HowWeWorkPage from "./pages/about/HowWeWorkPage";

// Product Pages
import InjectionMolding from "./pages/products/InjectionMolding";
import BeverageFilling from "./pages/products/BeverageFilling";
import PetPreformMold from "./pages/products/PetPreformMold";
import LabEquipment from "./pages/products/LabEquipment";
import DryingSystem from "./pages/products/DryingSystem";
import CapsMold from "./pages/products/CapsMold";
import PackagingMold from "./pages/products/PackagingMold";
import Colorants from "./pages/products/Colorants";

// New Product Detail Pages
import PetLinePage from "./pages/products/PetLinePage";
import ElionPage from "./pages/products/ElionPage";
import ElionMedicalPage from "./pages/products/ElionMedicalPage";
import EliosPage from "./pages/products/EliosPage";
import Combiblock from "./pages/products/Combiblock";
import BlowingSystem from "./pages/products/BlowingSystem";
import FillingSystem from "./pages/products/FillingSystem";
import SecondaryPackagingSystem from "./pages/products/SecondaryPackagingSystem";
import IntelligentLogistics from "./pages/products/IntelligentLogistics";
import PretreatmentSystem from "./pages/products/PretreatmentSystem";

// Partner Pages (if you have dedicated partner pages, otherwise remove these imports)
import GdxlPage from "./pages/about/AboutPartners/GdxlPage";
import NetstalPage from "./pages/about/AboutPartners/NetstalPage";
import ZonwonPage from "./pages/about/AboutPartners/ZonwonPage";
import NewamstarPage from "./pages/about/AboutPartners/NewamstarPage";
import CorvagliaPage from "./pages/about/AboutPartners/CorvagliaPage";
import GlaroformPage from "./pages/about/AboutPartners/GlaroformPage";
import EisbarPage from "./pages/about/AboutPartners/EisbarPage";
import ColorwayPage from "./pages/about/AboutPartners/ColorwayPage";

// Service Pages
import AnnualMaintenance from "./pages/services/AnnualMaintenance";
import AppSupport from "./pages/services/AppSupport";
import BreakdownSupport from "./pages/services/BreakdownSupport";
import CompleteMachine from "./pages/services/CompleteMachine";
import MachineReloaction from "./pages/services/MachineRelocation";
import ProjectDesign from "./pages/services/ProjectDesign";
import SpareParts from "./pages/services/SpareParts";
import Training from "./pages/services/Training";

// Newsroom Pages
import CompanyUpdate from "./pages/newsroom/CompanyUpdate";
import ProductUpdate from "./pages/newsroom/ProductUpdate";
import RecentProjects from "./pages/newsroom/RecentProjects";
import TrainingUpdate from "./pages/newsroom/TrainingUpdate";
import IndustryInformationExchange from "./pages/newsroom/IndustryInformationExchange";

// Admin Panel Components
import { AuthProvider } from "./components/adminpanel/components/AuthContext";
import Login from "./components/adminpanel/components/Login";
import AdminDashboard from "./components/adminpanel/components/AdminDashboard";
import ProtectedRoute from "./components/adminpanel/components/ProtectedRoute";

// Uncomment when you create this page
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* ========================================
          ADMIN PANEL ROUTES - SEPARATE LAYOUT
          ======================================== */}
      
      {/* Admin Login Route */}
      <Route
        path="/adminpanel/login"
        element={
          <AuthProvider>
            <AdminLayout>
              <Login />
            </AdminLayout>
          </AuthProvider>
        }
      />

      {/* Admin Dashboard Route */}
      <Route
        path="/adminpanel/dashboard"
        element={
          <AuthProvider>
            <AdminLayout>
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            </AdminLayout>
          </AuthProvider>
        }
      />

      {/* Catch-all Admin Routes */}
      {/* <Route
        path="/adminpanel/*"
        element={
          <AuthProvider>
            <AdminLayout>
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            </AdminLayout>
          </AuthProvider>
        }
      /> */}

      {/* ========================================
          MAIN WEBSITE ROUTES - MAIN LAYOUT
          ======================================== */}
      
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              {/* ——— Main Pages ——— */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/us" element={<AboutPage />} />
              <Route path="/about/customers" element={<CustomersPage />} />
              <Route path="/about/how-we-work" element={<HowWeWorkPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* ——— About Our Partners ——— */}
              {/* Note: Your original routes mapped partners to product pages, keeping that mapping */}
              <Route path="/about/partners/gdxl" element={<PetPreformMold />} />
              <Route path="/about/partners/netstal" element={<InjectionMolding />} />
              <Route path="/about/partners/zonwon" element={<LabEquipment />} />
              <Route path="/about/partners/newamstar" element={<BeverageFilling />} />
              <Route path="/about/partners/corvaglia" element={<CorvagliaPage />} />
              <Route path="/about/partners/glaroform" element={<CapsMold />} />
              <Route path="/about/partners/eisbar" element={<DryingSystem />} />
              <Route path="/about/partners/colorway" element={<Colorants />} />
              
              {/* ——— Services ——— */}
              <Route path="/services/maintenance" element={<AnnualMaintenance />} />
              <Route path="/services/application" element={<AppSupport />} />
              <Route path="/services/breakdown" element={<BreakdownSupport />} />
              <Route path="/services/project-design" element={<ProjectDesign />} />
              <Route path="/services/relocation" element={<MachineReloaction />} />
              <Route path="/services/refurbishment" element={<CompleteMachine />} />
              <Route path="/services/parts" element={<SpareParts />} />
              <Route path="/services/training" element={<Training />} />

              {/* ——— Newsroom ——— */}
              <Route path="/newsroom/products" element={<ProductUpdate />} />
              <Route path="/newsroom/company" element={<CompanyUpdate />} />
              <Route path="/newsroom/training" element={<TrainingUpdate />} />
              <Route path="/newsroom/projects" element={<RecentProjects />} />
              <Route path="/newsroom/industry" element={<IndustryInformationExchange />} />

              {/* ——— Basic Product Routes ——— */}
              <Route path="/products/injection-molding" element={<InjectionMolding />} />
              <Route path="/products/beverage-filling" element={<BeverageFilling />} />
              <Route path="/products/pet-preform" element={<PetPreformMold />} />
              <Route path="/products/lab-equipment" element={<LabEquipment />} />
              <Route path="/products/drying-system" element={<DryingSystem />} />
              <Route path="/products/caps-mold" element={<CapsMold />} />
              <Route path="/products/packaging-mold" element={<PackagingMold />} />
              <Route path="/products/colorants" element={<Colorants />} />

              {/* ——— Detailed Product Pages ——— */}
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

              {/* ——— 404 Not Found (Uncomment when you create the page) ——— */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;