import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import InjectionMolding from './pages/products/InjectionMolding';
import BeverageFilling from './pages/products/BeverageFilling';
import PetPreformMold from './pages/products/PetPreformMold';
import LabEquipment from './pages/products/LabEquipment';
import DryingSystem from './pages/products/DryingSystem'; 
import CapsMold from './pages/products/CapsMold'; 
import PackagingMold from './pages/products/PackagingMold'; 
import Colorants from './pages/products/Colorants'; 
// New product detail pages
import PetLinePage from './pages/products/PetLinePage';
import ElionPage from './pages/products/ElionPage';
import ElionMedicalPage from './pages/products/ElionMedicalPage';
import EliosPage from './pages/products/EliosPage';

import Combiblock from './pages/products/Combiblock';
import BlowingSystem from './pages/products/BlowingSystem';
import FillingSystem from './pages/products/FillingSystem';
import SecondaryPackagingSystem from './pages/products/SecondaryPackagingSystem';
import IntelligentLogistics from './pages/products/IntelligentLogistics';
import PretreatmentSystem from './pages/products/PretreatmentSystem';
// import NotFoundPage from './pages/';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        <Route path="/products/injection-molding" element={<InjectionMolding />} />
        <Route path="/products/beverage-filling" element={<BeverageFilling />} />
        <Route path="/products/pet-preform" element={<PetPreformMold />} />  
        <Route path="/products/lab-equipment" element={<LabEquipment />} />  
        <Route path="/products/drying-system" element={<DryingSystem />} />  
        <Route path="/products/caps-mold" element={<CapsMold />} />  
        <Route path="/products/packaging-mold" element={<PackagingMold />} />  
        <Route path="/products/colorants" element={<Colorants />} />  
        
        {/* Adding only the 4 new product detail pages */}
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
      </Routes>
    </Layout>
  );
}

export default App;