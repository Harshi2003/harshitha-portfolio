import { useState } from "react";
import { motion } from "framer-motion";
import { Glyph } from "./HomeIcons";
import amalfiPolaroid from "../assets/images/amalfi-polaroid.png";
import amalfiScrapbook from "../assets/images/amalfi-scrapbook.png";
import featureCards from "../assets/images/feature-cards.png";
import worldMap from "../assets/images/world-map.png";

const AN = {
  saffron: "#D35400",
  amber: "#F4A261",
  sand: "#F6E7D7",
  espresso: "#3E2723",
  olive: "#6B7F6B",
};

function RingScore({ value, size = 40, inner = 32 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0"
      style={{ width: size, height: size, background: `conic-gradient(${AN.saffron} ${value * 3.6}deg, ${AN.sand} 0deg)` }}
    >
      <div className="rounded-full flex items-center justify-center bg-white" style={{ width: inner, height: inner }}>
        <span className="text-[10px] font-display font-bold" style={{ color: AN.saffron }}>
          {value}
        </span>
      </div>
    </div>
  );
}

function Bar({ pct }) {
  return (
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: AN.sand }}>
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: AN.saffron }} />
    </div>
  );
}

function Row({ icon, title, sub, right, tone = "white" }) {
  return (
    <div
      className="rounded-lg p-2 flex items-center gap-2"
      style={{ background: tone === "white" ? "white" : tone, boxShadow: tone === "white" ? "0 1px 2px rgba(62,39,35,0.06)" : "none" }}
    >
      {icon && (
        <span className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: AN.sand, color: AN.saffron }}>
          <Glyph name={icon} className="text-[10px]" />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-[8px] font-semibold truncate" style={{ color: AN.espresso }}>
          {title}
        </p>
        {sub && (
          <p className="text-[6.5px] truncate" style={{ color: AN.espresso, opacity: 0.6 }}>
            {sub}
          </p>
        )}
      </div>
      {right && (
        <span className="text-[6.5px] font-semibold shrink-0" style={{ color: AN.saffron }}>
          {right}
        </span>
      )}
    </div>
  );
}

/* ---------- Concept A: AI Copilot ---------- */

const COPILOT_NAV = [
  { key: "home", label: "Home", icon: "pin" },
  { key: "trips", label: "Trips", icon: "briefcase" },
  { key: "docs", label: "Docs", icon: "server" },
  { key: "alerts", label: "Alerts", icon: "sparkle" },
  { key: "nora", label: "Nora", icon: "chat" },
  { key: "profile", label: "Profile", icon: "connect" },
];

const READINESS = [
  { label: "Travel documents", status: "done" },
  { label: "Flights", status: "done" },
  { label: "Accommodation", status: "done" },
  { label: "Activities", status: "partial", note: "2 booked" },
  { label: "Insurance", status: "pending", note: "Recommended" },
];

const DOC_CATEGORIES = [
  { icon: "briefcase", label: "Flights", note: "2 bookings confirmed" },
  { icon: "building", label: "Hotels", note: "2 bookings confirmed" },
  { icon: "server", label: "IDs & Passport", note: "Secure" },
  { icon: "sparkle", label: "Insurance", note: "1 policy active" },
];

const UPCOMING = [
  { place: "Amalfi Coast, Italy", dates: "Oct 21 – 25", days: "Departs in 4 days" },
  { place: "Kyoto, Japan", dates: "Nov 2 – 9", days: "Departs in 16 days" },
];

const TIMELINE = [
  { time: "9:15 AM", title: "SFO → NAP", sub: "Flight · On time" },
  { time: "11:55 AM", title: "Check-in opens", sub: "Online check-in available" },
  { time: "3:00 PM", title: "Hotel check-in", sub: "Casa Serenità, Amalfi" },
];

const ALERTS = [
  { level: "high", title: "Heavy rain forecast", sub: "Oct 22 – 23 · Plan flexibility" },
  { level: "medium", title: "Airport busier than usual", sub: "Expect longer lines" },
  { level: "low", title: "Currency rate favorable", sub: "Better than usual right now" },
];

const CHAT = [
  { from: "nora", text: "Hi, I'm Nora 👋 How can I help?" },
  { from: "user", text: "Do I need a visa for Italy?" },
  { from: "nora", text: "U.S. passport holders don't need a visa for stays under 90 days." },
];

function ProfileScreen() {
  return (
    <div className="flex flex-col">
      <div className="h-10 shrink-0" style={{ background: `linear-gradient(135deg, ${AN.saffron}, ${AN.amber})` }} />
      <div className="px-3 -mt-5 flex flex-col items-center gap-1.5">
        <span
          className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm border-2 border-white shadow-sm"
          style={{ background: AN.sand, color: AN.saffron }}
        >
          H
        </span>
        <div className="text-center">
          <p className="text-[10px] font-display font-bold" style={{ color: AN.espresso }}>
            Harshi
          </p>
          <p className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.55 }}>
            Explorer · 3 trips completed
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 w-full text-center py-1">
          {[
            ["12", "Saved"],
            ["3", "Trips"],
            ["24", "Insights"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display font-bold text-[10px]" style={{ color: AN.saffron }}>
                {v}
              </p>
              <p className="text-[6px]" style={{ color: AN.espresso, opacity: 0.55 }}>
                {l}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full rounded-lg bg-white shadow-sm p-2">
          <p className="text-[6.5px] font-semibold uppercase tracking-wide mb-1" style={{ color: AN.espresso, opacity: 0.5 }}>
            Travel preferences
          </p>
          {[
            ["Seat", "Window"],
            ["Meal", "Vegetarian"],
            ["Language", "English"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between py-0.5">
              <span className="text-[7px]" style={{ color: AN.espresso, opacity: 0.7 }}>
                {k}
              </span>
              <span className="text-[7px] font-semibold" style={{ color: AN.espresso }}>
                {v}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-1.5">
          {["Payment methods", "Notifications", "Privacy & security", "Help & support"].map((row) => (
            <div
              key={row}
              className="rounded-lg bg-white shadow-sm px-2.5 py-1.5 flex items-center justify-between text-[7.5px] font-medium"
              style={{ color: AN.espresso }}
            >
              {row}
              <span style={{ opacity: 0.35 }}>›</span>
            </div>
          ))}
        </div>

        <p className="text-[7.5px] font-semibold pt-1" style={{ color: AN.saffron }}>
          Sign out
        </p>
      </div>
    </div>
  );
}

function CopilotScreen({ tab }) {
  if (tab === "home") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <div>
          <p className="text-[10px] font-display font-bold" style={{ color: AN.espresso }}>
            Good morning, Harshi 👋
          </p>
          <p className="text-[7px]" style={{ color: AN.espresso, opacity: 0.6 }}>
            Here's what matters today.
          </p>
        </div>

        <div className="rounded-xl bg-white shadow-sm p-2.5 flex items-center gap-2.5">
          <RingScore value={85} />
          <div className="min-w-0">
            <p className="text-[9px] font-semibold" style={{ color: AN.espresso }}>
              Excellent
            </p>
            <p className="text-[7px] leading-tight" style={{ color: AN.espresso, opacity: 0.6 }}>
              You're all set for your upcoming trip.
            </p>
          </div>
        </div>

        <div className="rounded-xl p-2.5 flex items-center gap-2" style={{ background: AN.sand }}>
          <span className="text-xs shrink-0" style={{ color: AN.saffron }}>
            <Glyph name="sparkle" className="text-xs" />
          </span>
          <p className="text-[8px] font-medium leading-tight" style={{ color: AN.espresso }}>
            Next best action: upload your travel documents for review.
          </p>
        </div>

        <p className="text-[7.5px] font-semibold uppercase tracking-wide pt-1" style={{ color: AN.espresso, opacity: 0.5 }}>
          Upcoming
        </p>
        {UPCOMING.map((u) => (
          <Row key={u.place} title={u.place} sub={u.dates} right={u.days} />
        ))}
      </div>
    );
  }

  if (tab === "trips") {
    const statusColor = { done: AN.olive, partial: AN.amber, pending: `${AN.espresso}40` };
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <div>
          <p className="text-[9px] font-display font-bold" style={{ color: AN.espresso }}>
            Amalfi Coast Trip
          </p>
          <p className="text-[7px]" style={{ color: AN.espresso, opacity: 0.6 }}>
            Oct 21 – 25 · Sorrento, Italy
          </p>
        </div>

        <div className="rounded-lg bg-white shadow-sm p-2">
          <p className="text-[7px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: AN.espresso, opacity: 0.5 }}>
            Readiness
          </p>
          <div className="flex flex-col gap-1">
            {READINESS.map((r) => (
              <div key={r.label} className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[7.5px]" style={{ color: AN.espresso }}>
                  <span className="w-2.5 h-2.5 rounded-full flex items-center justify-center shrink-0" style={{ background: statusColor[r.status] }}>
                    {r.status === "done" && <span className="text-white text-[6px]">✓</span>}
                  </span>
                  {r.label}
                </span>
                {r.note && (
                  <span className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.5 }}>
                    {r.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-1">
          {["21", "22", "23", "24", "25"].map((d, i) => (
            <span
              key={d}
              className="flex-1 text-center rounded-md py-1 text-[8px] font-semibold"
              style={i === 0 ? { background: AN.saffron, color: "white" } : { background: AN.sand, color: AN.espresso, opacity: 0.7 }}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {TIMELINE.map((t) => (
            <Row key={t.title} title={t.title} sub={t.sub} right={t.time} />
          ))}
        </div>
      </div>
    );
  }

  if (tab === "docs") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <div className="rounded-full bg-white shadow-sm px-2.5 py-1.5" style={{ color: AN.espresso }}>
          <span className="text-[7px] opacity-50">Search documents</span>
        </div>
        <div className="flex gap-1 overflow-hidden">
          {["All", "Flights", "Hotels", "IDs"].map((c, i) => (
            <span
              key={c}
              className="text-[6.5px] font-semibold px-2 py-1 rounded-full shrink-0"
              style={i === 0 ? { background: AN.saffron, color: "white" } : { background: AN.sand, color: AN.espresso, opacity: 0.7 }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {DOC_CATEGORIES.map((d) => (
            <div key={d.label} className="rounded-lg bg-white shadow-sm p-2">
              <span className="w-5 h-5 rounded-md flex items-center justify-center mb-1" style={{ background: AN.sand, color: AN.saffron }}>
                <Glyph name={d.icon} className="text-[9px]" />
              </span>
              <p className="text-[7.5px] font-semibold" style={{ color: AN.espresso }}>
                {d.label}
              </p>
              <p className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.5 }}>
                {d.note}
              </p>
            </div>
          ))}
        </div>
        <span className="text-[7.5px] font-semibold text-center rounded-full py-1.5 mt-0.5" style={{ background: AN.saffron, color: "white" }}>
          + Add Document
        </span>
      </div>
    );
  }

  if (tab === "alerts") {
    const levelColor = { high: AN.saffron, medium: AN.amber, low: AN.olive };
    return (
      <div className="px-3 pt-3 flex flex-col gap-1.5">
        <p className="text-[7px]" style={{ color: AN.espresso, opacity: 0.6 }}>
          We're watching so you don't have to.
        </p>
        {ALERTS.map((a) => (
          <div key={a.title} className="rounded-lg bg-white shadow-sm p-2 flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: levelColor[a.level] }} />
            <div className="min-w-0">
              <p className="text-[8px] font-semibold" style={{ color: AN.espresso }}>
                {a.title}
              </p>
              <p className="text-[7px]" style={{ color: AN.espresso, opacity: 0.6 }}>
                {a.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tab === "nora") {
    return (
      <div className="px-3 pt-3 flex flex-col h-full">
        <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
          {CHAT.map((c, i) => (
            <div
              key={i}
              className={`rounded-lg px-2 py-1.5 text-[7.5px] leading-snug max-w-[85%] ${c.from === "user" ? "self-end text-white" : "self-start"}`}
              style={{ background: c.from === "user" ? AN.saffron : "white", color: c.from === "user" ? "white" : AN.espresso }}
            >
              {c.text}
            </div>
          ))}
        </div>
        <div className="rounded-full bg-white shadow-sm px-2.5 py-1.5 mt-1.5" style={{ color: AN.espresso }}>
          <span className="text-[7px] opacity-50">Ask Nora anything…</span>
        </div>
      </div>
    );
  }

  return <ProfileScreen />;
}

/* ---------- Concept B: Trip Prep ---------- */

const PREP_NAV = [
  { key: "home", label: "Home", icon: "pin" },
  { key: "pack", label: "Pack", icon: "briefcase" },
  { key: "vault", label: "Vault", icon: "server" },
  { key: "budget", label: "Budget", icon: "barchart" },
  { key: "transport", label: "Transit", icon: "rocket" },
  { key: "weather", label: "Weather", icon: "cloud" },
];

const TODAY_TASKS = [
  { title: "Check passport expiry", due: "Due today" },
  { title: "Book airport transfer", due: "Due today" },
  { title: "Buy travel insurance", due: "Due tomorrow" },
];

const PACK_CATEGORIES = [
  { icon: "briefcase", label: "Clothing", note: "18 items · 7.2 kg" },
  { icon: "sparkle", label: "Toiletries", note: "12 items · 2.1 kg" },
  { icon: "server", label: "Electronics", note: "6 items · 1.8 kg" },
  { icon: "leaf", label: "Health & essentials", note: "8 items · 1.0 kg" },
];

const DOCS_ESSENTIAL = [
  { icon: "server", label: "Passport", note: "Expires Mar 18, 2033", status: "Valid" },
  { icon: "flask", label: "Thailand e-Visa", note: "Valid May 28 – Jun 6", status: "Approved" },
  { icon: "sparkle", label: "Travel Insurance", note: "Policy #WN12345678", status: "Active" },
];

const EXPENSES = [
  { label: "Flights (Emirates)", amount: "$780", status: "Paid" },
  { label: "Hotel (9 Nights)", amount: "$720", status: "Paid" },
  { label: "Travel Insurance", amount: "$98", status: "Paid" },
  { label: "e-Visa", amount: "$52", status: "Paid" },
  { label: "Airport Transfer", amount: "$45", status: "Pending" },
];

const RIDE_OPTIONS = [
  { label: "Uber", price: "$26 – $30", eta: "~50 min" },
  { label: "Taxi", price: "$25 – $30", eta: "~50 min" },
  { label: "Public Transport", price: "$6 – $8", eta: "~75 min" },
];

const FORECAST = [
  { day: "WED", temp: "31°" },
  { day: "THU", temp: "32°" },
  { day: "FRI", temp: "31°" },
  { day: "SAT", temp: "29°" },
  { day: "SUN", temp: "30°" },
];

function PrepScreen({ tab }) {
  if (tab === "home") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <p className="text-[10px] font-display font-bold" style={{ color: AN.espresso }}>
          Good morning, Harshi ☀️
        </p>

        <div
          className="rounded-xl p-2.5 text-white"
          style={{ background: `linear-gradient(135deg, ${AN.olive}, ${AN.saffron})` }}
        >
          <p className="text-[8.5px] font-display font-bold">Thailand Getaway</p>
          <p className="text-[6.5px] opacity-90 mb-1.5">May 28 – Jun 6 · 10 Days</p>
          <p className="text-[16px] font-display font-bold leading-none">16</p>
          <p className="text-[6px] opacity-80">DAYS until your trip</p>
        </div>

        <div className="rounded-xl bg-white shadow-sm p-2.5">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[7.5px] font-semibold" style={{ color: AN.espresso }}>
              Your Prep Progress
            </p>
            <span className="text-[8px] font-display font-bold" style={{ color: AN.saffron }}>
              68%
            </span>
          </div>
          <Bar pct={68} />
          <p className="text-[6.5px] mt-1" style={{ color: AN.espresso, opacity: 0.5 }}>
            17 of 25 tasks completed
          </p>
        </div>

        <p className="text-[7.5px] font-semibold uppercase tracking-wide pt-0.5" style={{ color: AN.espresso, opacity: 0.5 }}>
          Today's Plan
        </p>
        {TODAY_TASKS.map((t) => (
          <Row key={t.title} title={t.title} right={t.due} />
        ))}
      </div>
    );
  }

  if (tab === "pack") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-1 text-center rounded-lg bg-white shadow-sm p-2">
          {[
            ["2", "Bags"],
            ["23.5 kg", "Total"],
            ["2.5 kg", "Remaining"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="text-[9px] font-display font-bold" style={{ color: AN.espresso }}>
                {v}
              </p>
              <p className="text-[6px]" style={{ color: AN.espresso, opacity: 0.5 }}>
                {l}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {PACK_CATEGORIES.map((c) => (
            <Row key={c.label} icon={c.icon} title={c.label} sub={c.note} right="›" />
          ))}
        </div>
        <p className="text-[7px] font-semibold uppercase tracking-wide pt-0.5" style={{ color: AN.espresso, opacity: 0.5 }}>
          Bag Allocation
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-lg bg-white shadow-sm p-2">
            <p className="text-[7px] font-semibold" style={{ color: AN.espresso }}>
              Checked Bag
            </p>
            <p className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.5 }}>
              15.5 kg / 23 kg
            </p>
          </div>
          <div className="rounded-lg bg-white shadow-sm p-2">
            <p className="text-[7px] font-semibold" style={{ color: AN.espresso }}>
              Carry-on
            </p>
            <p className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.5 }}>
              8.0 kg / 10 kg
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (tab === "vault") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.5 }}>
          Essential Documents
        </p>
        {DOCS_ESSENTIAL.map((d) => (
          <Row key={d.label} icon={d.icon} title={d.label} sub={d.note} right={d.status} />
        ))}
        <p className="text-[7px] font-semibold uppercase tracking-wide pt-0.5" style={{ color: AN.espresso, opacity: 0.5 }}>
          Travel Bookings
        </p>
        <Row icon="building" title="Hotel Reservation" sub="May 28 – Jun 6 · Bangkok · 9 Nights" />
        <Row icon="rocket" title="Boarding Pass" sub="May 28 · DXB → BKK · EK372" />
      </div>
    );
  }

  if (tab === "budget") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <div className="rounded-xl bg-white shadow-sm p-2.5 flex items-center gap-2.5">
          <div
            className="rounded-full flex items-center justify-center shrink-0"
            style={{
              width: 44,
              height: 44,
              background: `conic-gradient(${AN.olive} 0% 51%, ${AN.amber} 51% 88%, ${AN.sand} 88% 100%)`,
            }}
          >
            <div className="rounded-full bg-white flex items-center justify-center" style={{ width: 32, height: 32 }}>
              <span className="text-[7px] font-display font-bold" style={{ color: AN.espresso }}>
                $2.4k
              </span>
            </div>
          </div>
          <div>
            <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.5 }}>
              Estimated Spend
            </p>
            <p className="text-[10px] font-display font-bold" style={{ color: AN.espresso }}>
              $2,450
            </p>
            <p className="text-[6px]" style={{ color: AN.espresso, opacity: 0.5 }}>
              for 10 days
            </p>
          </div>
        </div>
        <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.5 }}>
          Pre-Trip Purchases
        </p>
        <div className="flex flex-col gap-1">
          {EXPENSES.map((e) => (
            <div key={e.label} className="flex items-center justify-between rounded-lg bg-white shadow-sm px-2 py-1.5">
              <span className="text-[7.5px] font-medium truncate" style={{ color: AN.espresso }}>
                {e.label}
              </span>
              <span className="flex items-center gap-1 shrink-0">
                <span className="text-[7.5px] font-semibold" style={{ color: AN.espresso }}>
                  {e.amount}
                </span>
                <span
                  className="text-[6px] font-semibold px-1 py-0.5 rounded-full"
                  style={{ background: e.status === "Paid" ? `${AN.olive}22` : `${AN.amber}33`, color: e.status === "Paid" ? AN.olive : AN.saffron }}
                >
                  {e.status}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tab === "transport") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <p className="text-[7px]" style={{ color: AN.espresso, opacity: 0.6 }}>
          DXB → BKK · May 28, 08:45
        </p>
        <div className="rounded-lg p-2" style={{ background: AN.sand }}>
          <p className="text-[6.5px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.6 }}>
            Recommended Departure
          </p>
          <p className="text-[9px] font-display font-bold" style={{ color: AN.saffron }}>
            Leave by 05:15
          </p>
          <p className="text-[6px]" style={{ color: AN.espresso, opacity: 0.5 }}>
            3h 30m before flight · Traffic normal
          </p>
        </div>
        <div className="rounded-lg bg-white shadow-sm p-2 flex items-center justify-between">
          <div>
            <p className="text-[8px] font-semibold" style={{ color: AN.espresso }}>
              Careem Airport Ride
            </p>
            <p className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.55 }}>
              05:15 · ~45 min · $28 – $32
            </p>
          </div>
          <span className="text-[6.5px] font-semibold rounded-full px-2 py-1" style={{ background: AN.saffron, color: "white" }}>
            Book
          </span>
        </div>
        <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.5 }}>
          Backup Options
        </p>
        {RIDE_OPTIONS.map((r) => (
          <Row key={r.label} title={r.label} sub={r.eta} right={r.price} />
        ))}
      </div>
    );
  }

  return (
    <div className="px-3 pt-3 flex flex-col gap-2">
      <div className="rounded-xl bg-white shadow-sm p-2.5">
        <p className="text-[7px] font-semibold" style={{ color: AN.espresso, opacity: 0.6 }}>
          Bangkok, Thailand
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-display font-bold" style={{ color: AN.espresso }}>
            31°
          </p>
          <div className="text-right">
            <p className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.6 }}>
              Rain chance 40%
            </p>
            <p className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.6 }}>
              Humidity 72%
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-1">
        {FORECAST.map((f) => (
          <div key={f.day} className="flex-1 rounded-lg bg-white shadow-sm py-1.5 text-center">
            <p className="text-[6px] font-semibold" style={{ color: AN.espresso, opacity: 0.5 }}>
              {f.day}
            </p>
            <p className="text-[7.5px] font-display font-bold" style={{ color: AN.saffron }}>
              {f.temp}
            </p>
          </div>
        ))}
      </div>
      <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.5 }}>
        Things to Buy Before You Go
      </p>
      <Row icon="server" title="Universal Travel Adapter" />
      <Row icon="leaf" title="Quick Dry Towel" />
    </div>
  );
}

/* ---------- Concept C: Family Coordinator ---------- */

const FAMILY_NAV = [
  { key: "home", label: "Home", icon: "pin" },
  { key: "readiness", label: "People", icon: "connect" },
  { key: "docs", label: "Docs", icon: "server" },
  { key: "timeline", label: "Tasks", icon: "calendar" },
  { key: "profile", label: "Profile", icon: "chat" },
];

const TRAVELERS = [
  { name: "Harshi (You)", role: "Adult", score: 90 },
  { name: "Meera", role: "Adult", score: 80 },
  { name: "Riya", role: "Child, 12", score: 70 },
  { name: "Kabir", role: "Child, 7", score: 60 },
];

const FAMILY_TASKS = [
  { title: "Upload Riya's passport", who: "Meera", priority: "High" },
  { title: "Buy travel medicines", who: "Harshi", priority: "High" },
  { title: "Book airport cab", who: "Kabir", priority: "Medium" },
  { title: "Print all confirmations", who: "Meera", priority: "Medium" },
];

function FamilyScreen({ tab }) {
  if (tab === "home") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <div>
          <p className="text-[9px] font-display font-bold" style={{ color: AN.espresso }}>
            Thailand Family Trip
          </p>
          <p className="text-[7px]" style={{ color: AN.espresso, opacity: 0.6 }}>
            Jun 12 – 20, 2025
          </p>
        </div>

        <div className="rounded-xl bg-white shadow-sm p-2.5">
          <p className="text-[7px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: AN.espresso, opacity: 0.5 }}>
            Overall Readiness
          </p>
          <div className="flex items-center gap-2.5">
            <RingScore value={84} />
            <div className="flex flex-col gap-0.5">
              <span className="text-[6.5px]" style={{ color: AN.olive }}>
                ● Completed 21
              </span>
              <span className="text-[6.5px]" style={{ color: AN.amber }}>
                ● In Progress 6
              </span>
              <span className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.5 }}>
                ● To Do 4
              </span>
            </div>
          </div>
        </div>

        <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.5 }}>
          Travelers · 4 members
        </p>
        <div className="flex gap-1.5">
          {TRAVELERS.map((t) => (
            <span
              key={t.name}
              className="w-6 h-6 rounded-full flex items-center justify-center text-[7px] font-display font-bold text-white shrink-0"
              style={{ background: AN.saffron }}
            >
              {t.name[0]}
            </span>
          ))}
        </div>

        <div className="rounded-lg p-2 flex items-start gap-1.5" style={{ background: AN.sand }}>
          <span className="text-[9px]" style={{ color: AN.saffron }}>
            <Glyph name="sparkle" className="text-[9px]" />
          </span>
          <p className="text-[6.5px] leading-tight" style={{ color: AN.espresso }}>
            <span className="font-semibold">Tip from Nora:</span> you're doing great! Just a few things left to make
            this trip smooth.
          </p>
        </div>
      </div>
    );
  }

  if (tab === "readiness") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-1.5">
        {TRAVELERS.map((t) => (
          <div key={t.name} className="rounded-lg bg-white shadow-sm p-2 flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-[7px] font-display font-bold text-white shrink-0"
              style={{ background: AN.olive }}
            >
              {t.name[0]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[7.5px] font-semibold truncate" style={{ color: AN.espresso }}>
                {t.name}
              </p>
              <p className="text-[6px]" style={{ color: AN.espresso, opacity: 0.5 }}>
                {t.role}
              </p>
            </div>
            <span className="text-[8px] font-display font-bold shrink-0" style={{ color: AN.saffron }}>
              {t.score}%
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (tab === "docs") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-2">
        <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.5 }}>
          Pinned
        </p>
        <Row icon="server" title="Australia eTA – Group" sub="PDF · Added by Harshi" />
        <Row icon="building" title="Hotel Confirmation" sub="PDF · Added by Meera" />
        <p className="text-[7px] font-semibold uppercase tracking-wide pt-0.5" style={{ color: AN.espresso, opacity: 0.5 }}>
          All Documents
        </p>
        <Row icon="server" title="Riya's Passport" sub="JPG · Added by Meera" />
        <Row icon="server" title="Kabir's Birth Certificate" sub="PDF · Added by Harshi" />
      </div>
    );
  }

  if (tab === "timeline") {
    return (
      <div className="px-3 pt-3 flex flex-col gap-1.5">
        <p className="text-[7px] font-semibold uppercase tracking-wide" style={{ color: AN.espresso, opacity: 0.5 }}>
          Upcoming Tasks
        </p>
        {FAMILY_TASKS.map((t) => (
          <div key={t.title} className="rounded-lg bg-white shadow-sm p-2 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[7.5px] font-semibold truncate" style={{ color: AN.espresso }}>
                {t.title}
              </p>
              <p className="text-[6.5px]" style={{ color: AN.espresso, opacity: 0.55 }}>
                Assigned to {t.who}
              </p>
            </div>
            <span
              className="text-[6px] font-semibold px-1.5 py-0.5 rounded-full shrink-0"
              style={{ background: t.priority === "High" ? `${AN.saffron}22` : `${AN.amber}33`, color: AN.saffron }}
            >
              {t.priority}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return <ProfileScreen />;
}

/* ---------- Scrapbook decoration ---------- */

function Polaroid({ from, to, caption, rotate }) {
  return (
    <div className="inline-block" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="bg-white p-2 pb-3 rounded-sm shadow-lg relative">
        <span
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 opacity-70 rotate-2"
          style={{ background: `${AN.amber}55` }}
          aria-hidden="true"
        />
        <div className="w-36 h-24 rounded-sm" style={{ background: `linear-gradient(160deg, ${from}, ${to})` }} />
        {caption && (
          <p className="font-hand text-sm text-center pt-1.5" style={{ color: AN.espresso }}>
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}

function Note({ children, rotate = -2 }) {
  return (
    <p
      className="font-hand text-lg leading-snug inline-block"
      style={{ color: AN.saffron, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </p>
  );
}

/* ---------- Shell ---------- */

const CONCEPTS = [
  { key: "copilot", label: "AI Copilot", nav: COPILOT_NAV, Screen: CopilotScreen, tagline: "Your AI travel copilot" },
  { key: "prep", label: "Trip Prep", nav: PREP_NAV, Screen: PrepScreen, tagline: "Travel. Prepared beautifully." },
  { key: "family", label: "Family", nav: FAMILY_NAV, Screen: FamilyScreen, tagline: "Travel beautifully, together." },
];

export default function AppMockup() {
  const [conceptKey, setConceptKey] = useState("copilot");
  const concept = CONCEPTS.find((c) => c.key === conceptKey);
  const [tab, setTab] = useState(concept.nav[0].key);

  const switchConcept = (key) => {
    setConceptKey(key);
    setTab(CONCEPTS.find((c) => c.key === key).nav[0].key);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative py-8 lg:py-10 px-4 md:px-8 mb-2 lg:rounded-3xl lg:overflow-hidden"
    >
      <div className="hidden lg:block absolute inset-0 rounded-3xl overflow-hidden" style={{ background: `${AN.sand}40` }} aria-hidden="true">
        <img src={worldMap} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" />
      </div>

      <div className="relative grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-start">
        {/* Left: intro + polaroid + quote */}
        <div className="hidden lg:flex flex-col items-start gap-4 order-2 lg:order-1">
          <div>
            <p className="font-display text-4xl leading-none" style={{ color: AN.saffron }}>
              AskNora
            </p>
            <p className="font-hand text-xl border-b-2 inline-block pb-0.5" style={{ color: AN.espresso, borderColor: AN.saffron }}>
              Your AI travel copilot
            </p>
          </div>
          <p className="text-sm text-ink-soft leading-relaxed max-w-xs">
            Less planning. More living. AskNora helps you plan, organize, and enjoy meaningful trips — all in one
            place.
          </p>
          <img src={amalfiPolaroid} alt="Amalfi Coast, Italy" className="w-60 h-auto" style={{ transform: "rotate(-3deg)" }} />
          <Note>"A well planned trip is a happier you."</Note>
          <div className="relative w-full h-10">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 40" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M4 32 Q 70 4, 140 18 T 210 10"
                stroke={AN.espresso}
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="1 6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="absolute text-lg" style={{ right: 4, top: -4, transform: "rotate(-18deg)" }} aria-hidden="true">
              ✈️
            </span>
          </div>
        </div>

        {/* Center: concept switcher + phone */}
        <div className="flex flex-col items-center order-1 lg:order-2">
          <div className="flex gap-1.5 mb-4 flex-wrap justify-center">
            {CONCEPTS.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => switchConcept(c.key)}
                className="text-[10px] font-semibold px-3 py-1 rounded-full transition-colors"
                style={
                  conceptKey === c.key
                    ? { background: AN.saffron, color: "white" }
                    : { background: "white", color: AN.espresso, opacity: 0.6, border: `1px solid ${AN.sand}` }
                }
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative flex justify-center items-start">
            <span className="absolute -left-2 -top-2 text-2xl opacity-40 rotate-[-10deg]" style={{ color: AN.olive }} aria-hidden="true">
              <Glyph name="leaf" />
            </span>

            <div
              className="relative w-52 aspect-[9/19] rounded-[2.2rem] border-[8px] shadow-xl overflow-hidden flex flex-col"
              style={{ borderColor: AN.espresso, background: AN.sand }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full z-10" style={{ background: AN.espresso }} />

              <div className="flex items-center justify-between px-4 pt-7 text-[9px] font-semibold shrink-0" style={{ color: AN.espresso }}>
                <span>9:41</span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-1.5 rounded-sm" style={{ background: AN.espresso, opacity: 0.5 }} />
                  <span className="w-2.5 h-1.5 rounded-sm" style={{ background: AN.espresso, opacity: 0.5 }} />
                </span>
              </div>

              <div className="flex items-center justify-between px-4 pt-2 shrink-0">
                <div>
                  <p className="font-display font-bold text-base leading-none" style={{ color: AN.saffron }}>
                    AskNora
                  </p>
                  <p className="text-[6.5px] tracking-wide uppercase" style={{ color: AN.espresso, opacity: 0.6 }}>
                    {concept.tagline}
                  </p>
                </div>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-display font-semibold text-white shrink-0"
                  style={{ background: AN.saffron }}
                >
                  H
                </span>
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto relative">
                <motion.div
                  key={`${conceptKey}-${tab}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="h-full pb-2"
                >
                  <concept.Screen tab={tab} />
                </motion.div>
              </div>

              <div
                className="shrink-0 border-t px-1 py-2 flex justify-around"
                style={{ borderColor: `${AN.espresso}22`, background: `${AN.sand}F2` }}
              >
                {concept.nav.map((item) => (
                  <button key={item.key} type="button" onClick={() => setTab(item.key)} className="flex flex-col items-center gap-0.5">
                    <Glyph
                      name={item.icon}
                      className="text-[10px]"
                      style={{ color: tab === item.key ? AN.saffron : `${AN.espresso}80` }}
                    />
                    <span className="text-[5.5px] font-semibold" style={{ color: tab === item.key ? AN.saffron : `${AN.espresso}80` }}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="font-hand text-lg rotate-[-2deg] mt-4" style={{ color: AN.saffron }}>
            Good travels change people ♡
          </p>
        </div>

        {/* Right: feature callouts + scrapbook photo */}
        <div className="hidden lg:flex flex-col items-start gap-4 order-3">
          <img src={featureCards} alt="Plan Smarter, Stay Organized, Travel Together" className="w-72 h-auto" />
          <img src={amalfiScrapbook} alt="Amalfi Coast travel scrapbook" className="w-64 h-auto" />
        </div>
      </div>
    </motion.div>
  );
}
