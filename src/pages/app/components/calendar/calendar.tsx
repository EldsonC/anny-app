// src/Calendar.tsx
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { CalendarStyle } from './style';
import { DownIcon } from '../../assets/icons/headermain/down';


interface CalendarProps {
    onSelectDate: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const generateCalendar = () => {
        const startDate = startOfWeek(startOfMonth(currentMonth));
        const endDate = endOfWeek(endOfMonth(currentMonth));

        const calendar: Date[][] = [];
        let currentDate = startDate;

        while (currentDate <= endDate) {
            const week: Date[] = Array(7)
                .fill(0)
                .map(() => {
                    const date = currentDate;
                    currentDate = addDays(currentDate, 1);
                    return date;
                });

            calendar.push(week);
        }

        return calendar;
    };

    const calendar = generateCalendar();

    return (
        <CalendarStyle className="calendar">
            <div className="header">
                <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
                <div className='btns'>
                    <button className='left' onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                        <div className='icon'>
                            {<DownIcon />}
                        </div>
                    </button>
                    <button className='right' onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                        <div className='icon'>
                            {<DownIcon />}
                        </div>
                    </button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {calendar.map((week, index) => (
                        <tr key={index}>
                            {week.map(date => (
                                <td
                                    key={date.toString()}
                                    onClick={() => onSelectDate(date)}
                                    className={isSameMonth(date, currentMonth) ? 'current-month' : 'other-month'}
                                >
                                    {isSameDay(date, new Date()) ? <strong className='same_day'>{date.getDate()}</strong> : date.getDate()}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </CalendarStyle>
    );
};
