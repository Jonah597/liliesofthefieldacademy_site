/**
 * FILE: impact-data.ts
 *
 * PURPOSE:
 * Defines and exports the core impact statistics for Lilies of the Field Academy.
 * These are real-world program outcome numbers that appear on the Home page,
 * About page, Programs page, Impact page, and Donate page.
 *
 * RESPONSIBILITIES:
 * - Stores the single source of truth for all impact metrics displayed site-wide
 * - Provides type exports derived from the data shape so TypeScript can verify
 *   correct usage in components
 *
 * IMPORTANT:
 * When these numbers change (e.g., a new cohort graduates, more students are
 * sponsored), this is the ONLY file that needs to be updated. All pages that
 * display these numbers read from this file automatically.
 *
 * USED BY:
 * - src/app/page.tsx (Home page — hero stats and progress section)
 * - src/app/about/page.tsx (About page — Our Progress section)
 * - src/app/programs/page.tsx (Programs page — per-program statistics)
 * - src/app/impact/page.tsx (Impact page — key metrics section)
 * - src/app/donate/page.tsx (Donate page — impact stats strip)
 */

/**
 * The authoritative collection of impact metrics for the academy.
 *
 * Declared `as const` so TypeScript treats every value as a literal type
 * (e.g., value: "68" rather than value: string), which prevents accidental
 * mutation and enables more precise typing of the derived type aliases below.
 */
export const impactData = {
    /** Number of students currently receiving sponsorship to attend local schools. */
    sponsoredStudents: {
        value: "68",
        label: "Students Currently Sponsored",
        description: "Students attending local schools with sponsorship support."
    },

    /** Cumulative count of Lilies students who completed high school since 2021. */
    highSchoolGraduatesSince2021: {
        value: "42",
        label: "High School Graduates Since 2021",
        description: "Lilies students who have graduated from high school since 2021."
    },

    /** Number of Lilies graduates currently enrolled in university-level education. */
    universityStudents: {
        value: "4",
        label: "Students Currently Attending University",
        description: "Graduates currently continuing their education at university."
    },

    /**
     * Approximate count of community children participating in after-school
     * support or dance programs who are NOT counted among the sponsored students.
     * Uses a range string ("20–30") because headcount varies week-to-week.
     */
    additionalProgramChildren: {
        value: "20–30",
        label: "Additional Children Reached Through After-School & Dance Programs",
        description: "Additional local children reached through after-school support and dance programs."
    }
} as const;

/**
 * The string union of all metric keys in impactData.
 * Example values: "sponsoredStudents" | "highSchoolGraduatesSince2021" | ...
 */
export type ImpactMetricKey = keyof typeof impactData;

/**
 * The value type of any single metric object from impactData.
 * Each metric has a value string, a label string, and a description string.
 */
export type ImpactMetric = (typeof impactData)[ImpactMetricKey];
