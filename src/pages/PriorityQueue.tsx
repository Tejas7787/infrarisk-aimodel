import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent } from "@/components/ui/card";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ListOrdered,
  Search,
  Filter,
  ExternalLink,
} from "lucide-react";
import { getRiskColor, getPriorityColor, getSeverityColor, getDefectLabel } from "@/lib/risk-engine";
import { DEMO_INSPECTIONS } from "@/lib/types";
import type { InfraType, RiskCategory, Priority, SeverityLevel, MaintenanceStatus } from "@/lib/types";

interface QueueEntry {
  inspectionId: string;
  assetId: string;
  infraType: InfraType;
  location: string;
  createdAt: number;
  detections: { defectType: string; confidence: number; severity: SeverityLevel }[];
  riskScore: number;
  riskCategory: RiskCategory;
  priority: Priority;
}

const PRIORITY_ORDER: Record<string, number> = { P1: 0, P2: 1, P3: 2, P4: 3 };

export default function PriorityQueue() {
  const { user } = useAuth();
  const [filterType, setFilterType] = useState<string>("all");
  const [filterRisk, setFilterRisk] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");

  // Use demo data
  const queue: QueueEntry[] = DEMO_INSPECTIONS.map((d) => ({
    inspectionId: d.inspectionId,
    assetId: d.assetId,
    infraType: d.infraType,
    location: d.location,
    createdAt: d.createdAt,
    detections: d.detections,
    riskScore: d.riskScore,
    riskCategory: d.riskCategory,
    priority: d.priority,
  }));

  const filtered = queue
    .filter((q) => filterType === "all" || q.infraType === filterType)
    .filter((q) => filterRisk === "all" || q.riskCategory === filterRisk)
    .filter((q) => filterPriority === "all" || q.priority === filterPriority)
    .filter(
      (q) =>
        search === "" ||
        q.assetId.toLowerCase().includes(search.toLowerCase()) ||
        q.location.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (PRIORITY_ORDER[a.priority] ?? 4) - (PRIORITY_ORDER[b.priority] ?? 4));

  return (
    <AppShell>
      <div className="p-6 lg:p-8 max-w-[1400px] mx-auto">
        <header className="mb-6">
          <p className="text-sm font-medium text-muted-foreground">Prioritization</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">Priority Queue</h1>
        </header>

        {/* Filters */}
        <Card className="border-border/70 mb-6">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by asset ID or location..."
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
              <Select value={filterRisk} onValueChange={setFilterRisk}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Risk" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk</SelectItem>
                  <SelectItem value="LOW">Low</SelectItem>
                  <SelectItem value="MODERATE">Moderate</SelectItem>
                  <SelectItem value="HIGH">High</SelectItem>
                  <SelectItem value="CRITICAL">Critical</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterPriority} onValueChange={setFilterPriority}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="P1">P1</SelectItem>
                  <SelectItem value="P2">P2</SelectItem>
                  <SelectItem value="P3">P3</SelectItem>
                  <SelectItem value="P4">P4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Demo Badge */}
        <div className="mb-4">
          <Badge variant="outline" className="text-amber-600 border-amber-200">
            DEMO DATA — Sample priority queue
          </Badge>
        </div>

        {/* Table */}
        <Card className="border-border/70">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Defect</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-12">
                        <ListOrdered className="size-8 text-muted-foreground mx-auto mb-3" />
                        <p className="text-sm font-medium">No items match filters</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Try adjusting your search or filters
                        </p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filtered.map((item) => {
                      const topDefect = item.detections[0];
                      return (
                        <TableRow key={item.inspectionId}>
                          <TableCell>
                            <p className="font-medium text-sm">{item.assetId}</p>
                          </TableCell>
                          <TableCell>
                            <span className="capitalize text-sm">{item.infraType}</span>
                          </TableCell>
                          <TableCell>
                            <p className="text-sm text-muted-foreground max-w-[200px] truncate">
                              {item.location}
                            </p>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm">
                              {topDefect
                                ? getDefectLabel(topDefect.defectType, item.infraType)
                                : "N/A"}
                            </span>
                          </TableCell>
                          <TableCell>
                            {topDefect ? (
                              <Badge
                                variant="outline"
                                className={`text-xs ${getSeverityColor(topDefect.severity)}`}
                              >
                                {topDefect.severity}
                              </Badge>
                            ) : (
                              "—"
                            )}
                          </TableCell>
                          <TableCell>
                            <span className="text-sm font-semibold">{item.riskScore}</span>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={`text-xs ${getPriorityColor(item.priority)}`}
                            >
                              {item.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="text-xs text-muted-foreground">
                              {new Date(item.createdAt).toLocaleDateString()}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
