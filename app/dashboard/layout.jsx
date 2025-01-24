import SidePanel from "./components/side-panel";
import UserNav from "./components/user-nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Side panel */}
      <aside className="w-64 overflow-y-auto bg-white border-r shadow-lg">
        <SidePanel />
      </aside>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Dashboard header */}
        <header className="flex items-center justify-between h-16 gap-4 px-6 bg-white border-b shadow-sm">
          <h1 className="text-2xl font-bold text-blue-800">Mflix Dashboard</h1>
          <UserNav />
        </header>

        {/* Dashboard pages */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
