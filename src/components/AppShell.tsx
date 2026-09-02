import { NavLink, useLocation, useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  ScanSearch,
  ListOrdered,
  MapPin,
  FolderOpen,
  FileText,
  Cpu,
  ShieldCheck,
  LogOut,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/inspect", label: "AI Inspection", icon: ScanSearch },
  { to: "/priority-queue", label: "Priority Queue", icon: ListOrdered },
  { to: "/assets", label: "Assets", icon: FolderOpen },
  { to: "/map", label: "Risk Map", icon: MapPin },
  { to: "/reports", label: "Reports", icon: FileText },
  { divider: true },
  { to: "/architecture", label: "Architecture", icon: Cpu },
  { to: "/responsible-ai", label: "Responsible AI", icon: ShieldCheck },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={`flex flex-col border-r border-border bg-card transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Logo */}
        <div className="flex h-14 items-center border-b border-border px-4">
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
                <AlertTriangle className="size-4" />
              </div>
              <span className="text-sm font-bold tracking-tight">
                InfraRisk AI
              </span>
            </div>
          )}
          {collapsed && (
            <div className="mx-auto flex size-8 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
              <AlertTriangle className="size-4" />
            </div>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {NAV_ITEMS.map((item, i) => {
            if ("divider" in item && item.divider) {
              return (
                <div
                  key={`div-${i}`}
                  className="my-3 border-t border-border"
                />
              );
            }
            const Icon = item.icon!;
            return (
              <NavLink
                key={item.to}
                to={item.to!}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  } ${collapsed ? "justify-center px-2" : ""}`
                }
              >
                <Icon className="size-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border p-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex w-full items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors mb-2"
          >
            {collapsed ? (
              <ChevronRight className="size-4" />
            ) : (
              <ChevronLeft className="size-4" />
            )}
          </button>
          {!collapsed && (
            <div className="flex items-center gap-3 mb-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                {user?.name?.[0] ?? "U"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name ?? "User"}</p>
                <p className="text-xs text-muted-foreground truncate">{user?.email ?? ""}</p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className={`w-full gap-2 text-muted-foreground hover:text-foreground ${collapsed ? "px-2" : ""}`}
          >
            <LogOut className="size-4" />
            {!collapsed && <span>Sign out</span>}
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">{children}</div>
      </main>
    </div>
  );
}
