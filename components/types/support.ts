export enum SupportCategory {
    GENERAL_INQUIRY = 'GENERAL_INQUIRY',
    SALES_CONTACT = 'SALES_CONTACT',
}

export enum SupportPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    URGENT = 'URGENT'
}

export interface MarketingRequestDto {
    contactEmail: string;
    contactName: string;
    subject: string;
    description: string;
    category: SupportCategory;
    priority: SupportPriority;
    sourceUrl: string | null;
    sourceName: string | null;
    metadata: object | null;
}