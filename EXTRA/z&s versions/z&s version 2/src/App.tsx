import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { SearchProvider } from "./contexts/SearchContext";
import { AdminProvider } from "./contexts/AdminContext";

import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import AddressSetup from "./pages/AddressSetup";
import PaymentOptions from "./pages/PaymentOptions";

// Product category pages
import LaptopSkins from "./pages/products/LaptopSkins";
import PhoneSkins from "./pages/products/PhoneSkins";
import TabletSkins from "./pages/products/TabletSkins";
import ChargerSkins from "./pages/products/ChargerSkins";
import TShirts from "./pages/products/TShirts";
import Jerseys from "./pages/products/Jerseys";
import StickerPacks from "./pages/products/StickerPacks";
import MysteryBox from "./pages/products/MysteryBox";
import CustomDesigns from "./pages/products/CustomDesigns";
import CreditCardSkins from "./pages/products/CreditCardSkins";
import MiniStickerSheets from "./pages/products/MiniStickerSheets";

// Hero carousel product pages
import TShirtDesign from "./pages/products/TShirtDesign";
import ProductLabel from "./pages/products/ProductLabel";
import IPhoneCase from "./pages/products/IPhoneCase";
import ShoppingBag from "./pages/products/ShoppingBag";
import CustomStickerPack from "./pages/products/CustomStickerPack";

// Info pages
import AboutUs from "./pages/info/AboutUs";
import ContactUs from "./pages/info/ContactUs";
import Blog from "./pages/info/Blog";
import TrackOrder from "./pages/info/TrackOrder";

// Policy pages
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsConditions from "./pages/policies/TermsConditions";
import ShippingPolicy from "./pages/policies/ShippingPolicy";
import RefundPolicy from "./pages/policies/RefundPolicy";

// Support pages
import FAQ from "./pages/support/FAQ";
import BulkCustomOrders from "./pages/support/BulkCustomOrders";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminAddProduct from "./pages/admin/AdminAddProduct";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation plays only once
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <WishlistProvider>
                <SearchProvider>
                  <AdminProvider>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/order-success" element={<OrderSuccess />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/search" element={<SearchResults />} />
                      <Route path="/address-setup" element={<AddressSetup />} />
                      <Route path="/payment-options" element={<PaymentOptions />} />

                      {/* Product category routes */}
                      <Route path="/skins/laptop" element={<LaptopSkins />} />
                      <Route path="/skins/phone" element={<PhoneSkins />} />
                      <Route path="/skins/tablet" element={<TabletSkins />} />
                      <Route path="/skins/charger" element={<ChargerSkins />} />
                      <Route path="/clothing/t-shirts" element={<TShirts />} />
                      <Route path="/clothing/jerseys" element={<Jerseys />} />
                      <Route path="/sticker-packs" element={<StickerPacks />} />
                      <Route path="/mystery-box" element={<MysteryBox />} />
                      <Route path="/custom-designs" element={<CustomDesigns />} />
                      <Route path="/credit-card-skins" element={<CreditCardSkins />} />
                      <Route path="/mini-sticker-sheets" element={<MiniStickerSheets />} />

                      {/* Hero carousel product routes */}
                      <Route path="/product/t-shirt-1" element={<TShirtDesign />} />
                      <Route path="/product/label-1" element={<ProductLabel />} />
                      <Route path="/product/phone-case-1" element={<IPhoneCase />} />
                      <Route path="/product/bag-1" element={<ShoppingBag />} />
                      <Route path="/product/sticker-pack-1" element={<CustomStickerPack />} />

                      {/* Info routes */}
                      <Route path="/about" element={<AboutUs />} />
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/track-order" element={<TrackOrder />} />

                      {/* Policy routes */}
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/terms-conditions" element={<TermsConditions />} />
                      <Route path="/shipping-policy" element={<ShippingPolicy />} />
                      <Route path="/refund-policy" element={<RefundPolicy />} />

                      {/* Support routes */}
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/bulk-orders" element={<BulkCustomOrders />} />

                      {/* Admin routes */}
                      <Route path="/admin" element={<AdminLogin />} />
                      <Route path="/admin/dashboard" element={<AdminDashboard />} />
                      <Route path="/admin/orders" element={<AdminOrders />} />
                      <Route path="/admin/add-product" element={<AdminAddProduct />} />

                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </AdminProvider>
                </SearchProvider>
              </WishlistProvider>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
