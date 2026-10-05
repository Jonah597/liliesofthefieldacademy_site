/**
 * FILE: types/index.ts
 *
 * PURPOSE:
 * Defines the shared TypeScript interfaces and types used across the application.
 *
 * RESPONSIBILITIES:
 * - Provides a single place to define the "shape" of common data structures
 * - Ensures consistent data handling across components and pages
 * - Helps TypeScript catch type errors at compile time rather than at runtime
 *
 * USED BY:
 * Any component or page that works with programs, impact statistics, team members,
 * gallery photos, stories, donation options, or contact form data.
 *
 * NOTE:
 * These types are defined here but several pages also define local inline data
 * that does not use these types. This file represents the intended type contracts
 * for reusable or shared data structures.
 */

/**
 * Represents an educational program offered by the academy.
 *
 * Used to type-check data for program listings on the Programs page
 * and any other area that displays program information.
 */
export interface Program {
  /** Unique identifier string for the program (e.g., "academic-foundation"). */
  id: string;

  /** Human-readable name of the program (e.g., "Academic Foundation"). */
  title: string;

  /** Broad category the program belongs to (e.g., "Arts", "Academics"). */
  category: string;

  /** Short description displayed in listings or cards. */
  description: string;

  /** Full, expanded description used on detail views. Optional. */
  longDescription?: string;

  /** Path to the program's representative image (relative to /public). */
  image: string;

  /** A brief statistic displayed alongside the program (e.g., "68 Students"). Optional. */
  stats?: string;

  /** A URL or route path for the program's detail page. Optional. */
  link?: string;
}

/**
 * Represents a single impact statistic displayed on the Home and Impact pages.
 *
 * Impact stats show real numbers that communicate the academy's reach,
 * such as number of students sponsored or graduates.
 */
export interface ImpactStat {
  /** Short label for the statistic (e.g., "Students Sponsored"). */
  label: string;

  /** The numeric value of the statistic. */
  value: number;

  /**
   * Optional text appended after the number in the UI (e.g., "+" or "%").
   * Allows the display to read "68+" without storing the formatting in the value.
   */
  suffix?: string;

  /**
   * Optional text placed before the number (e.g., "$").
   * Useful for monetary or currency-based statistics.
   */
  prefix?: string;

  /** A sentence providing context for what the statistic means. */
  description: string;

  /** Optional icon identifier string. Not currently used by all components. */
  icon?: string;
}

/**
 * Represents a staff member or board director displayed on the About page.
 *
 * The academy displays both founding leadership and board members, each
 * of whom has a name, role, biography, and photo.
 */
export interface TeamMember {
  /** Full name of the team member. */
  name: string;

  /** Title or role within the organization (e.g., "Co-Founder & Director"). */
  role: string;

  /** Biographical text describing the member's background and contributions. */
  bio: string;

  /** Path to the member's photo (relative to /public). */
  image: string;

  /**
   * Optional collection of social media and contact links.
   * Links are undefined when not provided.
   */
  socials?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

/**
 * Represents an individual image entry in the photo gallery.
 *
 * Gallery items are displayed on the Gallery page and can be filtered
 * by category. Each item has a title and optional description.
 */
export interface GalleryItem {
  /** Unique identifier for the gallery item. */
  id: string;

  /** Short title describing the photo (e.g., "Cultural Drumming Rehearsal"). */
  title: string;

  /** Broad category used for filtering (e.g., "Arts", "Academics"). */
  category: string;

  /** Path to the image file (relative to /public). */
  image: string;

  /** Optional extended description of what the photo depicts. */
  description?: string;

  /** Optional date string indicating when the photo was taken or published. */
  date?: string;
}

/**
 * Represents a student or community story published on the Stories page.
 *
 * Stories share real student journeys, program updates, and community
 * news from the academy.
 */
export interface Story {
  /** Unique identifier for the story. */
  id: string;

  /** Headline of the story. */
  title: string;

  /** Name of the person who wrote or is the subject of the story. */
  author: string;

  /** Publication date as a display string (e.g., "October 2024"). */
  date: string;

  /** Estimated reading time displayed to the user (e.g., "4 min read"). */
  readTime: string;

  /** Short teaser text shown in story cards before the reader clicks through. */
  excerpt: string;

  /** Full body text of the story, displayed on the detail view. */
  content: string;

  /** Path to the story's featured image (relative to /public). */
  image: string;

  /** Category label for grouping or filtering stories (e.g., "Academic Progress"). */
  category: string;
}

/**
 * Represents a suggested donation amount shown on the Donate page.
 *
 * NOTE: The actual donation form and payment processing is handled by
 * Little Green Light, not by this interface. This type is for any
 * informational donation option cards that describe what a gift can fund.
 */
export interface DonationOption {
  /** Suggested monetary donation amount in USD. */
  amount: number;

  /** Short label describing what this amount can fund (e.g., "Monthly Sponsorship"). */
  label: string;

  /** More detailed description of the impact of this donation. */
  description: string;

  /**
   * When true, this option is visually highlighted as the recommended choice.
   * Defaults to false when not provided.
   */
  isPopular?: boolean;
}

/**
 * Represents the data submitted through the contact inquiry form.
 *
 * Used to type-check the values collected by the form on the Contact page
 * before they are processed.
 *
 * IMPORTANT:
 * As of the current implementation, the contact form does not send data to
 * a backend API or email service — it only shows a client-side success state.
 * This interface describes the intended shape of the form data if a backend
 * integration is added in the future.
 */
export interface ContactFormInput {
  /** Sender's full name. */
  name: string;

  /** Sender's email address for reply correspondence. */
  email: string;

  /** Brief subject line describing the nature of the inquiry. */
  subject: string;

  /** Full body text of the inquiry message. */
  message: string;
}
