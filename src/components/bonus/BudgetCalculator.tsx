import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { Calculator, Users, Calendar, DollarSign } from 'lucide-react';
import { Card } from '../common/Card';

export const BudgetCalculator: React.FC = () => {
  const [days, setDays] = useState<number>(4);
  const [travelers, setTravelers] = useState<number>(2);

  // Per-person per-day default estimates (in INR ₹)
  const [stayCostPerDay, setStayCostPerDay] = useState<number>(2000);
  const [foodCostPerDay, setFoodCostPerDay] = useState<number>(800);
  const [activitiesCostPerDay, setActivitiesCostPerDay] = useState<number>(600);
  const [travelTotal, setTravelTotal] = useState<number>(3000); // flat travel per person
  const [miscTotal, setMiscTotal] = useState<number>(1000);

  // Calculations
  const totalStay = stayCostPerDay * days * travelers;
  const totalFood = foodCostPerDay * days * travelers;
  const totalActivities = activitiesCostPerDay * days * travelers;
  const totalTravel = travelTotal * travelers;
  const totalMisc = miscTotal * travelers;

  const grandTotal = totalStay + totalFood + totalActivities + totalTravel + totalMisc;
  const perPersonTotal = Math.round(grandTotal / (travelers || 1));
  const perDayTotal = Math.round(grandTotal / (days || 1));

  const chartData = [
    { name: 'Accommodation', value: totalStay, color: '#0284c7' },
    { name: 'Food & Dining', value: totalFood, color: '#f59e0b' },
    { name: 'Activities', value: totalActivities, color: '#10b981' },
    { name: 'Travel / Flights', value: totalTravel, color: '#38bdf8' },
    { name: 'Misc & Shopping', value: totalMisc, color: '#f97316' }
  ];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
            Smart Trip Budget Calculator
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Estimate expenses per traveler, per day, and visualize your breakdown with Recharts graphics.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white font-display">
              Trip Parameters & Cost Inputs
            </h3>

            {/* Days & Travelers */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-500" /> Duration (Days)
                </label>
                <input
                  type="number"
                  min="1"
                  max="30"
                  value={days}
                  onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-brand-500" /> People / Travelers
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={travelers}
                  onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>
            </div>

            {/* Cost Slider & Number Inputs */}
            <div className="space-y-3 pt-2 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Stay / Night (per room)</span>
                  <span className="text-brand-500 font-extrabold">₹{stayCostPerDay}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={stayCostPerDay}
                  onChange={(e) => setStayCostPerDay(parseInt(e.target.value))}
                  className="w-full accent-brand-500"
                />
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Food & Drinks / Person / Day</span>
                  <span className="text-amber-500 font-extrabold">₹{foodCostPerDay}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={foodCostPerDay}
                  onChange={(e) => setFoodCostPerDay(parseInt(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Activities & Tickets / Person / Day</span>
                  <span className="text-emerald-500 font-extrabold">₹{activitiesCostPerDay}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={activitiesCostPerDay}
                  onChange={(e) => setActivitiesCostPerDay(parseInt(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Roundtrip Travel / Person</span>
                  <span className="text-sky-500 font-extrabold">₹{travelTotal}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={travelTotal}
                  onChange={(e) => setTravelTotal(parseInt(e.target.value))}
                  className="w-full accent-sky-500"
                />
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300 mb-1">
                  <span>Shopping & Misc / Person</span>
                  <span className="text-accent-orange font-extrabold">₹{miscTotal}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="250"
                  value={miscTotal}
                  onChange={(e) => setMiscTotal(parseInt(e.target.value))}
                  className="w-full accent-accent-orange"
                />
              </div>
            </div>

          </Card>
        </div>

        {/* Chart & Summary Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white shadow-lg space-y-1">
              <span className="text-[10px] uppercase font-bold text-brand-100 block">Total Est. Budget</span>
              <span className="text-2xl font-extrabold font-display">₹{grandTotal.toLocaleString()}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Cost Per Person</span>
              <span className="text-xl font-extrabold font-display text-slate-900 dark:text-white">₹{perPersonTotal.toLocaleString()}</span>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Cost Per Day</span>
              <span className="text-xl font-extrabold font-display text-slate-900 dark:text-white">₹{perDayTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* Recharts Graphical Visualizer */}
          <Card className="space-y-4">
            <h3 className="font-bold text-sm text-slate-900 dark:text-white font-display">
              Expense Distribution Breakdown
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {/* Pie Chart */}
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={75}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(val: number) => [`₹${val.toLocaleString()}`, 'Estimated']}
                      contentStyle={{ borderRadius: '0.75rem', fontSize: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Legend & Amounts list */}
              <div className="space-y-2 text-xs">
                {chartData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="font-medium text-slate-700 dark:text-slate-300">{item.name}</span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white">₹{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

        </div>

      </div>
    </div>
  );
};
