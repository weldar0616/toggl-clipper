export interface Clippable {
  fetchItems(): Promise<void>;
  get formattedText(): string;
}
