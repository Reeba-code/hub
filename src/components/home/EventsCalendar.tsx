import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";


const upcomingEvents = [
  { date: new Date(2025, 9, 16), title: "MDiHub Launch", type: "launch", color: "red" },
  { date: new Date(2025, 10, 20), title: "VR Content Launch", type: "launch", color: "blue" },
  { date: new Date(2025, 10, 25), title: "Kids Coding Academy Launch", type: "launch", color: "green" },
];

const EventsCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

 
  const nextEvent = upcomingEvents
    .filter(e => e.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Upcoming Events</h2>
          <p className="text-black-300 max-w-2xl mx-auto">
            Stay connected with our innovation community through exciting events and programs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Calendar */}
          <Card className="bg-black border-white/20 rounded-lg">
            <CardHeader>
              <CardTitle className="text-white">Event Calendar</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-full rounded-md border border-white/30 p-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md bg-black text-white w-full"
                  modifiers={{
                    event: upcomingEvents.map(e => e.date),
                    next: nextEvent ? [nextEvent.date] : [],
                  }}
                  modifiersClassNames={{
                    event: "font-bold",
                    next: "bg-purple-600 text-white font-bold rounded-full",
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Events List */}
          <Card className="bg-black border-white/20 rounded-lg">
            <CardHeader>
              <CardTitle className="text-white">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => {
                let textColor = "", bgColor = "";
                switch (event.color) {
                  case "red":
                    textColor = "text-red-400";
                    bgColor = "bg-red-700/50";
                    break;
                  case "blue":
                    textColor = "text-blue-400";
                    bgColor = "bg-blue-700/50";
                    break;
                  case "green":
                    textColor = "text-green-400";
                    bgColor = "bg-green-700/50";
                    break;
                  default:
                    textColor = "text-purple-400";
                    bgColor = "bg-purple-700/50";
                }

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg bg-black hover:${bgColor} transition-colors`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`font-semibold ${textColor}`}>{event.title}</h4>
                      <Badge
                        variant="secondary"
                        className={`capitalize text-white ${bgColor}`}
                      >
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {event.date.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
