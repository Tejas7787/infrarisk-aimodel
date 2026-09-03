import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
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

export default function PriorityQueue() {
  const { user } = useAuth();
  const queueData = useQuery(
    api.stats.getPriorityQueue,
    user?._id ? { userId: user._id } : "skip"
  );

  const [filterType, setFilterType] = useState<string>("all");
  const [filterRisk, setFilterRisk] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [search, setSearch] = useState("");

  const PRIORITY_ORDER: Record<string, number> = {
    P1: 0,
    P2: 1,
    P3: 2,
    P4: 3,
  };

  if (!queueData) {
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
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 rounded-xl bg-surface-2 animate-pulse" />
            ))}
          </div>
        </div>
      </AppShell>
    );
  }

  const filtered = queueData
    .filter((q) => filterType === "all" || q.asset?.infraType === filterType)
    .filter((q) => filterRisk === "all" || q.riskAssessment.riskCategory === filterRisk)
    .filter(
      (q) => filterPriority === "all" || q.riskAssessment.priority === filterPriority
    )
    .filter(
      (q) =>
        search === "" ||
        q.asset?.assetId?.toLowerCase().includes(search.toLowerCase()) ||
        q.asset?.location?.toLowerCase().includes(search.toLowerCase())
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
                          {queueData.length === 0
                            ? "No inspections yet"
                            : "No items match filters"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {queueData.length === 0
                            ? "Run an inspection on the AI Inspection page to populate the queue"
                            : "Try adjusting your search or filters"}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((item) => (
                    <TableRow
                      key={item.riskAssessment._id}
                      className="border-border/40 hover:bg-surface-2/50"
                    >
                      <TableCell>
                        <p className="font-semibold text-sm text-foreground">
                          {item.asset?.assetId ?? "Unknown"}
                        </p>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-muted-foreground capitalize">
                          {item.asset?.infraType ?? "—"}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <p className="text-sm text-muted-foreground max-w-[180px] truncate">
                          {item.asset?.location ?? "—"}
                        </p>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-foreground">
                          {item.topDefect !== "N/A"
                            ? getDefectLabel(
                                item.topDefect,
                                (item.asset?.infraType as "road" | "bridge" | "tunnel" | "water" | "power") ?? "road"
                              )
                            : "N/A"}
                        </span>
                      </TableCell>
                      <TableCell>
                        {item.topSeverity !== "N/A" ? (
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-semibold border-0 ${getSeverityColor(
                              item.topSeverity as "low" | "medium" | "high" | "critical"
                            )}`}
                          >
                            {item.topSeverity}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <span className="text-sm font-bold text-foreground">
                          {item.riskAssessment.riskScore}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={`text-[10px] font-bold border-0 ${getPriorityColor(
                            item.riskAssessment.priority as "P1" | "P2" | "P3" | "P4"
                          )}`}
                        >
                          {item.riskAssessment.priority}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <span className="text-xs text-muted-foreground">
                          {new Date(item.riskAssessment.createdAt).toLocaleDateString()}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
