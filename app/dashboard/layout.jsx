import UserNav from "./components/user-nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex max-h-screen overflow-hidden bg-gray-100">
      {/* Side panel */}
      <aside className="w-60 overflow-y-auto border-r bg-white shadow-lg">
        Side Panel
      </aside>

      <div className="bg-gray-400 flex flex-1 flex-col overflow-hidden">
        {/* Dashboard header */}
        <header className="h-16 flex items-center justify-between gap-4 border-b px-6 shadow-sm bg-white">
          <h1 className="text-2xl font-bold text-blue-800">Mflix Dashboard</h1>
          <UserNav />
        </header>

        {/* Dashboard pages */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-5">
          {children}
        </main>
      </div>
    </div>
  );
}
