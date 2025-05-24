import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the useAuth hook
import { 
  Settings, 
  User, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  X,
  Plus,
  Edit,
  Trash2,
  Eye,
  Package,
  Building,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Newspaper,
  Calendar,
  ChevronDown,
  Save,
  RefreshCw
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Get user data and logout function from context
  
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('products');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('create'); // create, edit, view
  const [selectedItem, setSelectedItem] = useState(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Sample data for each section
  const [data, setData] = useState({
    products: [
      { id: 1, title: 'PET Injection Molding Machine', category: 'Injection Molding', status: 'Active', createdAt: '2024-01-15' },
      { id: 2, title: 'Beverage Filling System', category: 'Filling Equipment', status: 'Active', createdAt: '2024-01-10' },
      { id: 3, title: 'PET Preform Mold', category: 'Molds', status: 'Draft', createdAt: '2024-01-05' }
    ],
    company: [
      { id: 1, title: 'Q4 2024 Financial Results', type: 'Financial', status: 'Published', publishDate: '2024-01-20' },
      { id: 2, title: 'New Partnership with Global Tech', type: 'Partnership', status: 'Draft', publishDate: '2024-01-18' },
      { id: 3, title: 'Expansion to Southeast Asia', type: 'Expansion', status: 'Published', publishDate: '2024-01-15' }
    ],
    training: [
      { id: 1, title: 'Advanced Injection Molding Techniques', duration: '3 days', participants: 25, status: 'Completed', date: '2024-01-22' },
      { id: 2, title: 'Safety Protocols Workshop', duration: '1 day', participants: 40, status: 'Ongoing', date: '2024-01-25' },
      { id: 3, title: 'Equipment Maintenance Training', duration: '2 days', participants: 15, status: 'Scheduled', date: '2024-02-01' }
    ],
    projects: [
      { id: 1, title: 'Coca-Cola Bottling Plant Setup', client: 'Coca-Cola India', status: 'In Progress', completionDate: '2024-03-15' },
      { id: 2, title: 'Nestle Production Line Upgrade', client: 'Nestle', status: 'Completed', completionDate: '2024-01-10' },
      { id: 3, title: 'Pepsi Packaging Automation', client: 'PepsiCo', status: 'Planning', completionDate: '2024-04-20' }
    ],
    industry: [
      { id: 1, title: 'Industry 4.0 in Manufacturing', category: 'Technology', views: 1250, publishDate: '2024-01-20' },
      { id: 2, title: 'Sustainable Packaging Trends', category: 'Sustainability', views: 980, publishDate: '2024-01-18' },
      { id: 3, title: 'Global Supply Chain Updates', category: 'Supply Chain', views: 750, publishDate: '2024-01-15' }
    ],
    news: [
      { id: 1, title: 'Company Wins Industry Excellence Award', category: 'Awards', status: 'Published', publishDate: '2024-01-22' },
      { id: 2, title: 'New Manufacturing Facility Inauguration', category: 'Company News', status: 'Draft', publishDate: '2024-01-20' },
      { id: 3, title: 'Partnership with European Suppliers', category: 'Business', status: 'Published', publishDate: '2024-01-18' }
    ],
    events: [
      { id: 1, title: 'International Packaging Expo 2024', location: 'Mumbai', attendees: 150, date: '2024-02-15' },
      { id: 2, title: 'Manufacturing Technology Summit', location: 'Delhi', attendees: 200, date: '2024-03-10' },
      { id: 3, title: 'Industry Networking Meet', location: 'Bangalore', attendees: 75, date: '2024-02-28' }
    ]
  });

  const sidebarItems = [
    { id: 'products', label: 'Products Update', icon: Package },
    { id: 'company', label: 'Company Update', icon: Building },
    { id: 'training', label: 'Training Update', icon: GraduationCap },
    { id: 'projects', label: 'Recent Projects', icon: Briefcase },
    { id: 'industry', label: 'Industry Information', icon: TrendingUp },
    { id: 'news', label: 'Latest News', icon: Newspaper },
    { id: 'events', label: 'Latest Events', icon: Calendar }
  ];

  // Handle logout functionality
  const handleLogout = () => {
    setShowLogoutConfirm(true);
    setShowProfileMenu(false);
  };

  const confirmLogout = () => {
    logout(); // Clear authentication state
    navigate('/adminpanel/login'); // Redirect to login
    setShowLogoutConfirm(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && !event.target.closest('.profile-menu-container')) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  const handleCreate = () => {
    setModalType('create');
    setSelectedItem(null);
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setModalType('edit');
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleView = (item) => {
    setModalType('view');
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setData(prev => ({
        ...prev,
        [activeSection]: prev[activeSection].filter(item => item.id !== id)
      }));
    }
  };

  const renderTable = () => {
    const currentData = data[activeSection] || [];
    
    const getTableHeaders = () => {
      switch (activeSection) {
        case 'products':
          return ['Title', 'Category', 'Status', 'Created Date', 'Actions'];
        case 'company':
          return ['Title', 'Type', 'Status', 'Publish Date', 'Actions'];
        case 'training':
          return ['Title', 'Duration', 'Participants', 'Status', 'Date', 'Actions'];
        case 'projects':
          return ['Title', 'Client', 'Status', 'Completion Date', 'Actions'];
        case 'industry':
          return ['Title', 'Category', 'Views', 'Publish Date', 'Actions'];
        case 'news':
          return ['Title', 'Category', 'Status', 'Publish Date', 'Actions'];
        case 'events':
          return ['Title', 'Location', 'Attendees', 'Date', 'Actions'];
        default:
          return ['Title', 'Status', 'Date', 'Actions'];
      }
    };

    const renderTableRow = (item) => {
      switch (activeSection) {
        case 'products':
          return (
            <>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.createdAt}</td>
            </>
          );
        case 'company':
          return (
            <>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.publishDate}</td>
            </>
          );
        case 'training':
          return (
            <>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.participants}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                  item.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
            </>
          );
        case 'projects':
          return (
            <>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.client}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                  item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.completionDate}</td>
            </>
          );
        case 'industry':
          return (
            <>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.views}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.publishDate}</td>
            </>
          );
        case 'news':
          return (
            <>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.publishDate}</td>
            </>
          );
        case 'events':
          return (
            <>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.attendees}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
            </>
          );
        default:
          return null;
      }
    };

    return (
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 capitalize">
            {activeSection.replace(/([A-Z])/g, ' $1').trim()} Management
          </h3>
          <button
            onClick={handleCreate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {getTableHeaders().map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  {renderTableRow(item)}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleView(item)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-green-600 hover:text-green-900 p-1 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {currentData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No items found. Click "Add New" to create one.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold text-gray-800 capitalize">
                {activeSection.replace(/([A-Z])/g, ' $1').trim()} Dashboard
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button className="p-2 text-gray-600 hover:text-gray-800 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </button>

              <div className="relative profile-menu-container">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user?.username || 'Admin User'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </button>
                    <hr className="my-1" />
                    <button 
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {renderTable()}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>© 2025 Industrial Solutions. All rights reserved.</p>
            <p>Admin Dashboard v1.0</p>
          </div>
        </footer>
      </div>

      {/* Modal for Create/Edit/View */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 capitalize">
                {modalType} {activeSection.slice(0, -1)}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter title..."
                    defaultValue={selectedItem?.title || ''}
                    disabled={modalType === 'view'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter description..."
                    disabled={modalType === 'view'}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={modalType === 'view'}
                    >
                      <option>Active</option>
                      <option>Draft</option>
                      <option>Published</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={modalType === 'view'}
                    />
                  </div>
                </div>
              </div>
            </div>

            {modalType !== 'view' && (
              <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {modalType === 'create' ? 'Create' : 'Update'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <LogOut className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Confirm Logout
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Are you sure you want to logout? You will be redirected to the login page.
                </p>
                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={cancelLogout}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;