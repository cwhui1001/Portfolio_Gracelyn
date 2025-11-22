# Project Screenshots

This directory contains screenshots for each project in the portfolio. The structure is organized as follows:

## Directory Structure

```
/images/projects/
├── sap-invoice-management/
│   ├── dashboard.jpg
│   ├── invoice-list.jpg
│   └── detail-view.jpg
├── sap-support-chatbot/
│   ├── chat-interface.jpg
│   ├── admin-panel.jpg
│   └── analytics.jpg
├── brighterus/
│   ├── homepage.jpg
│   ├── university-search.jpg
│   ├── course-details.jpg
│   └── student-dashboard.jpg
├── timeless-tribute/
│   ├── home-screen.jpg
│   ├── memorial-view.jpg
│   ├── service-booking.jpg
│   └── tribute-gallery.jpg
├── huan-fitness-pal/
│   ├── dashboard.jpg
│   ├── weight-tracker.jpg
│   ├── class-schedule.jpg
│   └── progress-charts.jpg
├── myev-car-loan/
│   ├── calculator-screen.jpg
│   ├── loan-results.jpg
│   └── car-selection.jpg
├── mytodo/
│   ├── task-list.jpg
│   ├── add-task.jpg
│   ├── calendar-view.jpg
│   └── notifications.jpg
└── sdg-climate-action/
    ├── homepage.jpg
    ├── climate-info.jpg
    ├── events-page.jpg
    └── donation-form.jpg
```

## Instructions

1. Replace the placeholder image paths in the `projects.tsx` component with actual screenshots of your projects
2. Use high-quality screenshots (recommended: 1920x1080 or higher resolution)
3. Ensure images are optimized for web (use tools like TinyPNG or similar)
4. Name files descriptively (e.g., `dashboard.jpg`, `login-screen.png`)
5. Maintain consistent aspect ratios for better visual presentation

## Image Guidelines

- **Format**: JPG or PNG preferred
- **Size**: Aim for files under 500KB each
- **Resolution**: Minimum 800x600, recommended 1920x1080
- **Content**: Show key features and user interface elements
- **Quality**: Ensure text is readable and interface is clear

## Fallback

If images are not available, the component will gracefully handle missing images with Next.js Image component's built-in fallback mechanisms.