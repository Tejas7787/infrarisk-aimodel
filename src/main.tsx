import { Toaster } from "@/components/ui/sonner";
import { RequireAuth } from "@/components/RequireAuth";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import React, { StrictMode, useEffect, lazy, Suspense } from "react";

// VlyToolbar is a Freebuff/Vly development-time overlay for inspecting
// elements and element selection. It is not part of the application itself.
// In production it should not block app bootstrap if the file is unavailable.
let VlyToolbar: React.ComponentType | null = null;

if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
  try {
    const toolbarModule = require("../vly-toolbar-readonly.tsx");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    VlyToolbar = toolbarModule.VlyToolbar ?? toolbarModule.default ?? null;
  } catch (_err) {
    console.warn("[VlyToolbar] Toolbar unavailable, continuing without it.");
  }
}

const VlyToolbarFallback: React.FC = () => {
  if (!VlyToolbar) return null;
  return <VlyToolbar />;
};
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";

// Lazy load route components
const Landing = lazy(() => import("./pages/Landing.tsx"));
const AuthPage = lazy(() => import("./pages/Auth.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Inspect = lazy(() => import("./pages/Inspect.tsx"));
const PriorityQueue = lazy(() => import("./pages/PriorityQueue.tsx"));
const Assets = lazy(() => import("./pages/Assets.tsx"));
const MapPage = lazy(() => import("./pages/MapPage.tsx"));
const Reports = lazy(() => import("./pages/Reports.tsx"));
const Architecture = lazy(() => import("./pages/Architecture.tsx"));
const ResponsibleAI = lazy(() => import("./pages/ResponsibleAI.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

function RouteLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );
}

/** Minimal visible screen shown when Convex cannot be configured. */
function ConvexNotConfiguredScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-foreground">
          InfraRisk AI
        </p>
        <p className="mt-2 text-xs text-muted-foreground break-words">
          This deployment is not configured for Convex.
        </p>
        <p className="mt-1 text-[11px] text-muted-foreground/70">
          Set VITE_CONVEX_URL for this deployment to enable the application.
        </p>
      </div>
    </div>
  );
}

class ToolbarErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: Error) {
    console.warn("[VlyToolbar] Caught error, toolbar disabled:", err.message);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message: string; stack: string }
> {
  state = { hasError: false, message: "", stack: "" };
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      message: error.message || "Unknown runtime error",
      stack: error.stack || "",
    };
  }
  componentDidCatch(err: Error) {
    console.error("[WebContainer preview] Root crash:", err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
          <div className="max-w-lg text-center">
            <p className="text-sm font-semibold">Preview runtime error</p>
            <p className="mt-2 text-xs text-muted-foreground break-words">
              {this.state.message}
            </p>
            {this.state.stack && (
              <pre className="mt-3 text-left text-[10px] leading-4 text-muted-foreground/80 max-h-40 overflow-auto rounded border border-border/60 p-2">
                {this.state.stack}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const convexUrl =
  typeof import.meta.env.VITE_CONVEX_URL === "string"
    ? import.meta.env.VITE_CONVEX_URL
    : "";

if (convexUrl.trim() === "") {
  // In production, the app cannot connect to Convex without a valid URL.
  // Render a minimal startup screen so the app is visible instead of
  // crashing to a black screen.
  console.warn(
    "[InfraRisk] VITE_CONVEX_URL is not configured for this deployment."
  );
}

const convex = new ConvexReactClient(convexUrl);

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*"
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("[InfraRisk] #root not found.");
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <RootErrorBoundary>
      <ToolbarErrorBoundary>
        <VlyToolbarFallback />
      </ToolbarErrorBoundary>
      {convexUrl.trim() === "" ? (
        <ConvexNotConfiguredScreen />
      ) : (
        <ConvexAuthProvider client={convex}>
          <BrowserRouter>
            <RouteSyncer />
            <Suspense fallback={<RouteLoading />}>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                  path="/auth"
                  element={<AuthPage redirectAfterAuth="/dashboard" />}
                />
                <Route
                  path="/dashboard"
                  element={
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/inspect"
                  element={
                    <RequireAuth>
                      <Inspect />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/priority-queue"
                  element={
                    <RequireAuth>
                      <PriorityQueue />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/assets"
                  element={
                    <RequireAuth>
                      <Assets />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/map"
                  element={
                    <RequireAuth>
                      <MapPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/reports"
                  element={
                    <RequireAuth>
                      <Reports />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/architecture"
                  element={
                    <RequireAuth>
                      <Architecture />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/responsible-ai"
                  element={
                    <RequireAuth>
                      <ResponsibleAI />
                    </RequireAuth>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster />
        </ConvexAuthProvider>
      )}
    </RootErrorBoundary>
  </StrictMode>
);
