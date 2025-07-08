// const mockData = [
//   {
//     name: 'Name',
//     time: '11:30 AM',
//     posts: 3,
//     notifications: [
//       { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sapien et ...' },
//       { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sapien et ...' },
//       { title: 'Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sapien et ...' }
//     ]
//   },
//   {
//     name: 'Name',
//     time: '12:00 PM',
//     posts: 2,
//     notifications: [
//       { title: 'Title', content: 'Another message from this person with different timestamp and info...' },
//       { title: 'Title', content: 'Some other message detail...' }
//     ]
//   }
// ];
// const NotificationList = () => {
//   return (
//     <div className="space-y-10">
//       {[...mockData].reverse().map((group, idx) => (
//         <div key={idx} className="space-y-4">
//           <div className="flex items-start gap-6">
//             {/* Left side: Avatar + Info */}
//             <div className="w-48 flex flex-col items-start gap-1">
//               <div className="w-10 h-10 bg-gray-300 rounded-full mb-1" />
//               <p className="text-white font-semibold">{group.name}</p>
//               <p className="text-sm text-gray-300">{group.posts} posts</p>
//               <p className="text-sm text-gray-300">{group.time}</p>
//             </div>

//             {/* Right side: Notifications */}
//             <div className="flex-1 space-y-2">
//               {group.notifications.map((note, i) => (
//                 <div key={i}>
//                   <p className="text-white font-semibold text-sm">{note.title}</p>
//                   <p className="text-sm text-gray-300">{note.content}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Divider */}
//           {idx < mockData.length - 1 && (
//             <hr className="border-white/30 border-[1px] mx-4" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NotificationList;
import { useEffect, useState } from "react";

interface Notification {
  notificationId: number;
  postId: number;
  message: string;
  createdAt: string;
}

const NotificationList = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/notifications");
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) return <p className="text-white">Loading notifications...</p>;

  return (
    <div className="space-y-6">
      {notifications.map((notification) => (
        <div
          key={notification.notificationId}
          className="p-4 bg-white/5 rounded-lg"
        >
          <p className="text-white font-semibold text-sm">Notification</p>
          <p className="text-sm text-gray-300">{notification.message}</p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(notification.createdAt).toLocaleString()}
          </p>
        </div>
      ))}

      {notifications.length === 0 && (
        <p className="text-gray-400 text-sm">No notifications available.</p>
      )}
    </div>
  );
};

export default NotificationList;


