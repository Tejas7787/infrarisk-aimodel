import { NavLink, useLocation, useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
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

const MOBILE_NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/inspect", label: "Inspect", icon: ScanSearch },
  { to: "/priority-queue", label: "Priority", icon: ListOrdered },
  { to: "/map", label: "Map", icon: MapPin },
  { to: "/assets", label: "Assets", icon: FolderOpen },
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
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col border-r border-border/60 bg-[oklch(0.14_0.014_260)] transition-all duration-300 ${
          collapsed ? "w-[68px]" : "w-[240px]"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-border/60 px-4 shrink-0">
          <div
            className={`flex items-center gap-2.5 ${
              collapsed ? "justify-center w-full" : ""
            }`}
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0">
              <AlertTriangle className="size-4" />
            </div>
            {!collapsed && (
              <div>
                <span className="text-sm font-bold tracking-tight text-foreground">
                  InfraRisk
                </span>
                <span className="text-sm font-bold tracking-tight text-primary ml-0.5">
                  AI
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-3 px-2.5 space-y-0.5">
          {NAV_ITEMS.map((item, i) => {
            if ("divider" in item && item.divider) {
              return (
                <div
                  key={`div-${i}`}
                  className="my-3 border-t border-border/40 mx-2"
                />
              );
            }
            const Icon = item.icon!;
            return (
              <NavLink
                key={item.to}
                to={item.to!}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_oklch(0.72_0.15_220_/_0.12)]"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  } ${collapsed ? "justify-center px-2" : ""}`
                }
              >
                <Icon className="size-[18px] shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-border/60 p-3 shrink-0">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex w-full items-center justify-center rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-colors mb-2"
          >
            {collapsed ? (
              <ChevronRight className="size-4" />
            ) : (
              <ChevronLeft className="size-4" />
            )}
          </button>
          {!collapsed && (
            <div className="flex items-center gap-3 mb-3 px-1">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary text-xs font-bold shrink-0">
                {user?.name?.[0]?.toUpperCase() ?? "U"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {user?.name ?? "User"}
                </p>
                <p className="text-[11px] text-muted-foreground truncate">
                  {user?.email ?? ""}
                </p>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className={`w-full gap-2 text-muted-foreground hover:text-foreground hover:bg-white/[0.04] ${
              collapsed ? "px-2" : ""
            }`}
          >
            <LogOut className="size-4" />
            {!collapsed && <span className="text-[13px]">Sign out</span>}
          </Button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[oklch(0.14_0.014_260)] border-t border-border/60 safe-area-pb">
        <div className="flex items-center justify-around px-2 py-2">
          {MOBILE_NAV.map((item) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="size-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
