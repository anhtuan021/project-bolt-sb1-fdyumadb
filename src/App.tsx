import BookingPage from './pages/BookingPage';
import BookingInvoicePage from './pages/BookingInvoicePage';
import AIToolsPage from './pages/AIToolsPage';

                      <Route path="/photographer/:id" element={<PhotographerProfilePage />} />
                      <Route path="/booking" element={<BookingPage />} />
                      <Route path="/booking-invoice" element={<BookingInvoicePage />} />
                      <Route path="/ai-tools" element={<AIToolsPage />} />