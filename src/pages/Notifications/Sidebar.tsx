import { Bell, ArrowRight, Power, ChevronDown } from "lucide-react";
import { useGroups } from "../../hooks/useGroups"; // adjust path if needed

const Sidebar = () => {
  const { groups, loading } = useGroups();


  return (
    <div className="text-sm text-white h-full flex flex-col justify-between">
      <div className="space-y-6">
        {/* Enter Code */}
        <div className="relative">
          <ArrowRight className="w-4 h-4 text-gray-300 absolute right-3 top-2.5" />
          <input
            type="text"
            placeholder="Enter Code"
            className="w-full pl-2 pr-9 py-2 bg-transparent border-b border-gray-300 rounded text-sm placeholder-gray-400 text-white"
          />
        </div>

        {/* My Groups - With dropdown arrows */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <p className="text-base text-gray-300">My Groups</p>
            <ChevronDown className="w-4 h-4 text-gray-300" />
          </div>
          <div className="flex items-center justify-between px-1 text-gray-300">
            <span className="text-base">Subscribed</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="px-1 text-gray-300">
            <span className="text-base">Starred</span>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <p className="text-base text-gray-400 px-1 mt-4 mb-2">Notifications</p>
          <div className="space-y-2">
            {/* {groups.map((group, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer"

              >
                <span className="w-5 h-5 rounded-full bg-gray-300" />
                <span className="flex-1 text-gray-200 text-base">{group.name}</span>
                <Bell className="w-4 h-4 text-gray-400" />
              </div>
            ))} */}
            {loading ? (
  <p className="text-gray-400 px-3">Loading...</p>
) : (
  groups.map((group, index) => (
    <div
      key={group.igId}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer"
    >
      <span className="w-5 h-5 rounded-full bg-gray-300" />
      <span className="flex-1 text-gray-200 text-base">{group.name}</span>
      <Bell className="w-4 h-4 text-gray-400" />
    </div>
  ))
)}

          </div>
        </div>
      </div>
          {/* Footer Name with Avatar Circle and Power Icon */}
<div className=" border-t border-white py-3 flex items-center justify-between">
  <div className="flex items-center gap-3 pl-3">
    <div className="w-8 h-8 rounded-full bg-gray-400" />
    <span className="text-white text-base">Name</span>
  </div>
  <Power className="w-4 h-4 text-gray-300" />
</div>

</div>   
  );
};

export default Sidebar;
