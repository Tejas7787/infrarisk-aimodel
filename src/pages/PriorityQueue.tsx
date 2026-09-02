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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListOrdered, Search } from "lucide-react";
import {
  getRiskColor,
  getPriorityColor,
  getSeverityColor,
  getDefectLabel,
} from "@/lib/risk-engine";
import { DEMO_INSPECTIONS } from "@/lib/types";
import type {
  InfraType,
  RiskCategory,
  Priority,
  SeverityLevel,
} from "@/lib/types";

interface QueueEntry {
  inspectionId: string;
  assetId: string;
  infraType: InfraType;
  location: string;
  createdAt: number;
  detections: {
    defectType: string;
    confidence: number;
    severity: SeverityLevel;
  }[];
  riskScore: number;
  riskCategory: RiskCategory;
  priority: Priority;
}

const PRIORITY_ORDER: Record<string, number> = {
  P1: 0,
  P2: 1,
  P3: 2,
  P4: 3,
};

export default function PriorityQueue() {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterRisk, setFilterRisk] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [search, setSearch] = useState("");

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
    .filter(
      (q) => filterPriority === "all" || q.priority === filterPriority
    )
    .filter(
      (q) =>
        search === "" ||
        q.assetId.toLowerCase().includes(search.toLowerCase()) ||
        q.location.toLowerCase().includes(search.toLowerCase())
    )
    .sort(
      (a, b) =>
        (PRIORITY_ORDER[a.priority] ?? 4) - (PRIORITY_ORDER[b.priority] ?? 4)
    );

  return (
    <AppShell>
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto pb-24 md:pb-8">
        <header className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
              <ListOrdered className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Prioritization
              </p>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                Priority Queue
              </h1>
            </div>
          </div>
        </header>

        {/* Filters */}
        <Card className="bg-card border-border/60 mb-4 md:mb-6">
          <CardContent className="p-3 md:p-4">
            <div className="flex flex-wrap gap-2 md:gap-3 items-end">
              <div className="flex-1 min-w-[180px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Search assets or locations..."
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
              <Select value={filterRisk} onValueChange={setFilterRisk}>
                <SelectTrigger className="w-[130px] bg-surface-2 border-border/60 text-sm">
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
                <SelectTrigger className="w-[130px] bg-surface-2 border-border/60 text-sm">
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
        <div className="mb-3">
          <Badge variant="outline" className="text-[11px] bg-amber-500/10 text-amber-400 border-amber-500/20">
            DEMO DATA — Sample priority queue
          </Badge>
        </div>

        {/* Table */}
        <Card className="bg-card border-border/60 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border/60 hover:bg-transparent">
                  <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Asset
                  </TableHead>
                  <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Type
                  </TableHead>
                  <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                    Location
                  </TableHead>
                  <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Defect
                  </TableHead>
                  <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Severity
                  </TableHead>
                  <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Risk
                  </TableHead>
                  <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Priority
                  </TableHead>
                  <TableHead className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                    Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-16">
                      <div className="flex flex-col items-center">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-surface-3 mb-3">
                          <ListOrdered className="size-5 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          No items match filters
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Try adjusting your search or filters
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((item) => {
                    const topDefect = item.detections[0];
                    return (
                      <TableRow
                        key={item.inspectionId}
                        className="border-border/40 hover:bg-surface-2/50"
                      >
                        <TableCell>
                          <p className="font-semibold text-sm text-foreground">
                            {item.assetId}
                          </p>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground capitalize">
                            {item.infraType}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <p className="text-sm text-muted-foreground max-w-[180px] truncate">
                            {item.location}
                          </p>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-foreground">
                            {topDefect
                              ? getDefectLabel(
                                  topDefect.defectType,
                                  item.infraType
                                )
                              : "N/A"}
                          </span>
                        </TableCell>
                        <TableCell>
                          {topDefect ? (
                            <Badge
                              variant="outline"
                              className={`text-[10px] font-semibold border-0 ${getSeverityColor(
                                topDefect.severity
                              )}`}
                            >
                              {topDefect.severity}
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <span className="text-sm font-bold text-foreground">
                            {item.riskScore}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-bold border-0 ${getPriorityColor(
                              item.priority
                            )}`}
                          >
                            {item.priority}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">
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
        </Card>
      </div>
    </AppShell>
  );
}
