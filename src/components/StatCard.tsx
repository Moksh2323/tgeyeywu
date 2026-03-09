import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  iconColorClass: string;
}

export function StatCard({ label, value, description, icon: Icon, iconColorClass }: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          {label}
        </span>
        <div className={`p-2 rounded-lg ${iconColorClass}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}
