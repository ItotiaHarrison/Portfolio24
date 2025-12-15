import React from "react";

interface TimelineItemProps {
  timeRange: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  timeRange,
  title,
  company,
  description,
}) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-8 group">
      <div className="font-mono text-sm text-green-400 mb-2 sm:mb-0 sm:absolute sm:left-0 sm:text-right sm:w-28 uppercase tracking-wider">
        {timeRange}
      </div>
      <div className="flex flex-col sm:pl-8 sm:border-l-2 border-slate-600">
        <div className="absolute -left-1 sm:left-[7.5rem] w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-green-500/50"></div>
        <h3 className="font-serif text-xl font-bold text-slate-100 mb-1">{title}</h3>
        <p className="text-yellow-400 font-semibold mb-3 font-mono text-sm">{company}</p>
        <p className="text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
