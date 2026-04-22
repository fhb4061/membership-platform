import { Mail, MapPin, Phone, UserRound } from "lucide-react";

type PortfolioContact = {
    email: string;
    phone: string;
    linkedinUrl: string;
    linkedinLabel: string;
    location: string;
};

// usually get this from api maybe but will leave it here for simplicity
const contact: PortfolioContact = {
    email: "jonathanlopeti@gmail.com",
    phone: "+61 401 237 175",
    linkedinUrl: "https://www.linkedin.com/in/tane-lopeti",
    linkedinLabel: "linkedin.com/in/tane-lopeti",
    location: "Melbourne, Australia",
}


export function Contact() {
    return (
        <section id="contact" className="scroll-mt-20 space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-3">
                    <Mail className="portfolio-icon mt-0.5 size-4" />
                    <a className="underline underline-offset-4 hover:text-muted-foreground" href={`mailto:${contact.email}`}>
                        {contact.email}
                    </a>
                </li>
                <li className="flex items-start gap-3">
                    <Phone className="portfolio-icon mt-0.5 size-4" />
                    <span>{contact.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                    <UserRound className="portfolio-icon mt-0.5 size-4" />
                    <a
                        className="underline underline-offset-4 hover:text-muted-foreground"
                        href={contact.linkedinUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {contact.linkedinLabel}
                    </a>
                </li>
                <li className="flex items-start gap-3">
                    <MapPin className="portfolio-icon mt-0.5 size-4" />
                    <span>{contact.location}</span>
                </li>
            </ul>
        </section>
    )
}