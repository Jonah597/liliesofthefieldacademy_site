export const impactData = {
    sponsoredStudents: {
        value: "68",
        label: "Students Currently Sponsored",
        description: "Students attending local schools with sponsorship support."
    },
    highSchoolGraduatesSince2021: {
        value: "42",
        label: "High School Graduates Since 2021",
        description: "Lilies students who have graduated from high school since 2021."
    },
    universityStudents: {
        value: "4",
        label: "Students Currently Attending University",
        description: "Graduates currently continuing their education at university."
    },
    additionalProgramChildren: {
        value: "20–30",
        label: "Additional Children Reached Through After-School & Dance Programs",
        description: "Additional local children reached through after-school support and dance programs."
    }
} as const;

export type ImpactMetricKey = keyof typeof impactData;
export type ImpactMetric = (typeof impactData)[ImpactMetricKey];
