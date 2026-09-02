import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Calendar,
  AlertTriangle,
} from "lucide-react";
import {
  DEMO_ASSETS,
  INFRA_TYPE_INFO,
  type InfraType,
  type MaintenanceStatus,
} from "@/lib/types";

const STATUS_LABELS: Record<MaintenanceStatus, string> = {
  new: "New",
  under_review: "Under Review",
  inspection_required: "Inspection Required",
  maintenance_planned: "Maintenance Planned",
  resolved: "Resolved",
};

const STATUS_COLORS: Record<MaintenanceStatus, string> = {
  new: "text-blue-600 bg-blue-50 border-blue-200",
  under_review: "text-amber-600 bg-amber-50 border-amber-200",
  inspection_required: "text-orange-600 bg-orange-50 border-orange-200",
  maintenance_planned: "text-purple-600 bg-purple-50 border-purple-200",
  resolved: "text-emerald-600 bg-emerald-50 border-emerald-200",
};

export default function Assets() {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");

  const assets = DEMO_ASSETS.filter(
    (a) => filterType === "all" || a.infraType === filterType
  ).filter(
    (a) => filterStatus === "all" || a.status === filterStatus
  ).filter(
    (a) =>
      search === "" ||
      a.assetId.toLowerCase().includes(search.toLowerCase()) ||
      (a.location?.toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  return (
    <AppShell>
      <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Management</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">Assets</h1>
          </div>
          <Badge variant="outline" className="text-amber-600 border-amber-200">
            DEMO DATA
          </Badge>
        </header>

        {/* Filters */}
        <Card className="border-border/70 mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Search assets..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[150px]">
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
                <SelectTrigger className="w-[180px]">
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
          <Card className="border-border/70">
            <CardContent className="py-16 text-center">
              <FolderOpen className="size-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold">No assets found</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your filters or search terms.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {assets.map((asset) => (
              <Card key={asset.assetId} className="border-border/70">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold">{asset.assetId}</p>
                      <p className="text-xs text-muted-foreground capitalize mt-0.5">
                        {INFRA_TYPE_INFO[asset.infraType]?.icon}{" "}
                        {INFRA_TYPE_INFO[asset.infraType]?.label ?? asset.infraType}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${STATUS_COLORS[asset.status as MaintenanceStatus]}`}
                    >
                      {STATUS_LABELS[asset.status as MaintenanceStatus]}
                    </Badge>
                  </div>

                  {asset.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="size-3.5 shrink-0" />
                      <span className="truncate">{asset.location}</span>
                    </div>
                  )}

                  {asset.latitude && asset.longitude && (
                    <p className="text-xs text-muted-foreground/60 mb-2">
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
