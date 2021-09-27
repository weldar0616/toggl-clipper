export interface ClippableModel {
  loadApiToken: () => Promise<void>;
  fetchItems(): Promise<void>;
  get formattedText(): string;
}
