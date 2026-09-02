import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FolderOpen,
  ShieldAlert,
  AlertTriangle,
  ScanSearch,
  Activity,
  TrendingUp,
  Clock,
  BarChart3,
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

const DEFECT_LABELS: Record<string, string> = {
  longitudinal_crack: "Longitudinal Crack",
  transverse_crack: "Transverse Crack",
  alligator_crack: "Alligator Crack",
  pothole: "Pothole",
  crack: "Crack",
  spalling: "Spalling",
  exposed_reinforcement: "Exposed Rebar",
  seepage: "Seepage",
  corrosion: "Corrosion",
  other: "Other",
};

export default function Dashboard() {
  const { user } = useAuth();
  const stats = useQuery(
    api.stats.getDashboardStats,
    user?._id ? { userId: user._id } : "skip"
  );

  return (
    <AppShell>
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <BarChart3 className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Command Center
              </p>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Infrastructure Intelligence
              </h1>
            </div>
          </div>
        </header>

        {!stats ? (
          <DashboardSkeleton />
        ) : stats.totalAssets === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* KPI Cards */}
            <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4 mb-6 md:mb-8">
              <KPICard
                icon={FolderOpen}
                label="Assets Inspected"
                value={stats.totalAssets}
                accent="primary"
              />
              <KPICard
                icon={ShieldAlert}
                label="Critical Risks"
                value={stats.criticalAssets}
                accent="critical"
              />
              <KPICard
                icon={AlertTriangle}
                label="High Risks"
                value={stats.highRiskAssets}
                accent="high"
              />
              <KPICard
                icon={ScanSearch}
                label="Inspections"
                value={stats.totalInspections}
                accent="info"
              />
            </div>

            {/* Charts Row */}
            <div className="grid gap-4 lg:grid-cols-2 mb-6 md:mb-8">
              {/* Risk Distribution */}
              <Card className="bg-card border-border/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-foreground">
                    Risk Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.values(stats.riskDistribution).every((v) => v === 0) ? (
                    <p className="text-sm text-muted-foreground py-10 text-center">
                      No risk assessments yet
                    </p>
                  ) : (
                    <>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={Object.entries(stats.riskDistribution)
                              .filter(([, v]) => v > 0)
                              .map(([name, value]) => ({ name, value }))}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={80}
                            dataKey="value"
                            paddingAngle={3}
                            strokeWidth={0}
                          >
                            {Object.entries(stats.riskDistribution)
                              .filter(([, v]) => v > 0)
                              .map(([name]) => (
                                <Cell key={name} fill={RISK_COLORS[name] ?? "#666"} />
                              ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "oklch(0.17 0.012 260)",
                              border: "1px solid oklch(0.25 0.012 260)",
                              borderRadius: "8px",
                              color: "#fff",
                              fontSize: "12px",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="flex flex-wrap gap-4 mt-3 justify-center">
                        {Object.entries(stats.riskDistribution).map(([key, val]) => (
                          <div key={key} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span
                              className="size-2.5 rounded-full shrink-0"
                              style={{ background: RISK_COLORS[key] }}
                            />
                            <span className="capitalize">{key.toLowerCase()}</span>
                            <span className="font-semibold text-foreground">{val}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Priority Distribution */}
              <Card className="bg-card border-border/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-foreground">
                    Priority Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.values(stats.priorityDistribution).every((v) => v === 0) ? (
                    <p className="text-sm text-muted-foreground py-10 text-center">
                      No priorities assigned yet
                    </p>
                  ) : (
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart
                        data={Object.entries(stats.priorityDistribution).map(
                          ([name, value]) => ({ name, value })
                        )}
                      >
                        <XAxis
                          dataKey="name"
                          tick={{ fontSize: 11, fill: "oklch(0.60 0.01 260)" }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          allowDecimals={false}
                          tick={{ fontSize: 11, fill: "oklch(0.60 0.01 260)" }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "oklch(0.17 0.012 260)",
                            border: "1px solid oklch(0.25 0.012 260)",
                            borderRadius: "8px",
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={40}>
                          {Object.entries(stats.priorityDistribution).map(([name]) => (
                            <Cell key={name} fill={PRIORITY_COLORS[name] ?? "#666"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Defect Distribution + Infra Types */}
            <div className="grid gap-4 lg:grid-cols-2 mb-6 md:mb-8">
              <Card className="bg-card border-border/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-foreground">
                    Defect Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.keys(stats.defectDistribution).length === 0 ? (
                    <p className="text-sm text-muted-foreground py-10 text-center">
                      No defects detected yet
                    </p>
                  ) : (
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart
                        data={Object.entries(stats.defectDistribution).map(
                          ([name, value]) => ({
                            name: DEFECT_LABELS[name] ?? name.replace(/_/g, " "),
                            value,
                          })
                        )}
                        layout="vertical"
                      >
                        <XAxis
                          type="number"
                          allowDecimals={false}
                          tick={{ fontSize: 11, fill: "oklch(0.60 0.01 260)" }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          type="category"
                          dataKey="name"
                          tick={{ fontSize: 11, fill: "oklch(0.60 0.01 260)" }}
                          width={130}
                          axisLine={false}
                          tickLine={false}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "oklch(0.17 0.012 260)",
                            border: "1px solid oklch(0.25 0.012 260)",
                            borderRadius: "8px",
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        />
                        <Bar dataKey="value" fill="oklch(0.72 0.15 220)" radius={[0, 4, 4, 0]} maxBarSize={24} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-card border-border/60">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-foreground">
                    Infrastructure Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.keys(stats.infraTypeDistribution).length === 0 ? (
                    <p className="text-sm text-muted-foreground py-10 text-center">
                      No assets registered yet
                    </p>
                  ) : (
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={Object.entries(stats.infraTypeDistribution).map(
                            ([name, value]) => ({
                              name: name.charAt(0).toUpperCase() + name.slice(1),
                              value,
                            })
                          )}
                          cx="50%"
                          cy="50%"
                          innerRadius={55}
                          outerRadius={80}
                          dataKey="value"
                          paddingAngle={3}
                          strokeWidth={0}
                        >
                          {Object.keys(stats.infraTypeDistribution).map((_, i) => (
                            <Cell
                              key={i}
                              fill={[
                                "oklch(0.72 0.15 220)",
                                "oklch(0.65 0.12 200)",
                                "oklch(0.58 0.10 240)",
                                "oklch(0.72 0.18 155)",
                                "oklch(0.70 0.18 55)",
                              ][i % 5]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "oklch(0.17 0.012 260)",
                            border: "1px solid oklch(0.25 0.012 260)",
                            borderRadius: "8px",
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Alerts + Recent Inspections */}
            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="bg-card border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2 text-foreground">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-risk-critical/10">
                      <AlertTriangle className="size-3.5 text-risk-critical" />
                    </div>
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {stats.alerts.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">No alerts</p>
                  ) : (
                    <div className="space-y-2">
                      {stats.alerts.map((alert) => (
                        <div
                          key={alert._id}
                          className="flex items-center justify-between rounded-xl border border-border/50 bg-surface-1 p-3.5"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`size-2 rounded-full shrink-0 ${
                                alert.riskCategory === "CRITICAL"
                                  ? "bg-risk-critical"
                                  : "bg-risk-high"
                              }`}
                            />
                            <div>
                              <p className="text-sm font-medium text-foreground">
                                {alert.riskCategory} Risk
                              </p>
                              <p className="text-[11px] text-muted-foreground">
                                Score {alert.riskScore}/100
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-[11px] border-0 ${
                              alert.priority === "P1"
                                ? "bg-risk-critical/15 text-risk-critical"
                                : "bg-risk-high/15 text-risk-high"
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

              <Card className="bg-card border-border/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2 text-foreground">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="size-3.5 text-primary" />
                    </div>
                    Recent Inspections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {stats.recentInspections.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">
                      No inspections yet
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {stats.recentInspections.slice(0, 5).map((insp) => (
                        <div
                          key={insp._id}
                          className="flex items-center justify-between rounded-xl border border-border/50 bg-surface-1 p-3.5"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex size-2 rounded-full bg-muted-foreground/30 shrink-0" />
                            <div>
                              <p className="text-sm font-medium capitalize text-foreground">
                                {insp.infraType}
                              </p>
                              <p className="text-[11px] text-muted-foreground">
                                {new Date(insp.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={`text-[11px] border-0 ${
                              insp.status === "completed"
                                ? "bg-risk-low/15 text-risk-low"
                                : insp.status === "failed"
                                ? "bg-risk-critical/15 text-risk-critical"
                                : "bg-primary/10 text-primary"
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
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  accent: "primary" | "critical" | "high" | "info";
}) {
  const accentStyles = {
    primary: "bg-primary/10 text-primary",
    critical: "bg-risk-critical/10 text-risk-critical",
    high: "bg-risk-high/10 text-risk-high",
    info: "bg-chart-1/10 text-chart-1",
  };

  return (
    <Card className="bg-card border-border/60 hover:border-border transition-colors">
      <CardContent className="p-4 md:p-5">
        <div className="flex items-center justify-between mb-3">
          <div
            className={`flex size-10 items-center justify-center rounded-xl ${accentStyles[accent]}`}
          >
            <Icon className="size-5" />
          </div>
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-surface-2 animate-pulse" />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="h-72 rounded-xl bg-surface-2 animate-pulse" />
        <div className="h-72 rounded-xl bg-surface-2 animate-pulse" />
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <Card className="bg-card border-border/60">
      <CardContent className="py-20 text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10">
          <Activity className="size-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          No data yet
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Start by analyzing an infrastructure image. Your inspections, detections,
          and risk assessments will appear here.
        </p>
        <p className="mt-3 text-xs text-muted-foreground/60">
          Try the demo mode on the AI Inspection page to see sample results.
        </p>
      </CardContent>
    </Card>
  );
}
