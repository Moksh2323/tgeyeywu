import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { RefreshCw, Bot, Lock, Users, Terminal, CheckCircle, Copy, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const activityData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  users: Math.floor(Math.random() * 3) + (i >= 10 && i <= 14 ? Math.floor(Math.random() * 4) : 0),
}));

const Index = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-sm">Welcome to your Telebot Creator control center</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2 border-border text-foreground hover:bg-muted">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Bot className="h-4 w-4" />
              My Bots
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Total Bots"
            value="4102"
            description="All bots in your account"
            icon={Lock}
            iconColorClass="bg-stat-yellow/15 text-stat-yellow"
          />
          <StatCard
            label="Active Users"
            value="9"
            description="Active in last 24 hours"
            icon={Users}
            iconColorClass="bg-stat-purple/15 text-stat-purple"
          />
          <StatCard
            label="Commands"
            value="17"
            description="Executed in last 24h"
            icon={Terminal}
            iconColorClass="bg-stat-teal/15 text-stat-teal"
          />
          <StatCard
            label="Working"
            value="3243"
            description="79% of total bots"
            icon={CheckCircle}
            iconColorClass="bg-stat-green/15 text-stat-green"
          />
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard
            label="Cloned Bots"
            value="28"
            description="Cloned from templates"
            icon={Copy}
            iconColorClass="bg-stat-teal/15 text-stat-teal"
          />
          <StatCard
            label="Transferred"
            value="7"
            description="From other accounts"
            icon={ArrowLeftRight}
            iconColorClass="bg-stat-pink/15 text-stat-pink"
          />
        </div>

        {/* Activity Chart */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">User Activity (24h)</h2>
              <p className="text-sm text-muted-foreground">Hourly user engagement overview</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Active Users
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={activityData}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(258, 75%, 60%)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(258, 75%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 12%, 18%)" />
              <XAxis dataKey="hour" stroke="hsl(220, 10%, 40%)" fontSize={12} tickLine={false} />
              <YAxis stroke="hsl(220, 10%, 40%)" fontSize={12} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(230, 15%, 12%)",
                  border: "1px solid hsl(230, 12%, 18%)",
                  borderRadius: "8px",
                  color: "hsl(220, 20%, 90%)",
                }}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="hsl(258, 75%, 60%)"
                fillOpacity={1}
                fill="url(#colorUsers)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
