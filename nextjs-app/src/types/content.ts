export interface ContentItem {
  id: string;
  content: string;
  metadata?: Record<string, any>;
}

export interface CleaningOptions {
  trim?: boolean;
  removeHtml?: boolean;
  removeUrls?: boolean;
  removeSpecialChars?: boolean;
  removeExtraSpaces?: boolean;
  normalizePunctuation?: boolean;
  removeLineBreaks?: boolean;
  toLowerCase?: boolean;
  toUpperCase?: boolean;
  removeNumbers?: boolean;
}

export interface HistoryItem {
  id: string;
  original: string;
  cleaned: string;
  options: CleaningOptions;
  timestamp: number;
}
