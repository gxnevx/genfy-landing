import { cn } from "@/lib/cn";

interface MetricCardProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricCard({ value, label, className }: MetricCardProps) {
  return (
    <div className={cn("metric-card", className)}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
