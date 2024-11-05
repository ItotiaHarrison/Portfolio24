import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, company, description }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-medium text-indigo-600 mb-1 sm:mb-0 sm:absolute sm:left-0 sm:text-right sm:w-24">
        {year}
      </div>
      <div className="flex flex-col sm:pl-8 sm:border-l border-gray-300">
        <div className="absolute -left-1 sm:left-[7.5rem] w-2 h-2 bg-indigo-600 rounded-full group-hover:scale-150 transition-transform"></div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-indigo-600 font-medium mb-2">{company}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;