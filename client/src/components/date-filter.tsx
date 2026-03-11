import { useState } from "react";
import { format, addDays, isSameDay } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

export function DateFilter() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));

  return (
    <div className="bg-primary text-primary-foreground pt-4 pb-4 px-4 -mx-4 -mt-4 mb-6 shadow-xl rounded-b-3xl relative z-10">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide max-w-2xl mx-auto">
        {dates.map((date) => {
          const isSelected = isSameDay(date, selectedDate);
          const isToday = isSameDay(date, new Date());
          
          return (
            <button
              key={date.toISOString()}
              onClick={() => setSelectedDate(date)}
              className={`
                flex flex-col items-center justify-center min-w-[3.5rem] h-16 rounded-xl transition-all duration-300 shrink-0
                ${isSelected 
                  ? "bg-white text-primary shadow-lg scale-105 font-bold" 
                  : "bg-white/10 text-primary-foreground/80 hover:bg-white/20 hover:text-white"}
              `}
            >
              {isToday ? (
                <span className="text-[10px] font-bold uppercase tracking-wider mb-0.5">Today</span>
              ) : (
                <span className="text-[10px] font-medium uppercase tracking-wider mb-0.5 opacity-80">
                  {format(date, "MMM")}
                </span>
              )}
              <span className={`text-xl font-heading ${isSelected ? "font-bold" : "font-medium"}`}>
                {format(date, "d")}
              </span>
              <span className="text-[9px] opacity-60 uppercase">
                {format(date, "EEE")}
              </span>
            </button>
          );
        })}
        
        <button className="flex flex-col items-center justify-center min-w-[3.5rem] h-16 rounded-xl bg-white/5 text-primary-foreground/60 hover:bg-white/10 hover:text-white shrink-0 transition-colors">
          <CalendarIcon size={20} className="mb-1" />
          <span className="text-[9px] font-medium uppercase">Select</span>
        </button>
      </div>
    </div>
  );
}
