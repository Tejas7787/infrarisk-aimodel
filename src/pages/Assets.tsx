import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FolderOpen,
  Search,
  MapPin,
} from "lucide-react";
import {
  DEMO_ASSETS,
  INFRA_TYPE_INFO,
  type MaintenanceStatus,
} from "@/lib/types";

const STATUS_LABELS: Record<MaintenanceStatus, string> = {
  new: "New",
  under_review: "Under Review",
  inspection_required: "Inspection Required",
  maintenance_planned: "Maintenance Planned",
  resolved: "Resolved",
};

const STATUS_STYLES: Record<MaintenanceStatus, string> = {
  new: "bg-chart-1/15 text-primary",
  under_review: "bg-risk-moderate/15 text-risk-moderate",
  inspection_required: "bg-risk-high/15 text-risk-high",
  maintenance_planned: "bg-violet-500/15 text-violet-400",
  resolved: "bg-risk-low/15 text-risk-low",
};

export default function Assets() {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");

  const assets = DEMO_ASSETS.filter(
    (a) => filterType === "all" || a.infraType === filterType
  )
    .filter(
      (a) => filterStatus === "all" || a.status === filterStatus
    )
    .filter(
      (a) =>
        search === "" ||
        a.assetId.toLowerCase().includes(search.toLowerCase()) ||
        (a.location?.toLowerCase().includes(search.toLowerCase()) ?? false)
    );

  return (
    <AppShell>
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
        <header className="mb-6 md:mb-8 flex items-start justify-between">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <FolderOpen className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Management
              </p>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Assets
              </h1>
            </div>
          </div>
          <Badge variant="outline" className="text-[11px] bg-amber-500/10 text-amber-400 border-amber-500/20">
            DEMO DATA
          </Badge>
        </header>

        {/* Filters */}
        <Card className="bg-card border-border/60 mb-4 md:mb-6">
          <CardContent className="p-3 md:p-4">
            <div className="flex flex-wrap gap-2 md:gap-3 items-end">
              <div className="flex-1 min-w-[180px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Search assets..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9 bg-surface-2 border-border/60 text-sm"
                  />
                </div>
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[130px] bg-surface-2 border-border/60 text-sm">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="road">Road</SelectItem>
                  <SelectItem value="bridge">Bridge</SelectItem>
                  <SelectItem value="tunnel">Tunnel</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                  <SelectItem value="power">Power</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-[160px] bg-surface-2 border-border/60 text-sm">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="under_review">Under Review</SelectItem>
                  <SelectItem value="inspection_required">Inspection Required</SelectItem>
                  <SelectItem value="maintenance_planned">Maintenance Planned</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Asset Grid */}
        {assets.length === 0 ? (
          <Card className="bg-card border-border/60">
            <CardContent className="py-16 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-surface-3 mx-auto mb-4">
                <FolderOpen className="size-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">No assets found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {assets.map((asset) => (
              <Card
                key={asset.assetId}
                className="bg-card border-border/60 hover:border-border transition-colors group"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-foreground text-sm">
                        {asset.assetId}
                      </p>
                      <p className="text-[11px] text-muted-foreground capitalize mt-0.5">
                        {INFRA_TYPE_INFO[asset.infraType]?.icon}{" "}
                        {INFRA_TYPE_INFO[asset.infraType]?.label ?? asset.infraType}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-semibold border-0 ${
                        STATUS_STYLES[asset.status as MaintenanceStatus]
                      }`}
                    >
                      {STATUS_LABELS[asset.status as MaintenanceStatus]}
                    </Badge>
                  </div>

                  {asset.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 shrink-0" />
                      <span className="truncate">{asset.location}</span>
                    </div>
                  )}

                  {asset.latitude && asset.longitude && (
                    <p className="text-[11px] text-muted-foreground/50 mt-2 font-mono">
                      {asset.latitude.toFixed(4)}, {asset.longitude.toFixed(4)}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
