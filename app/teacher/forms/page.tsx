"use client";

import FormCard from "@/components/Teacher/FormCard";
import NavigationBar from "@/components/Teacher/NavigationBar";

const formsData = [
    { title: "SF2", image: "/images/sf2.png" },
    { title: "SF4", image: "/images/sf4.png" },
    { title: "SF8", image: "/images/sf8.png" },
    { title: "SF9", image: "/images/sf9.png" },
    { title: "SF10", image: "/images/sf10.png" },
    { title: "Certificate of Enrollment", image: "/images/cert_enrolment.png" },
    { title: "Good Moral", image: "/images/good_moral.png" },
    { title: "Quarterly Academic Certificate", image: "/images/quarter1.png" }
];

export default function TeacherForms() {
    return (
        <div className="flex min-h-screen w-full bg-muted/40 flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <NavigationBar activeTab={"forms"}/>

            <header className="px-2 sm:px-5 pt-4">
                <h1 className="text-4xl font-bold text-left">Forms</h1>
            </header>

            <main className="flex flex-wrap gap-4 p-4 sm:px-6 sm:py-0 justify-center items-center">
                {formsData.map((form, index) => (
                    <FormCard key={index} form={form}/>
                ))}
            </main>
        </div>
    );
}
