"use client";

import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, Copy, ExternalLink, Check } from "lucide-react";

interface SmartMailLinkProps {
    email: string;
    subject?: string;
    body?: string;
    children: React.ReactNode;
    className?: string;
}

export function SmartMailLink({
    email,
    subject = "",
    body = "",
    children,
    className = "",
}: SmartMailLinkProps) {
    const [copied, setCopied] = useState(false);

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDefaultMail = () => {
        window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    };

    const handleGmail = () => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
        window.open(gmailUrl, "_blank");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={className} asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleDefaultMail} className="cursor-pointer">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Open Default App</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleGmail} className="cursor-pointer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <span>Open in Gmail</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopy} className="cursor-pointer">
                    {copied ? (
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                    ) : (
                        <Copy className="mr-2 h-4 w-4" />
                    )}
                    <span>{copied ? "Copied!" : "Copy Address"}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
