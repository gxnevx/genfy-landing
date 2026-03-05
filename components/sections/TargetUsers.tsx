"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLang } from "@/contexts/LangContext";
import {
  VideoIcon,
  ShoppingBag,
  BarChart2,
  Megaphone,
  Building2,
} from "lucide-react";

interface UserType {
  nameKey: keyof import("@/lib/i18n").Translations;
  descKey: keyof import("@/lib/i18n").Translations;
  icon: React.ReactNode;
  gradient: string;
}

const USER_TYPES: UserType[] = [
  {
    nameKey: "user_creator_name",
    descKey: "user_creator_desc",
    icon: <VideoIcon size={20} />,
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    nameKey: "user_seller_name",
    descKey: "user_seller_desc",
    icon: <ShoppingBag size={20} />,
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    nameKey: "user_manager_name",
    descKey: "user_manager_desc",
    icon: <BarChart2 size={20} />,
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    nameKey: "user_marketer_name",
    descKey: "user_marketer_desc",
    icon: <Megaphone size={20} />,
    gradient: "from-pink-500/20 to-pink-500/5",
  },
  {
    nameKey: "user_business_name",
    descKey: "user_business_desc",
    icon: <Building2 size={20} />,
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
];

export function TargetUsers() {
  const { t } = useLang();

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-tx tracking-tight mb-4">
              {t.users_title}
            </h2>
            <p className="text-tx2 text-sm max-w-xl mx-auto leading-relaxed">
              {t.users_subtitle}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USER_TYPES.map((user, i) => (
            <RevealOnScroll key={user.nameKey} delay={i * 70}>
              <div className="glass-card p-6 flex flex-col gap-4 group transition-all duration-200 hover:-translate-y-1 hover:border-ac/[0.14] hover:shadow-[var(--nx-glass-glow)] cursor-default">
                {/* Icon with gradient background */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${user.gradient} text-tx2 group-hover:text-tx transition-colors duration-200`}
                >
                  {user.icon}
                </div>

                <div>
                  <h3 className="text-tx font-semibold text-sm mb-2">
                    {t[user.nameKey] as string}
                  </h3>
                  <p className="text-tx2 text-sm leading-relaxed">
                    {t[user.descKey] as string}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
