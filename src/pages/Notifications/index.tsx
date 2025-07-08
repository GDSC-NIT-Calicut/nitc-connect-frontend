import Sidebar from "./Sidebar";
import NotificationList from "./NotificationList";
import bgImage from "../../assets/Login-bg.jpg";
import { Search } from "lucide-react";

const NotificationsPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden font-sans text-white">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 z-10" />

      {/* Sidebar Divider going from top to bottom */}
      <div className="absolute top-0 bottom-0 left-80 w-px bg-white z-40" />

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-14  bg-green-900/20 border-b border-white flex items-center justify-end px-6 z-40">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent border-b border-gray-400 py-1 pl-8 pr-2 text-white placeholder-gray-300 outline-none"
          />
          <Search className="w-4 h-4 absolute left-1 top-2.5 text-gray-300" />
        </div>
      </div>

      {/* Main Layout: Sidebar + Content */}
      <div className="absolute inset-0 flex pt-14 z-20">
        {/* Sidebar */}
        <div className="w-80 bg-black/45 px-4 py-6">
          <Sidebar />
        </div>

        {/* Notification Content */}
        <div className="flex-1 bg-black/70 overflow-y-auto p-6">
          <NotificationList />
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;

