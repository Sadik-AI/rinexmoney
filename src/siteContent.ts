export type NavItem = {
  label: string
  to: string
}

export type Metric = {
  value: string
  label: string
  note: string
}

export type FeatureCard = {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
}

export type ProcessStep = {
  step: string
  title: string
  description: string
  note: string
}

export type ComplianceItem = {
  title: string
  summary: string
  status: 'Ready now' | 'Fill before launch' | 'Verify with counsel'
}

export type DocumentCard = {
  title: string
  path: string
  summary: string
  note: string
}

export type PolicySection = {
  title: string
  intro: string
  bullets: string[]
}

export type PolicyDocument = {
  title: string
  route: string
  summary: string
  updated: string
  sections: PolicySection[]
  sidebar: {
    title: string
    items: string[]
  }[]
}

export type FaqItem = {
  question: string
  answer: string
}

export type PartnerTemplate = {
  slot: string
  status: string
  details: string[]
}

export type ExternalResource = {
  title: string
  href: string
  description: string
}

export const companyProfile = {
  brandName: 'Rinex Money',
  marketplaceLabel: 'Loan marketplace and lending service partner experience',
  heroStatement:
    'A sharper Rinex website that sells confidence, explains the rules, and makes your legal posture visible before a user shares sensitive data.',
  supportPhone: '+91 7066659051',
  supportWindow: 'Monday to Saturday, 9:00 AM to 7:00 PM IST',
  legalEntityName: 'Insert legal entity name',
  registeredOffice: 'Insert registered office address',
  corporateEmail: 'Insert primary support email',
  grievanceOfficerName: 'Insert nodal grievance officer name',
  grievanceOfficerEmail: 'Insert grievance officer email',
  grievanceOfficerPhone: 'Insert grievance officer phone',
  cin: 'Insert CIN',
  lastUpdated: 'March 18, 2026',
}

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Legal Center', to: '/legal' },
  { label: 'Partner Lenders', to: '/partner-lenders' },
  { label: 'Grievance', to: '/grievance-redressal' },
]

export const heroMetrics: Metric[] = [
  {
    value: 'Rs 15L',
    label: 'Offer range',
    note: 'Position the marketplace around clearly described loan ranges, not vague approval hype.',
  },
  {
    value: '100%',
    label: 'Disclosure-first',
    note: 'Show lender identity, APR logic, fees, and complaint paths before application lock-in.',
  },
  {
    value: '24 hrs',
    label: 'Target acknowledgment',
    note: 'A visible complaint acknowledgment target calms users faster than generic support copy.',
  },
]

export const homeFeatures: FeatureCard[] = [
  {
    eyebrow: 'Trust architecture',
    title: 'Say who Rinex is before asking for PAN or Aadhaar',
    description:
      'The homepage now leads with marketplace clarity. Rinex is presented as the brand interface and matching layer, while lending happens through RBI-regulated partners.',
    bullets: [
      'No direct-lender ambiguity',
      'No fake regulator halo language',
      'No buried disclaimer in the footer only',
    ],
  },
  {
    eyebrow: 'Data readiness',
    title: 'Treat consent as a product feature',
    description:
      'Each data touchpoint should explain what is collected, why it is needed, where it goes, and how a user can withdraw or escalate.',
    bullets: [
      'Purpose-led collection copy',
      'Plain-language privacy entry points',
      'Visible redressal and deletion pathways',
    ],
  },
  {
    eyebrow: 'Commercial credibility',
    title: 'Convert better by removing suspicion',
    description:
      'Real comparison logic, partner disclosures, and no-deception copy usually outperform aggressive loan claims over time because users trust what they can verify.',
    bullets: [
      'Explain ranking methodology',
      'Show complaint flow up front',
      'Back every public claim with proof',
    ],
  },
]

export const experienceCards: FeatureCard[] = [
  {
    eyebrow: 'Marketplace flow',
    title: 'Offer discovery',
    description:
      'A user sees who the actual lender is, what the APR band looks like, how tenures change EMI, and whether prepayment or cooling-off conditions apply.',
    bullets: [
      'Lender legal name on each offer',
      'APR and fee visibility before proceeding',
      'No dark-pattern product pushing',
    ],
  },
  {
    eyebrow: 'Applicant comfort',
    title: 'Guided onboarding',
    description:
      'Sensitive steps explain why the information matters. This keeps completion high without making the application feel extractive.',
    bullets: [
      'Purpose labels for PAN, Aadhaar, income, and bank details',
      'Soft reassurance around KYC and storage',
      'Short support and grievance links beside the form',
    ],
  },
  {
    eyebrow: 'Post-application clarity',
    title: 'Servicing and escalation',
    description:
      'Users should never wonder who handles EMI servicing, complaints, or lender-side decisions once they move forward with a partner.',
    bullets: [
      'Servicing ownership map',
      'Lender complaint details',
      'RBI CMS and Sachet escalation references',
    ],
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Set the public truth',
    description:
      'Lead with what Rinex does, what it does not do, and how lending partners fit into the flow.',
    note: 'Use the same identity across hero copy, legal docs, footer, and offer cards.',
  },
  {
    step: '02',
    title: 'Publish the legal center',
    description:
      'Give users one place to find privacy, terms, grievance details, partner disclosures, and fraud warnings.',
    note: 'This reduces both bounce and support burden because answers are easy to locate.',
  },
  {
    step: '03',
    title: 'Make offers comparable',
    description:
      'Each offer needs the lender name, APR, tenure, repayment view, penal-charge logic, and KFS link or handoff.',
    note: 'Comparison has to be objective, not hidden behind aggressive language.',
  },
  {
    step: '04',
    title: 'Stay audit-ready',
    description:
      'Keep a clean record of claims, partner agreements, consent copy, and complaint ownership before scaling traffic.',
    note: 'The site should help your operations team as much as your marketing team.',
  },
]

export const complianceBoard: ComplianceItem[] = [
  {
    title: 'Marketplace identity',
    summary:
      'Homepage language now frames Rinex as a marketplace or LSP-facing interface, not the lender itself.',
    status: 'Ready now',
  },
  {
    title: 'Visible grievance path',
    summary:
      'Dedicated grievance page, timeline, and official escalation resources are part of the main navigation.',
    status: 'Ready now',
  },
  {
    title: 'Legal entity details',
    summary:
      'Your legal entity name, registered office, CIN, and grievance officer fields are intentionally marked for replacement.',
    status: 'Fill before launch',
  },
  {
    title: 'Partner roster and KFS links',
    summary:
      'Partner-lender cards are designed, but you must plug in actual regulated entities and their disclosure assets.',
    status: 'Fill before launch',
  },
  {
    title: 'Public claims validation',
    summary:
      'Any rating, volume, approval-speed, or security claim should be backed internally before publishing.',
    status: 'Verify with counsel',
  },
  {
    title: 'Policy language review',
    summary:
      'Privacy and terms drafts are strong operational templates, but should still be reviewed against your live flow and vendor stack.',
    status: 'Verify with counsel',
  },
]

export const legalDocuments: DocumentCard[] = [
  {
    title: 'Privacy Policy',
    path: '/privacy-policy',
    summary:
      'Explains collection, purpose limitation, partner sharing, retention logic, and rights handling in plain language.',
    note: 'Use this page as the main reference from every form step that touches personal data.',
  },
  {
    title: 'Terms of Use',
    path: '/terms-of-use',
    summary:
      'Defines the marketplace relationship, eligibility, content standards, risk disclaimers, and acceptable site use.',
    note: 'This is where you make the commercial relationship unambiguous.',
  },
  {
    title: 'Partner Lenders',
    path: '/partner-lenders',
    summary:
      'A disclosure page for lender roster, ranking logic, KFS handoff expectations, and servicing ownership.',
    note: 'Do not hide the actual lender behind Rinex branding.',
  },
  {
    title: 'Grievance Redressal',
    path: '/grievance-redressal',
    summary:
      'Defines complaint ownership, timelines, nodal officer contact details, and RBI escalation routes.',
    note: 'Keep this page visible in the header and footer, not as an afterthought.',
  },
]

export const launchChecklist = [
  'Replace the legal entity name, registered office, CIN, and support email placeholders.',
  'Insert your actual regulated lending partners with lender-specific complaint details.',
  'Verify APR, fee, disbursal-time, and service claims against signed partner terms and evidence.',
  'Add your production privacy email, data deletion workflow, and vendor list if personal data is shared.',
  'Connect the complaint form or CTA to your operations workflow before going live.',
]

export const partnerDisclosureItems = [
  'Show the exact legal name of the lender on every offer card and comparison table.',
  'Describe the ranking logic in public language, such as eligibility fit, APR competitiveness, and turnaround readiness.',
  'Display APR, tenure, repayment view, processing-fee logic, and penal-charge treatment before a user commits.',
  'Clarify which party owns underwriting, sanction, disbursal, repayment servicing, and complaint resolution.',
  'Link or hand off to the lender-specific KFS, sanction letter, and loan terms before final acceptance.',
]

export const partnerTemplates: PartnerTemplate[] = [
  {
    slot: 'Primary salaried personal loan partner',
    status: 'Pending actual partner data',
    details: [
      'Insert lender legal name and entity type',
      'Add product scope, APR band, tenure range, and processing-fee logic',
      'Add lender complaint contact and KFS access method',
    ],
  },
  {
    slot: 'Fast-disbursal backup partner',
    status: 'Pending actual partner data',
    details: [
      'Explain when this lender appears in ranking',
      'Add expected turnaround and underwriting caveats',
      'Specify whether cooling-off and prepayment rules differ',
    ],
  },
  {
    slot: 'Higher-ticket marketplace option',
    status: 'Pending actual partner data',
    details: [
      'Define minimum income or score fit if you plan to surface this offer',
      'Add who services the account after disbursal',
      'Add lender-side grievance escalation contact',
    ],
  },
]

export const grievanceSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Acknowledge fast',
    description:
      'Confirm receipt quickly so the user knows the complaint is live and owned.',
    note: 'A same-day acknowledgment target is a strong operational norm even before final resolution.',
  },
  {
    step: '02',
    title: 'Route to the correct owner',
    description:
      'Separate platform complaints from lender-servicing complaints, but do not make the borrower guess where to start.',
    note: 'If Rinex touched the interface, Rinex should help route the complaint cleanly.',
  },
  {
    step: '03',
    title: 'Resolve or escalate',
    description:
      'Where the regulated lender owns the decision, communicate that clearly and provide the lender complaint path.',
    note: 'Escalation must be visible if the borrower is unsatisfied or receives no reply.',
  },
  {
    step: '04',
    title: 'Publish official options',
    description:
      'Point users to RBI CMS and Sachet where relevant, along with clear timing expectations.',
    note: 'This is part of trust, not a sign of weakness.',
  },
]

export const officialResources: ExternalResource[] = [
  {
    title: 'RBI Complaint Management System',
    href: 'https://cms.rbi.org.in',
    description:
      'For escalations where the regulated lender is responsible and the borrower is unsatisfied with the reply or gets no response within the expected window.',
  },
  {
    title: 'RBI Sachet Portal',
    href: 'https://sachet.rbi.org.in',
    description:
      'Useful for checking and reporting concerns around unauthorized deposit-taking or financial-service misconduct signals.',
  },
  {
    title: 'UIDAI Offline Aadhaar e-KYC Guidance',
    href: 'https://uidai.gov.in/307-faqs/aadhaar-online-services/aadhaar-paperless-offline-e-kyc/10726-what-is-aadhaar-paperless-offline-e-kyc.html',
    description:
      'A useful reference when deciding how to reduce unnecessary Aadhaar handling in onboarding flows.',
  },
]

export const faqItems: FaqItem[] = [
  {
    question: 'Is Rinex the lender on this website?',
    answer:
      'This build positions Rinex as a marketplace or lending-service interface unless you explicitly replace that model with your own regulated lending entity details.',
  },
  {
    question: 'Why are there placeholders in legal sections?',
    answer:
      'Because legal entity names, addresses, partner rosters, and grievance officer details should never be guessed. The framework is ready, and your live facts need to be inserted before launch.',
  },
  {
    question: 'Can this site go live as-is?',
    answer:
      'The design and information architecture are production-quality, but the marked legal placeholders and partner data need to be completed and reviewed before public launch.',
  },
  {
    question: 'Why does the site talk so much about complaints and disclosures?',
    answer:
      'In lending, visible complaint and disclosure paths increase trust. They are not conversion killers. They often reduce hesitation because users feel the company is accountable.',
  },
]

export const privacyPolicy: PolicyDocument = {
  title: 'Privacy Policy',
  route: '/privacy-policy',
  summary:
    'A plain-language privacy framework for a digital loan marketplace that collects only what is needed, explains why it is needed, and gives users visible rights and redressal paths.',
  updated: companyProfile.lastUpdated,
  sections: [
    {
      title: 'What this policy covers',
      intro:
        'This policy describes how Rinex Money collects, uses, stores, shares, and protects personal data when a visitor uses the website, explores loan offers, submits an application request, or contacts support.',
      bullets: [
        'The website should clearly state whether Rinex acts as a marketplace, LSP, or regulated lender.',
        'Where a regulated lender ultimately owns underwriting or servicing, that handoff should be made visible to the user.',
        'This policy should be read together with the Terms of Use, Partner Lenders page, and Grievance Redressal page.',
      ],
    },
    {
      title: 'What data may be collected',
      intro:
        'Rinex may collect data that is reasonably required to identify a user, evaluate marketplace fit, support onboarding, respond to complaints, or comply with law.',
      bullets: [
        'Identity and contact data such as name, phone number, email address, city, and communication details.',
        'Application data such as income range, employment type, loan amount requirement, repayment preference, and credit-profile inputs.',
        'KYC and verification data such as PAN details, Aadhaar-linked verification data, address inputs, and proof documents where needed.',
        'Technical and usage data such as device information, browser data, IP address, referral source, and consent logs.',
      ],
    },
    {
      title: 'How and why data is used',
      intro:
        'Personal data should be processed only for lawful and clearly stated purposes connected to the services offered on the website.',
      bullets: [
        'To help a user explore or compare relevant loan options and partner-lender offers.',
        'To support onboarding, KYC, application progression, fraud prevention, and operational communication.',
        'To send service-related messages, including application updates, support responses, and grievance handling updates.',
        'To improve the website, strengthen security, investigate misuse, and comply with legal or regulatory obligations.',
      ],
    },
    {
      title: 'When data may be shared',
      intro:
        'Data should only be shared where the website has a lawful basis to do so and where the user can understand the reason for the sharing.',
      bullets: [
        'With regulated lending partners when the user requests or advances toward a specific lending opportunity.',
        'With service providers who support hosting, analytics, communication, KYC, fraud review, or customer operations under appropriate contractual controls.',
        'With legal, regulatory, investigative, or law-enforcement authorities where required by law or formal process.',
        'With no third party for unrelated marketing unless a separate valid consent has been obtained.',
      ],
    },
    {
      title: 'Retention, security, and user choices',
      intro:
        'Rinex should keep data only as long as reasonably needed for the stated purpose, operational records, complaint handling, fraud prevention, or legal retention duties.',
      bullets: [
        'Sensitive data collection should be minimized and purpose labels should appear where the data is requested.',
        'Reasonable technical and organizational safeguards should be applied to storage, access control, logging, and vendor management.',
        'Users should be told how to request access, correction, withdrawal of consent, or deletion where legally available.',
        'If a user withdraws consent, Rinex may stop enabling functions that depend on that data while retaining information that must be kept under law or for dispute handling.',
      ],
    },
  ],
  sidebar: [
    {
      title: 'Complete before launch',
      items: [
        'Insert the legal entity name and support email.',
        'Add your live vendor or processor categories if personal data is shared with them.',
        'Confirm the retention workflow used by operations and engineering.',
      ],
    },
    {
      title: 'User touchpoints',
      items: [
        'Link this page from the footer and every application step.',
        'Use short inline notices beside PAN, Aadhaar, income, and bank fields.',
        'Add a deletion and correction request route that your team actually monitors.',
      ],
    },
  ],
}

export const termsOfUse: PolicyDocument = {
  title: 'Terms of Use',
  route: '/terms-of-use',
  summary:
    'A commercial framework for a marketplace-led digital lending website that makes the service scope, user obligations, lender ownership, and limitation boundaries easy to understand.',
  updated: companyProfile.lastUpdated,
  sections: [
    {
      title: 'Nature of the service',
      intro:
        'The website is designed to help users understand, compare, and progress toward personal-loan opportunities offered by regulated lending partners, unless Rinex is separately disclosed as the lender for a specific product.',
      bullets: [
        'Use the site copy consistently so users do not mistake Rinex for the lender where that is not the case.',
        'Loan approval, sanction, disbursal, pricing, and repayment terms remain subject to the relevant lender and applicant profile.',
        'Nothing on the site should be read as a guarantee of approval, disbursal speed, or loan amount.',
      ],
    },
    {
      title: 'User eligibility and conduct',
      intro:
        'A visitor must provide accurate information, use the website lawfully, and avoid submitting false, misleading, or unauthorized data.',
      bullets: [
        'A user must not impersonate another person or submit inaccurate KYC or financial information.',
        'A user must not attempt to interfere with site security, scraping protections, application logic, or partner integrations.',
        'Rinex may suspend or block abusive, fraudulent, or unlawful activity without prior notice where appropriate.',
      ],
    },
    {
      title: 'Offer information and third-party responsibility',
      intro:
        'The site may surface offer summaries, comparison views, and application-routing tools, but lender-provided documents remain the governing source for the actual credit product.',
      bullets: [
        'APR, fee, and repayment illustrations should be treated as indicative until confirmed in the lender-side KFS or sanction documentation.',
        'Third-party links, partner portals, or lender pages may carry their own terms, disclosures, and privacy policies.',
        'Rinex should explain its ranking methodology without implying exclusive endorsement by any regulator or government body.',
      ],
    },
    {
      title: 'Intellectual property, disclaimers, and liability limits',
      intro:
        'The design, text, graphics, layout, and brand assets on the site remain protected content unless otherwise stated.',
      bullets: [
        'Visitors may not copy, republish, scrape, or reuse protected content without permission.',
        'The site is provided on an as-available basis, subject to maintenance, updates, and third-party dependencies.',
        'Liability should be limited to the extent permitted by law, especially for indirect losses, third-party actions, or lender-side decisions outside Rinex control.',
      ],
    },
    {
      title: 'Complaints, governing law, and changes',
      intro:
        'A user should be directed to the Grievance Redressal page for complaint handling and escalation routes.',
      bullets: [
        'These terms should name the governing law, jurisdiction, and the correct legal entity before launch.',
        'If the site or service scope changes materially, Rinex should update the date and notify users where required.',
        'The complaint process should stay aligned with the visible grievance contact details and partner-handling model.',
      ],
    },
  ],
  sidebar: [
    {
      title: 'Complete before launch',
      items: [
        'Insert governing law and jurisdiction.',
        'Insert the exact legal entity name and registered office.',
        'Review service descriptions against your partner contracts and actual operational flow.',
      ],
    },
    {
      title: 'Commercial hygiene',
      items: [
        'Avoid guarantees of approval or instant disbursal.',
        'Avoid unverified ratings, user-count, or regulator-endorsement claims.',
        'Make the lender, not the platform, the owner of underwriting decisions where accurate.',
      ],
    },
  ],
}
