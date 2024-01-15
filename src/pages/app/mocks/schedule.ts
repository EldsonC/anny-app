interface ScheduleSchema {
    status_global: number;
    day: number;
    date: string;
    plan: boolean;
    schedule: {
        start: string,
        end: string,
    };
    name: string;
    details: string;
}

export const schedule:ScheduleSchema[] = [
    {
        status_global: 0,
        day: 28,
        date: "wed",
        plan: false,
        schedule: {
            start: "09:00",
            end: "09:30"
        },
        name: "Anna Paula",
        details: "corte na tesoura"
    },

    {
        status_global: 1,
        day: 28,
        date: "wed",
        plan: true,
        schedule: {
            start: "09:00",
            end: "09:30"
        },
        name: "Anna Paula",
        details: "corte na tesoura"
    },

    {
        status_global: 2,
        day: 28,
        date: "wed",
        plan: false,
        schedule: {
            start: "09:00",
            end: "09:30"
        },
        name: "Anna Paula",
        details: "corte na tesoura"
    },

    {
        status_global: 1,
        day: 28,
        date: "wed",
        plan: false,
        schedule: {
            start: "09:00",
            end: "09:30"
        },
        name: "Anna Paula",
        details: "corte na tesoura"
    },
    {
        status_global: 0,
        day: 28,
        date: "wed",
        plan: true,
        schedule: {
            start: "09:00",
            end: "09:30"
        },
        name: "Anna Paula",
        details: "corte na tesoura"
    },

    {
        status_global: 0,
        day: 28,
        date: "wed",
        plan: false,
        schedule: {
            start: "09:00",
            end: "09:30"
        },
        name: "Anna Paula",
        details: "corte na tesoura"
    },
    
]