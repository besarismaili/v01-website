// Settings for the contact form. Nothing here is secret: the form sends mail
// through Amazon SES using the permissions of the site's own hosting role, so
// there are no keys or passwords in the code or in environment variables.

// Where form messages arrive.
export const CONTACT_TO = "hello@v01.ca";

// The address the messages are sent from. It must be verified in Amazon SES in
// the region below. A visitor's own address goes in Reply-To, so pressing
// Reply in the mailbox answers the visitor.
export const CONTACT_FROM = "VERSION ONE website <hello@v01.ca>";

// The AWS region where the SES address is verified.
export const SES_REGION = "us-east-2";

// The choices in the form's "What is it?" list.
export const CONTACT_KINDS = [
  "Commercial or branded film",
  "Film or episodic sequence",
  "Test shot",
  "Workflow R&D",
  "Something else",
] as const;

// Longest text the form accepts in each field.
export const CONTACT_LIMITS = { name: 120, email: 200, company: 160, message: 5000 };
