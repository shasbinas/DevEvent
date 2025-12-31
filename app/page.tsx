import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";

import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";
import mongoose from "mongoose";

const Page = async () => {
    
    await connectDB();
    
    // Debug logging
    console.log('--- PAGE LOAD DEBUG ---');
    console.log('DB Host:', mongoose.connection.host);
    console.log('DB Name:', mongoose.connection.name);
    
    const events = await Event.find({}).sort({ createdAt: -1 }).lean();
    console.log('Fetched Events Count:', events.length);
    if (events.length > 0) {
        console.log('Event Titles:', events.map((e: any) => e.title));
    }
    console.log('-----------------------');

    return (
        <section>
            <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

            <ExploreBtn />

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events && events.length > 0 && events.map((event) => (
                        <li key={event.title} className="list-none">
                            <EventCard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Page;
