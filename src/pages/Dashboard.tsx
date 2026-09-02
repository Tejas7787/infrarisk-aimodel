import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  BarChart3,
  FolderOpen,
  ScanSearch,
  TrendingUp,
  Shield,
  AlertCircle,
  Clock,
  Activity,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const RISK_COLORS: Record<string, string> = {
  LOW: "#22c55e",
  MODERATE: "#f59e0b",
  HIGH: "#f97316",
  CRITICAL: "#ef4444",
};

const PRIORITY_COLORS: Record<string, string> = {
  P1: "#ef4444",
  P2: "#f97316",
  P3: "#f59e0b",
  P4: "#22c55e",
};

export default function Dashboard() {
  const { user } = useAuth();
  const stats = useQuery(
    api.stats.getDashboardStats,
    user?._id ? { userId: user._id } : "skip"
  );

  return (
    <AppShell>
      <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
        <header className="mb-8">
          <p className="text-sm font-medium text-muted-foreground">Overview</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            Dashboard
          </h1>
        </header>

        {!stats ? (
          <DashboardSkeleton />
        ) : stats.totalAssets === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <KPICard
                icon={FolderOpen}
                label="Total Assets"
                value={stats.totalAssets}
                color="text-slate-900 dark:text-slate-100"
              />
              <KPICard
                icon={AlertTriangle}
                label="High-Risk Assets"
                value={stats.highRiskAssets}
                color="text-orange-500"
              />
              <KPICard
                icon={Shield}
                label="Critical Assets"
                value={stats.criticalAssets}
                color="text-red-500"
              />
              <KPICard
                icon={ScanSearch}
                label="Total Inspections"
                value={stats.totalInspections}
                color="text-blue-500"
              />
            </div>

            {/* Charts Row */}
            <div className="grid gap-4 lg:grid-cols-2 mb-8">
              {/* Risk Distribution */}
              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Risk Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.values(stats.riskDistribution).every((v) => v === 0) ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">No risk assessments yet</p>
                  ) : (
                    <ResponsiveContainer width="100%" height={220}>
                      <PieChart>
                        <Pie
                          data={Object.entries(stats.riskDistribution)
                            .filter(([, v]) => v > 0)
                            .map(([name, value]) => ({ name, value }))}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          dataKey="value"
                          paddingAngle={2}
                        >
                          {Object.entries(stats.riskDistribution)
                            .filter(([, v]) => v > 0)
                            .map(([name]) => (
                              <Cell key={name} fill={RISK_COLORS[name] ?? "#999"} />
                            ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                  <div className="flex flex-wrap gap-3 mt-2 justify-center">
                    {Object.entries(stats.riskDistribution).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className="size-2 rounded-full" style={{ background: RISK_COLORS[key] }} />
                        {key}: {val}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Priority Distribution */}
              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Priority Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.values(stats.priorityDistribution).every((v) => v === 0) ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">No priorities assigned yet</p>
                  ) : (
                    <ResponsiveContainer width="100%" height={220}>
                      <BarChart
                        data={Object.entries(stats.priorityDistribution).map(([name, value]) => ({
                          name,
                          value,
                        }))}
                      >
                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                        <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                        <Tooltip />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {Object.entries(stats.priorityDistribution).map(([name]) => (
                            <Cell key={name} fill={PRIORITY_COLORS[name] ?? "#999"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Defect Distribution + Infrastructure Types */}
            <div className="grid gap-4 lg:grid-cols-2 mb-8">
              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Defect Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.keys(stats.defectDistribution).length === 0 ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">No defects detected yet</p>
                  ) : (
                    <ResponsiveContainer width="100%" height={220}>
                      <BarChart
                        data={Object.entries(stats.defectDistribution).map(([name, value]) => ({
                          name: name.replace(/_/g, " "),
                          value,
                        }))}
                        layout="vertical"
                      >
                        <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11 }} />
                        <YAxis
                          type="category"
                          dataKey="name"
                          tick={{ fontSize: 11 }}
                          width={120}
                        />
                        <Tooltip />
                        <Bar dataKey="value" fill="#64748b" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>

              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Infrastructure Type Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.keys(stats.infraTypeDistribution).length === 0 ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">No assets registered yet</p>
                  ) : (
                    <ResponsiveContainer width="100%" height={220}>
                      <PieChart>
                        <Pie
                          data={Object.entries(stats.infraTypeDistribution).map(([name, value]) => ({
                            name: name.charAt(0).toUpperCase() + name.slice(1),
                            value,
                          }))}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          dataKey="value"
                          paddingAngle={2}
                        >
                          {Object.keys(stats.infraTypeDistribution).map((_, i) => (
                            <Cell key={i} fill={["#334155", "#64748b", "#94a3b8", "#cbd5e1", "#e2e8f0"][i % 5]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Alerts + Recent Inspections */}
            <div className="grid gap-4 lg:grid-cols-2">
              {/* Alerts */}
              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <AlertCircle className="size-4 text-red-500" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {stats.alerts.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">No alerts</p>
                  ) : (
                    <div className="space-y-3">
                      {stats.alerts.map((alert) => (
                        <div
                          key={alert._id}
                          className="flex items-start justify-between rounded-lg border border-border p-3"
                        >
                          <div>
                            <p className="text-sm font-medium">{alert.riskCategory} Risk</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              Risk Score: {alert.riskScore}/100 · {alert.priority}
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              alert.riskCategory === "CRITICAL"
                                ? "text-red-600 border-red-200"
                                : "text-orange-600 border-orange-200"
                            }`}
                          >
                            {alert.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Inspections */}
              <Card className="border-border/70">
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Clock className="size-4 text-muted-foreground" />
                    Recent Inspections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {stats.recentInspections.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">No inspections yet</p>
                  ) : (
                    <div className="space-y-3">
                      {stats.recentInspections.slice(0, 5).map((insp) => (
                        <div
                          key={insp._id}
                          className="flex items-center justify-between rounded-lg border border-border p-3"
                        >
                          <div>
                            <p className="text-sm font-medium capitalize">{insp.infraType}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {new Date(insp.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              insp.status === "completed"
                                ? "text-emerald-600 border-emerald-200"
                                : insp.status === "failed"
                                ? "text-red-600 border-red-200"
                                : "text-amber-600 border-amber-200"
                            }`}
                          >
                            {insp.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}

function KPICard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <Card className="border-border/70">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">{value}</p>
          </div>
          <div className={`flex size-10 items-center justify-center rounded-xl bg-muted`}>
            <Icon className={`size-5 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-28 rounded-xl bg-muted animate-pulse" />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-72 rounded-xl bg-muted animate-pulse" />
        <div className="h-72 rounded-xl bg-muted animate-pulse" />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <Card className="border-border/70">
      <CardContent className="py-16 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
          <Activity className="size-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold">No data yet</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Start by analyzing an infrastructure image. Your inspections, detections,
          and risk assessments will appear here.
        </p>
        <p className="mt-1 text-xs text-muted-foreground/60">
          Try the demo mode on the AI Inspection page to see sample results.
        </p>
      </CardContent>
    </Card>
  );
}
