import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Certification = {
    name: string;
};

type Education = {
    institution: string;
    degree: string;
    major: string;
    period: string;
};

// usually get this from api maybe but will leave it here for simplicity
const certifications: Certification[] = [{ name: "Azure Fundamentals" }];
const education: Education = {
    institution: "Auckland University of Technology",
    degree: "Bachelor of Computer and Information Sciences",
    major: "Software Development",
    period: "Feb 2015 - Aug 2018",
}

export function CertsAward() {
    return (
        <section id="certs-awards" className="space-y-5 scroll-mt-20">
            <div className="flex items-center gap-3">
                <Award className="portfolio-icon size-5" />
                <h2 className="text-2xl font-semibold">Certs & Awards</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
                <Card className="gap-3 rounded-[1.5rem] py-5">
                    <CardHeader className="px-5 pb-0">
                        <CardTitle className="text-lg">Education</CardTitle>
                    </CardHeader>
                    <CardContent className="px-5">
                        <p className="font-medium">{education.institution}</p>
                        <p className="text-sm text-muted-foreground">{education.period}</p>
                        <p className="mt-2">{education.degree}</p>
                        <p className="text-sm text-muted-foreground">Major: {education.major}</p>
                    </CardContent>
                </Card>
                <Card className="gap-3 rounded-[1.5rem] py-5">
                    <CardHeader className="px-5 pb-0">
                        <CardTitle className="text-lg">Certifications</CardTitle>
                    </CardHeader>
                    <CardContent className="px-5">
                        <ul className="space-y-1">
                            {certifications.map((certification) => (
                                <li key={certification.name}>{certification.name}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}