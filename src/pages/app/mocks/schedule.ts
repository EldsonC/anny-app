interface ScheduleSchema {
    day: number;
    date: string;
    schedule: {
        start: string,
        end: string,
    };
    name: string;
}
export const schedule:ScheduleSchema[] = [
    {
        day: 28,
        date: "wed",
        schedule: {
            start: "09:00",
            end: "09:30"
        },
        name: "Anna Paula"
            
    },
    {
        day: 29,
        date: "Thu",
        schedule: {
            start: "09:30",
            end: "10:00"
        },
        name: "Pedro Ysaque"
            
    }
]