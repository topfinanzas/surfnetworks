import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

export interface MetricItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface StepItem {
  title: string;
  description: string;
  icon: LucideIcon;
}